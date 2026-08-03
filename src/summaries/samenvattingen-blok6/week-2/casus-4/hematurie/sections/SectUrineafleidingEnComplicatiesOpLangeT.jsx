import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Urineafleiding en complicaties op lange termijn`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na een radicale cystectomie kan een urineafleiding worden aangelegd met een stukje terminale ileum. De urineleiders worden daarop aangesloten. Dat stukje darm kan worden gebruikt als urinestoma of als basis voor een neoblaas.`}</Inline></p>
      <PBody text={`Op de lange termijn kunnen complicaties optreden. Ongeveer 45% van de patiënten met een urinestoma krijgt complicaties. Een bekende complicatie is vernauwing van de aansluiting van de ureteren door littekenvorming. Ook kan het gebruikte stukje dunne darm stoffen uit de urine opnemen in het bloed, wat kan leiden tot een **hyperchloremische acidose**: hoog chloride en een lage pH. Deze acidose kan worden behandeld met natriumbicarbonaat. Omdat in het terminale ileum vitamine B12 wordt opgenomen, kan ook een vitamine B12-deficiëntie ontstaan. Verder kan een parastomale hernia optreden.`} />
    </div>
  )
}
