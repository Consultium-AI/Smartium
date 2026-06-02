# -*- coding: utf-8 -*-
"""Generate section JSX files from a structure JSON (auto-split on headings)."""
import json
import os
import re
import sys

SHARED = r'''import { Fragment } from 'react'

export function Inline({ children }) {
  const s = String(children)
  const out = []
  let rest = s
  let k = 0
  while (rest) {
    const a = rest.indexOf('**')
    if (a === -1) {
      out.push(rest)
      break
    }
    if (a > 0) out.push(rest.slice(0, a))
    const b = rest.indexOf('**', a + 2)
    if (b === -1) {
      out.push(rest.slice(a))
      break
    }
    out.push(<strong key={k++}>{rest.slice(a + 2, b)}</strong>)
    rest = rest.slice(b + 2)
  }
  return (
    <>
      {out.map((n, i) => (
        <Fragment key={i}>{typeof n === 'string' ? n : n}</Fragment>
      ))}
    </>
  )
}

export function PBody({ text }) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <p key={i}>
          <Inline>{line}</Inline>
        </p>
      ))}
    </>
  )
}

export function DataTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600 my-4">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
          <tr>
            {rows[0].map((h, hi) => (
              <th key={hi} className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                <Inline>{h}</Inline>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-900/40">
          {rows.slice(1).map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} className="border border-slate-200 dark:border-slate-600 px-3 py-2 align-top">
                  <Inline>{cell}</Inline>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

'''


def slugify(title):
    s = title.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')[:48] or 'sectie'


def is_heading(text):
    t = text.strip()
    if t in ('Leerdoelen', 'Samenvatting'):
        return True
    if re.match(r'^Tabel\s+\d+\.', t, re.I):
        return True
    if len(t) <= 90 and not re.search(r'[.!?]$', t) and t[0].isupper():
        return True
    return False


def is_list_item(text):
    t = text.strip()
    return bool(re.match(r'^[-•]\s', t)) or (
        len(t) < 120 and t.endswith(';') and '**' not in t[:20]
    )


def tpl(s):
    esc = s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    return '{`' + esc + '`}'


def emit_blocks(blocks, spec, fp):
    fp.write("import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'\n\n")
    fp.write('export default function Section() {\n')
    fp.write('  return (\n')
    fp.write('    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">\n')
    ul = False
    for item in spec:
        if item[0] == 'h2':
            if ul:
                fp.write('      </ul>\n')
                ul = False
            _, idx = item
            t = blocks[idx]['text']
            fp.write(f'      <SubHeading level={{2}}><Inline>{tpl(t)}</Inline></SubHeading>\n')
        elif item[0] == 'h3':
            if ul:
                fp.write('      </ul>\n')
                ul = False
            _, idx = item
            t = blocks[idx]['text']
            if t.strip() == 'Vraagje':
                continue
            fp.write(f'      <SubHeading><Inline>{tpl(t)}</Inline></SubHeading>\n')
        elif item[0] == 'p':
            if ul:
                fp.write('      </ul>\n')
                ul = False
            _, idx = item
            t = blocks[idx]['text']
            if '\n' in t or t.strip().startswith('**Kortom:**') or (
                t.strip().startswith('**') and '**' in t[2:]
            ):
                fp.write(f'      <PBody text={tpl(t)} />\n')
            else:
                fp.write(f'      <p className="leading-relaxed"><Inline>{tpl(t)}</Inline></p>\n')
        elif item[0] == 'li':
            _, idx = item
            t = blocks[idx]['text']
            if not ul:
                fp.write('      <ul className="list-disc pl-6 space-y-2">\n')
                ul = True
            fp.write(f'        <li><Inline>{tpl(t)}</Inline></li>\n')
        elif item[0] == 'table':
            if ul:
                fp.write('      </ul>\n')
                ul = False
            _, idx = item
            fp.write('      <DataTable rows={' + json.dumps(blocks[idx]['rows'], ensure_ascii=False) + '} />\n')
    if ul:
        fp.write('      </ul>\n')
    fp.write('    </div>\n')
    fp.write('  )\n')
    fp.write('}\n')


def auto_sections(blocks):
    sections = []
    current_title = None
    current_spec = []
    current_indices = []

    def flush():
        nonlocal current_title, current_spec, current_indices
        if not current_spec:
            return
        name = 'Sect' + slugify(current_title or 'inhoud').title().replace('-', '')
        if name[4:5].islower():
            name = 'Sect' + name[4:].capitalize()
        sections.append((name[:40], list(current_spec)))
        current_spec = []
        current_indices = []

    for idx, block in enumerate(blocks):
        if block['type'] == 'p':
            text = block['text']
            if is_heading(text):
                flush()
                current_title = text
                tag = 'h2' if text in ('Leerdoelen', 'Samenvatting') else 'h3'
                current_spec.append((tag, idx))
                continue
            if is_list_item(text):
                current_spec.append(('li', idx))
            else:
                current_spec.append(('p', idx))
        elif block['type'] == 'table':
            current_spec.append(('table', idx))

    flush()
    if not sections:
        sections.append(('SectInhoud', [('p', i) for i in range(len(blocks)) if blocks[i]['type'] == 'p']))
    return sections


def main():
    if len(sys.argv) < 3:
        raise SystemExit('Usage: python gen_structure_sections.py <structure.json> <out/sections/>')
    json_path = sys.argv[1]
    out_dir = sys.argv[2]
    with open(json_path, 'r', encoding='utf-8') as f:
        blocks = json.load(f)
    sections = auto_sections(blocks)
    os.makedirs(out_dir, exist_ok=True)
    shared_path = os.path.join(out_dir, 'SectionShared.jsx')
    if not os.path.isfile(shared_path):
        with open(shared_path, 'w', encoding='utf-8') as fp:
            fp.write(SHARED)
    used = set()
    manifest = []
    for i, (name, spec) in enumerate(sections):
        base = name
        n = 2
        while name in used:
            name = f'{base}{n}'
            n += 1
        used.add(name)
        path = os.path.join(out_dir, f'{name}.jsx')
        with open(path, 'w', encoding='utf-8') as fp:
            emit_blocks(blocks, spec, fp)
        title = ''
        for kind, idx in spec:
            if kind in ('h2', 'h3'):
                title = blocks[idx]['text']
                break
        manifest.append({'file': name, 'title': title or f'Sectie {i + 1}', 'id': f'sect-{i + 1:02d}'})
    meta_path = os.path.join(os.path.dirname(out_dir), 'sections-manifest.json')
    with open(meta_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    print(f'Wrote {len(sections)} sections to {out_dir}')


if __name__ == '__main__':
    main()
