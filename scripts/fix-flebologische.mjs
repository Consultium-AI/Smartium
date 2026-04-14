#!/usr/bin/env node
// One-off: regenerate the blok5 flebologische aandoeningen mini summary
// using heading-based section splitting (the docx has <h2> headings + tables).

import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DOCX = path.join(ROOT, 'LME Flebologische aandoeningen samenvatting.docx');
const OUT = path.join(ROOT, 'src', 'summaries', 'mini-samenvattingen-blok5', 'week-4', 'casus-7', 'flebologische-aandoeningen-mini.jsx');

const MID_ICONS = [
  'Layers', 'Stethoscope', 'Activity', 'ShieldAlert', 'ClipboardList',
  'GitBranch', 'Microscope', 'FlaskConical', 'Pill', 'Heart',
];

function pickIcon(i, total) {
  if (i === 0) return 'BookOpen';
  if (i === total - 1) return 'CheckCircle2';
  return MID_ICONS[(i - 1) % MID_ICONS.length];
}

function escapeHtml(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

async function main() {
  const result = await mammoth.convertToHtml({ path: DOCX });
  let html = result.value;

  // Remove <h1> title if present
  html = html.replace(/<h1>[\s\S]*?<\/h1>/, '').trim();

  // Split by <h2> headings — each heading starts a new section
  const parts = html.split(/(?=<h2>)/).filter(p => p.trim());

  const sections = parts.map((part, i) => {
    const hMatch = part.match(/<h2>[\s\S]*?<\/h2>/);
    let title = '';
    if (hMatch) {
      title = hMatch[0].replace(/<[^>]+>/g, '').trim();
    } else {
      const clean = part.replace(/<[^>]+>/g, '').trim();
      const dot = clean.indexOf('. ');
      title = dot > 0 && dot < 90 ? clean.slice(0, dot + 1) : clean.slice(0, 80);
      if (title.length >= 80) title = title.replace(/\s+\S*$/, '') + '\u2026';
    }
    return {
      id: `mini-sect-${String(i + 1).padStart(2, '0')}`,
      title,
      icon: pickIcon(i, parts.length),
      html: part,
    };
  });

  // Description from first section plain text
  let description = sections[0].html.replace(/<[^>]+>/g, '').trim();
  if (description.length > 350) description = description.slice(0, 347) + '\u2026';

  const jsxContent = `// Auto-generated from: LME 31 \u2013 Flebologische aandoeningen (Veneuze insuffici\u00ebntie lymfoedeem lipoedeem Vaatmalformaties).docx
// Regenerate: node scripts/fix-flebologische.mjs

const sections = [
${sections.map(s => `  {
    id: ${JSON.stringify(s.id)},
    title: ${JSON.stringify(s.title)},
    icon: ${JSON.stringify(s.icon)},
    html: \`${escapeHtml(s.html)}\`,
  }`).join(',\n')}
]

const config = {
  baseLmeId: "blok5-week4-casus7-flebologische-aandoeningen",
  title: "Flebologische aandoeningen (Veneuze insuffici\u00ebntie lymfoedeem lipoedeem Vaatmalformaties)",
  description: ${JSON.stringify(description)},
  caseLabel: "Week 4 \u00b7 Casus 7: Zwelling van de lies en/of een dik been",
  practiceLink: "/oefenvragen?lme=blok5-week4-casus7-flebologische-aandoeningen",
  sections,
}

export default config
`;

  fs.writeFileSync(OUT, jsxContent, 'utf8');
  console.log(`Written ${sections.length} sections to ${path.relative(ROOT, OUT)}`);
  sections.forEach((s, i) => console.log(`  ${i + 1}. ${s.title} (${s.html.length} chars)`));
}

main().catch(err => { console.error(err); process.exit(1); });
