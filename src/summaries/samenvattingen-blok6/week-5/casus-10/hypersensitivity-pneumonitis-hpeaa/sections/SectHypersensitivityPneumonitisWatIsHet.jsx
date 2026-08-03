import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypersensitivity pneumonitis: wat is het?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hypersensitivity pneumonitis is een inflammatoir longbeeld dat de longparenchymen en de kleine luchtwegen aantast. Het ontstaat na herhaalde inademing van bepaalde stoffen, waarna bij gevoelige personen een afweerreactie op gang komt. Het gaat dus om een aandoening die wordt uitgelokt door inhalatie van antigenen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De stoffen die dit kunnen veroorzaken zijn heel verschillend. Het kunnen micro-organismen zijn, dierlijke eiwitten of laagmoleculaire chemische stoffen. De reactie in de longen is diffuus en granulomateus. Als de aandoening niet op tijd wordt herkend en behandeld, kan dit uiteindelijk leiden tot longfibrose.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is HP klinisch belangrijk?
**Kort antwoord:** omdat het vaak laat wordt ontdekt en dan kan overgaan in ernstige fibrose, soms zelfs met de noodzaak van longtransplantatie.`} />
    </div>
  )
}
