import { useCallback, useEffect, useRef, useState } from 'react'
import {
  addSummaryHighlight,
  loadSummaryHighlights,
  removeSummaryHighlight,
} from '../utils/summaryHighlightsStorage'
import {
  clearCssHighlights,
  createHighlightRecord,
  paintHighlights,
  removeFallbackMarks,
} from '../utils/summaryHighlightDom'

export function useSummaryHighlights({ containerRef, lmeId, userId }) {
  const [highlights, setHighlights] = useState([])
  const [hydrated, setHydrated] = useState(false)
  const highlightsRef = useRef([])
  const paintTimerRef = useRef(null)
  const isPaintingRef = useRef(false)

  useEffect(() => {
    highlightsRef.current = highlights
  }, [highlights])

  const paintNow = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    isPaintingRef.current = true
    paintHighlights(container, highlightsRef.current)
    requestAnimationFrame(() => {
      isPaintingRef.current = false
    })
  }, [containerRef])

  const schedulePaint = useCallback(() => {
    if (paintTimerRef.current) cancelAnimationFrame(paintTimerRef.current)
    paintTimerRef.current = requestAnimationFrame(() => {
      paintTimerRef.current = null
      paintNow()
    })
  }, [paintNow])

  const reloadHighlights = useCallback(() => {
    if (userId == null || !lmeId) {
      setHighlights([])
      setHydrated(true)
      return
    }
    setHighlights(loadSummaryHighlights(userId, lmeId))
    setHydrated(true)
  }, [userId, lmeId])

  useEffect(() => {
    setHydrated(false)
    reloadHighlights()
  }, [reloadHighlights])

  useEffect(() => {
    const onCloudSynced = (event) => {
      if (!userId || userId === 'guest') return
      const syncedUid = event?.detail?.uid
      if (!syncedUid || syncedUid === userId) reloadHighlights()
    }
    window.addEventListener('smartium-cloud-synced', onCloudSynced)
    return () => window.removeEventListener('smartium-cloud-synced', onCloudSynced)
  }, [userId, reloadHighlights])

  // Paint once when data is ready, then watch for React DOM updates (without stripping marks each time).
  useEffect(() => {
    const container = containerRef.current
    if (!container || !hydrated) return

    schedulePaint()

    const observer = new MutationObserver(() => {
      if (isPaintingRef.current) return
      schedulePaint()
    })

    observer.observe(container, { childList: true, subtree: true, characterData: true })

    return () => {
      observer.disconnect()
      if (paintTimerRef.current) cancelAnimationFrame(paintTimerRef.current)
      clearCssHighlights()
      removeFallbackMarks(container)
    }
  }, [containerRef, hydrated, lmeId, schedulePaint])

  // Re-paint when highlight list changes (add/remove/reload) — CSS API path does not flicker.
  useEffect(() => {
    if (!hydrated) return
    schedulePaint()
  }, [highlights, hydrated, schedulePaint])

  const addHighlight = useCallback(
    (range, colorId) => {
      const container = containerRef.current
      if (!container || userId == null || !lmeId || !range) return false

      const record = createHighlightRecord(range, container, colorId)
      if (!record) return false

      addSummaryHighlight(userId, lmeId, record)
      setHighlights((prev) => [...prev, record])
      return true
    },
    [containerRef, userId, lmeId]
  )

  const removeHighlight = useCallback(
    (highlightId) => {
      if (userId == null || !lmeId || !highlightId) return

      removeSummaryHighlight(userId, lmeId, highlightId)
      setHighlights((prev) => prev.filter((h) => h.id !== highlightId))
      schedulePaint()
    },
    [userId, lmeId, schedulePaint]
  )

  return { highlights, addHighlight, removeHighlight }
}
