export const HIGHLIGHT_COLORS = [
  {
    id: 'yellow',
    label: 'Geel',
    cssName: 'smartium-hl-yellow',
    markClass:
      'smartium-hl smartium-hl-yellow bg-yellow-200/80 dark:bg-yellow-400/35 text-inherit rounded-sm px-0.5',
  },
  {
    id: 'green',
    label: 'Groen',
    cssName: 'smartium-hl-green',
    markClass:
      'smartium-hl smartium-hl-green bg-emerald-200/80 dark:bg-emerald-400/30 text-inherit rounded-sm px-0.5',
  },
  {
    id: 'pink',
    label: 'Roze',
    cssName: 'smartium-hl-pink',
    markClass:
      'smartium-hl smartium-hl-pink bg-rose-200/80 dark:bg-rose-400/30 text-inherit rounded-sm px-0.5',
  },
  {
    id: 'blue',
    label: 'Blauw',
    cssName: 'smartium-hl-blue',
    markClass:
      'smartium-hl smartium-hl-blue bg-sky-200/80 dark:bg-sky-400/30 text-inherit rounded-sm px-0.5',
  },
]

export function getHighlightColorClass(colorId) {
  return HIGHLIGHT_COLORS.find((c) => c.id === colorId)?.markClass || HIGHLIGHT_COLORS[0].markClass
}

export function supportsCssCustomHighlight() {
  return typeof CSS !== 'undefined' && typeof CSS.highlights !== 'undefined' && typeof Highlight !== 'undefined'
}

function getNodeIndexPath(node, root) {
  const path = []
  let current = node
  while (current && current !== root) {
    const parent = current.parentNode
    if (!parent) return null
    path.unshift(Array.prototype.indexOf.call(parent.childNodes, current))
    current = parent
  }
  return current === root ? path : null
}

function resolveNodeIndexPath(path, root) {
  if (!Array.isArray(path) || !root) return null
  let node = root
  for (const idx of path) {
    if (!node || idx < 0 || idx >= node.childNodes.length) return null
    node = node.childNodes[idx]
  }
  return node
}

export function serializeRange(range, root) {
  if (!range || !root) return null
  const startPath = getNodeIndexPath(range.startContainer, root)
  const endPath = getNodeIndexPath(range.endContainer, root)
  if (!startPath || !endPath) return null
  const text = range.toString()
  if (!text.trim()) return null
  return {
    startPath,
    startOffset: range.startOffset,
    endPath,
    endOffset: range.endOffset,
    text,
    occurrence: countTextOccurrenceBeforeRange(root, text, range),
  }
}

export function deserializeRange(data, root) {
  if (!data || !root) return null
  const startNode = resolveNodeIndexPath(data.startPath, root)
  const endNode = resolveNodeIndexPath(data.endPath, root)
  if (!startNode || !endNode) return null
  try {
    const range = document.createRange()
    range.setStart(startNode, data.startOffset)
    range.setEnd(endNode, data.endOffset)
    if (range.collapsed || !range.toString().trim()) return null
    return range
  } catch {
    return null
  }
}

function countTextOccurrenceBeforeRange(root, text, targetRange) {
  if (!text || !root || !targetRange) return 0
  let count = 0
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node
  while ((node = walker.nextNode())) {
    const content = node.textContent || ''
    let idx = 0
    while ((idx = content.indexOf(text, idx)) !== -1) {
      const probe = document.createRange()
      probe.setStart(node, idx)
      probe.setEnd(node, idx + text.length)
      const pos = probe.compareBoundaryPoints(Range.START_TO_START, targetRange)
      if (pos === 0) return count
      if (pos > 0) return count
      count += 1
      idx += Math.max(1, text.length)
    }
  }
  return count
}

