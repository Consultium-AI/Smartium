import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Definitieve uitslagen en einddiagnose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Later komen de uitslagen binnen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`urine-antigenen voor legionella en pneumokokken zijn negatief;`}</Inline></li>
        <li><Inline>{`virale diagnostiek van het keelwat is positief voor influenza A;`}</Inline></li>
        <li><Inline>{`bloedkweek en sputumkweek groeien **S. aureus**.`}</Inline></li>
      </ul>
      <PBody text={`Daarmee wordt de diagnose: **influenza A pneumonie met een S. aureus superinfectie**, dus een combinatie van pneumonie en sepsis.`} />
      <PBody text={`De eerste keus behandeling voor een **S. aureus**-infectie is **flucloxacilline**. Omdat de patiënt ernstig ziek is en bacteriëmie heeft, geef je dit **intraveneus**.`} />
      <PBody text={`**Aandachtsvraag:** waarom is flucloxacilline hier de eerste keus?
**Mini-antwoord:** omdat de verwekker S. aureus is en de infectie ernstig is, waardoor i.v.-behandeling nodig is.`} />
    </div>
  )
}
