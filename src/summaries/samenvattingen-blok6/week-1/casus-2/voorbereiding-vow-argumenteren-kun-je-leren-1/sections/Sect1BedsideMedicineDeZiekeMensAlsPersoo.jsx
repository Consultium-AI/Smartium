import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`1. Bedside medicine: de zieke mens als persoon`}</Inline></SubHeading>
      <PBody text={`Tot het einde van de 18e eeuw overheerste de **bedside medicine**. In dit denkkader werd ziekte gezien als een verstoring van het evenwicht in de lichaamssappen, de humoren. Gezondheid betekende herstel van balans.`} />
      <PBody text={`De patiënt werd niet los gezien van zijn omgeving. Juist de psychologische, sociale en persoonlijke omstandigheden waren belangrijk. De arts probeerde daarom zoveel mogelijk te weten te komen over de hele persoon: zijn levensgeschiedenis, gedrag en leefomstandigheden. Dit wordt ook wel **biografische geneeskunde** genoemd.`} />
      <p className="leading-relaxed"><Inline>{`De ontmoeting tussen arts en patiënt was in deze periode relatief gelijkwaardig. De patiënt kon als goed geïnformeerde leek bijna op gelijke voet met de arts spreken. Het verhaal van de patiënt stond centraal, en lichamelijk onderzoek speelde nog nauwelijks een rol.`}</Inline></p>
      <PBody text={`**Kern van bedside medicine**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ziekte als **holistische** verstoring van de hele persoon;`}</Inline></li>
        <li><Inline>{`diagnose vooral via de **anamnese** en het verhaal van de patiënt;`}</Inline></li>
        <li><Inline>{`aandacht voor de wisselwerking tussen individu en omgeving;`}</Inline></li>
        <li><Inline>{`herkenbaar in de **huisartsgeneeskunde** en andere generalistische disciplines.`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** Wat is hier het belangrijkste uitgangspunt?
**Mini-antwoord:** De hele persoon telt mee, niet alleen een orgaan of meetwaarde.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
