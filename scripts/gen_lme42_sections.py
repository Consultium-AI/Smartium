# -*- coding: utf-8 -*-
"""Generate LME42 section JSX from .cursor/lme42_structure.json."""
import json
import os

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), '..'))
JSON_PATH = os.path.join(ROOT, '.cursor', 'lme42_structure.json')
OUT_DIR = os.path.join(
    ROOT,
    'src',
    'summaries',
    'samenvattingen-b10',
    'week-5',
    'casus-c10-dm-type2',
    'lme-langetermijn-complicaties-diabetes',
    'sections',
)

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


def tpl(s):
    esc = s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    return '{`' + esc + '`}'


def emit_blocks(blocks, spec, fp):
    fp.write("import { Inline, PBody, DataTable } from './SectionShared'\n\n")
    fp.write('export default function Section() {\n')
    fp.write('  return (\n')
    fp.write('    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">\n')
    ul = False
    for item in spec:
        if item[0] == 'h2':
            if ul:
                fp.write('      </ul>\n')
                ul = False
            _, idx = item
            t = blocks[idx]['text']
            fp.write(f'      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100"><Inline>{tpl(t)}</Inline></h2>\n')
        elif item[0] == 'h3':
            if ul:
                fp.write('      </ul>\n')
                ul = False
            _, idx = item
            t = blocks[idx]['text']
            fp.write(f'      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{tpl(t)}</Inline></h3>\n')
        elif item[0] == 'p':
            if ul:
                fp.write('      </ul>\n')
                ul = False
            _, idx = item
            t = blocks[idx]['text']
            if '\n' in t:
                fp.write(f'      <PBody text={tpl(t)} />\n')
            else:
                fp.write(f'      <p><Inline>{tpl(t)}</Inline></p>\n')
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


def main():
    sections = [
        ('Section01BrondocumentTitel', [('h2', 0)]),
        (
            'Section02Leerdoelen',
            [('h3', 1), ('p', 2), ('li', 3), ('li', 4)],
        ),
        ('Section03Inleiding', [('h3', 5), ('p', 6), ('p', 7)]),
        (
            'Section04EpidemiologieEnZorgkosten',
            [('h3', 8), ('p', 9), ('p', 10), ('table', 11)],
        ),
        (
            'Section05IndelingLangetermijncomplicaties',
            [('h3', 12), ('p', 13), ('p', 14), ('table', 15), ('p', 16)],
        ),
        (
            'Section06Pathofysiologie',
            [('h3', 17), ('p', 18), ('p', 19), ('p', 20)],
        ),
        (
            'Section07MicrovasculaireComplicaties',
            [
                ('h3', 21),
                ('h3', 22),
                ('p', 23),
                ('p', 24),
                ('p', 25),
                ('h3', 26),
                ('p', 27),
                ('p', 28),
                ('p', 29),
                ('h3', 30),
                ('p', 31),
                ('p', 32),
                ('p', 33),
                ('p', 34),
                ('p', 35),
            ],
        ),
        (
            'Section08MacrovasculaireComplicaties',
            [('h3', 36), ('p', 37), ('p', 38), ('p', 39), ('p', 40)],
        ),
        (
            'Section09DiabetischeVoet',
            [('h3', 41), ('p', 42), ('p', 43)],
        ),
        (
            'Section10RisicofactorenPerComplicatie',
            [('h3', 44), ('p', 45), ('table', 46)],
        ),
        (
            'Section11HbA1c',
            [('h3', 47), ('p', 48), ('p', 49)],
        ),
        (
            'Section12Preventie',
            [('h3', 50), ('p', 51), ('p', 52), ('h3', 53), ('p', 54), ('p', 55), ('p', 56), ('table', 57)],
        ),
        (
            'Section13Monitoring',
            [('h3', 58), ('p', 59), ('p', 60), ('p', 61), ('p', 62), ('p', 63), ('table', 64)],
        ),
        (
            'Section14KlinischeRelevantie',
            [('h3', 65), ('p', 66)],
        ),
        (
            'Section15Samenvatting',
            [('h3', 67), ('p', 68)],
        ),
    ]

    with open(JSON_PATH, 'r', encoding='utf-8') as f:
        blocks = json.load(f)
    if len(blocks) != 69:
        raise SystemExit(f'expected 69 blocks, got {len(blocks)}')
    os.makedirs(OUT_DIR, exist_ok=True)
    shared_path = os.path.join(OUT_DIR, 'SectionShared.jsx')
    with open(shared_path, 'w', encoding='utf-8') as fp:
        fp.write(SHARED)
    for name, spec in sections:
        path = os.path.join(OUT_DIR, f'{name}.jsx')
        with open(path, 'w', encoding='utf-8') as fp:
            emit_blocks(blocks, spec, fp)


if __name__ == '__main__':
    main()
