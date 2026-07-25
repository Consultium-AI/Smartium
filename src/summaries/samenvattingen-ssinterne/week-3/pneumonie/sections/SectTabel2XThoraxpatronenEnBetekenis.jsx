import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 2. X-thoraxpatronen en betekenis`}</Inline></SubHeading>
      <DataTable rows={[["Beeld op X-thorax", "Betekenis"], ["Lobair infiltraat", "Ontsteking van een longkwab of groot deel daarvan"], ["Alveolair-interstitieel beeld", "Diffuse afwijkingen, vaak bij virale of atypische pneumonie"], ["Geen afwijkingen", "Pneumonie minder waarschijnlijk, maar niet uitgesloten"]]} />
      <PBody text={`**Aandachtsvraag:** welk X-thoraxbeeld past het vaakst bij virale pneumonie?
**Mini-antwoord:** een alveolair-interstitieel beeld.`} />
    </div>
  )
}
