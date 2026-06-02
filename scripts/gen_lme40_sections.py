# -*- coding: utf-8 -*-
"""Generate LME40 section JSX from .cursor/lme40_structure.json."""
import json
import os

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), '..'))
JSON_PATH = os.path.join(ROOT, '.cursor', 'lme40_structure.json')
OUT_DIR = os.path.join(
    ROOT,
    'src',
    'summaries',
    'samenvattingen-b10',
    'week-5',
    'casus-c09-obesitas',
    'lme-lichaamsbeweging',
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
    """JSX expression as template literal (safe for newlines, quotes)."""
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
        ('Section02Leerdoelen', [('h3', 1), ('p', 2), ('li', 3), ('li', 4)]),
        ('Section03ObesitasAlsChronischeZiekte', [('h3', 5), ('p', 6), ('p', 7)]),
        ('Section04OorzakenEnTabel1', [('h3', 8), ('p', 9), ('h3', 10), ('table', 11)]),
        (
            'Section05BariatrischeVormenEnTabel2',
            [('h3', 12), ('p', 13), ('h3', 14), ('table', 15), ('p', 16)],
        ),
        (
            'Section06GewichtsverliesEnTabel3',
            [
                ('h3', 17),
                ('p', 18),
                ('li', 19),
                ('li', 20),
                ('li', 21),
                ('p', 22),
                ('h3', 23),
                ('table', 24),
            ],
        ),
        (
            'Section07WatLevertBariatrieNogMeer',
            [
                ('h3', 25),
                ('p', 26),
                ('li', 27),
                ('li', 28),
                ('li', 29),
                ('li', 30),
                ('li', 31),
                ('li', 32),
                ('li', 33),
                ('li', 34),
                ('p', 35),
            ],
        ),
        (
            'Section08NietAlleenDoorAfvallen',
            [
                ('h3', 36),
                ('p', 37),
                ('li', 38),
                ('li', 39),
                ('li', 40),
                ('li', 41),
                ('li', 42),
                ('li', 43),
                ('li', 44),
                ('li', 45),
                ('li', 46),
                ('li', 47),
                ('p', 48),
            ],
        ),
        (
            'Section09LeefregelsVoedingBewegingZwangerschap',
            [
                ('h3', 49),
                ('p', 50),
                ('h3', 51),
                ('p', 52),
                ('li', 53),
                ('li', 54),
                ('li', 55),
                ('li', 56),
                ('li', 57),
                ('li', 58),
                ('li', 59),
                ('li', 60),
                ('li', 61),
                ('h3', 62),
                ('p', 63),
                ('h3', 64),
                ('p', 65),
            ],
        ),
        (
            'Section10RisicosComplicatiesEnTabel4',
            [
                ('h3', 66),
                ('p', 67),
                ('h3', 68),
                ('p', 69),
                ('li', 70),
                ('li', 71),
                ('li', 72),
                ('p', 73),
                ('h3', 74),
                ('h3', 75),
                ('table', 76),
                ('p', 77),
            ],
        ),
        (
            'Section11DumpingEnVoedingsadvies',
            [
                ('h3', 78),
                ('p', 79),
                ('li', 80),
                ('li', 81),
                ('p', 82),
                ('li', 83),
                ('li', 84),
                ('li', 85),
                ('li', 86),
                ('li', 87),
                ('li', 88),
                ('li', 89),
                ('li', 90),
                ('li', 91),
                ('p', 92),
            ],
        ),
        (
            'Section12NutrientenEnTabel5',
            [
                ('h3', 93),
                ('p', 94),
                ('p', 95),
                ('li', 96),
                ('li', 97),
                ('li', 98),
                ('li', 99),
                ('h3', 100),
                ('table', 101),
                ('p', 102),
            ],
        ),
        (
            'Section13Indicaties',
            [
                ('h3', 103),
                ('p', 104),
                ('p', 105),
                ('li', 106),
                ('li', 107),
                ('li', 108),
                ('p', 109),
            ],
        ),
        (
            'Section14ContraIndicaties',
            [
                ('h3', 110),
                ('p', 111),
                ('li', 112),
                ('p', 113),
                ('li', 114),
                ('li', 115),
                ('li', 116),
                ('li', 117),
                ('li', 118),
                ('li', 119),
                ('li', 120),
            ],
        ),
        ('Section15Samenvatting', [('h3', 121), ('p', 122)]),
    ]

    with open(JSON_PATH, 'r', encoding='utf-8') as f:
        blocks = json.load(f)
    if len(blocks) != 123:
        raise SystemExit(f'expected 123 blocks, got {len(blocks)}')
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
