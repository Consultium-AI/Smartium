import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Forward failure`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij forward failure is de cardiac output te laag om organen goed te perfunderen. Hersenen, nieren, spieren en huid krijgen dan te weinig bloed en zuurstof. Dat geeft sufheid, duizeligheid, verminderde urineproductie, koude handen en voeten en soms cyanose. Bij ernstige forward failure kan cardiogene shock ontstaan, met hypotensie, orgaanfalen en lactaatstijging.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Welke klachten passen vooral bij forward failure?
**Mini-antwoord:** Koude extremiteiten, sufheid en weinig urineproductie.`} />
    </div>
  )
}