export function findTextRange(root, text, occurrence = 0) {
  if (!text || !root) return null
  let seen = 0
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node
  while ((node = walker.nextNode())) {
    const content = node.textContent || ''
    let idx = 0
    while ((idx = content.indexOf(text, idx)) !== -1) {
      if (seen === occurrence) {
        const range = document.createRange()
        range.setStart(node, idx)
        range.setEnd(node, idx + text.length)
        return range
      }
      seen += 1
      idx += Math.max(1, text.length)
    }
  }
  return null
}

export function resolveHighlightRange(container, highlight) {
  if (!container || !highlight) return null
  let range = deserializeRange(highlight, container)
  if (!range && highlight.text) {
    range = findTextRange(container, highlight.text, highlight.occurrence ?? 0)
  }
  return range
}

function unwrapMark(mark) {
  const parent = mark.parentNode
  if (!parent) return
  while (mark.firstChild) parent.insertBefore(mark.firstChild, mark)
  parent.removeChild(mark)
}

export function removeFallbackMarks(container) {
  if (!container) return
  container.querySelectorAll('mark[data-highlight-id]').forEach((mark) => unwrapMark(mark))
}

export function removeHighlightFromDom(container, highlightId) {
  if (!container || !highlightId) return
  container.querySelectorAll(`mark[data-highlight-id="${highlightId}"]`).forEach((mark) => {
    unwrapMark(mark)
  })
}

function wrapRangeWithMark(range, id, colorId) {
  const mark = document.createElement('mark')
  mark.dataset.highlightId = id
  mark.dataset.highlightColor = colorId
  mark.className = getHighlightColorClass(colorId)

  try {
    range.surroundContents(mark)
    return mark
  } catch {
    /* selection crosses element boundaries */
  }

  const extracted = range.extractContents()
  mark.appendChild(extracted)
  range.insertNode(mark)
  return mark
}

export function applyHighlightToRange(range, root, id, colorId) {
  if (!range || range.collapsed || !root?.contains(range.commonAncestorContainer)) return false
  if (range.toString().trim().length < 2) return false

  const anchor = range.commonAncestorContainer
  const insideMark =
    (anchor.nodeType === Node.ELEMENT_NODE
      ? anchor.closest('mark[data-highlight-id]')
      : anchor.parentElement?.closest('mark[data-highlight-id]')) != null
  if (insideMark) return false

  wrapRangeWithMark(range, id, colorId)
  return true
}

export function clearCssHighlights() {
  if (!supportsCssCustomHighlight()) return
  for (const color of HIGHLIGHT_COLORS) {
    CSS.highlights.delete(color.cssName)
  }
}

export function paintCssHighlights(container, highlights) {
  if (!supportsCssCustomHighlight() || !container) return false

  clearCssHighlights()

  const byColor = new Map()
  for (const highlight of highlights) {
    const range = resolveHighlightRange(container, highlight)
    if (!range) continue
    const colorId = highlight.color || 'yellow'
    const cssName = HIGHLIGHT_COLORS.find((c) => c.id === colorId)?.cssName || HIGHLIGHT_COLORS[0].cssName
    if (!byColor.has(cssName)) byColor.set(cssName, [])
    byColor.get(cssName).push(range)
  }

  for (const [cssName, ranges] of byColor) {
    if (ranges.length > 0) {
      CSS.highlights.set(cssName, new Highlight(...ranges))
    }
  }

  return true
}

export function paintFallbackMarks(container, highlights) {
  if (!container) return
  removeFallbackMarks(container)
  for (const highlight of highlights) {
    const range = resolveHighlightRange(container, highlight)
    if (!range) continue
    applyHighlightToRange(range, container, highlight.id, highlight.color || 'yellow')
  }
}

export function paintHighlights(container, highlights) {
  if (!container) return
  if (paintCssHighlights(container, highlights)) return
  paintFallbackMarks(container, highlights)
}

export function createHighlightRecord(range, root, colorId) {
  const serialized = serializeRange(range, root)
  if (!serialized?.text?.trim()) return null
  return {
    id: crypto.randomUUID(),
    color: colorId,
    ...serialized,
    createdAt: Date.now(),
  }
}

export function createHighlightId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `hl-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}
