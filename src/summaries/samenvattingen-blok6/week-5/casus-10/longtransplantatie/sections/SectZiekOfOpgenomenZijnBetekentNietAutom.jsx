import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ziek of opgenomen zijn betekent niet automatisch dat transplantatie niet meer kan`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als een patiënt op de wachtlijst ligt en ernstig achteruitgaat, kan transplantatie soms nog steeds mogelijk zijn. Ook opname op de verpleegafdeling of zelfs op de intensive care sluit transplantatie niet automatisch uit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Wel gelden dan strenge voorwaarden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de achteruitgang moet vooral door de longziekte komen,`}</Inline></li>
        <li><Inline>{`er mag geen actieve infectie zijn,`}</Inline></li>
        <li><Inline>{`de patiënt moet voldoende spierkracht en trainbaarheid hebben,`}</Inline></li>
        <li><Inline>{`de patiënt moet nog een redelijke algemene conditie hebben.`}</Inline></li>
      </ul>
      <PBody text={`Een belangrijk uitgangspunt is dus: **een wakkere en trainbare patiënt**. Ook beademing of zelfs ECMO kan soms als overbrugging worden gebruikt. ECMO neemt dan tijdelijk de longfunctie over.`} />
      <p className="leading-relaxed"><Inline>{`Maar dit is niet voor iedereen mogelijk. Het transplantatieteam beoordeelt per patiënt of de risico’s nog acceptabel zijn.`}</Inline></p>
    </div>
  )
}
