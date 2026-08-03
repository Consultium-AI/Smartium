import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom is klinisch redeneren nodig?`}</Inline></SubHeading>
      <PBody text={`Niet elke patiënt met dyspnoe of oedeem heeft hartfalen. En niet elke patiënt met hartfalen heeft typische klachten. Daarom moet je altijd nadenken: **hoe waarschijnlijk is hartfalen hier?**`} />
      <PBody text={`Hartfalen herken je meestal aan een **patroon** van klachten, lichamelijke bevindingen en voorgeschiedenis. Hoe meer signalen samen passen, hoe waarschijnlijker de diagnose wordt.`} />
    </div>
  )
}
