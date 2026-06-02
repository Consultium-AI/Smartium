import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus 1: vasculitis en follow-up`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De huisarts denkt aan een vasculitis en overlegt met de kinderarts. De vervolgstappen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bevestigen van de diagnose;`}</Inline></li>
        <li><Inline>{`beoordelen van nierbetrokkenheid;`}</Inline></li>
        <li><Inline>{`follow-up met urineonderzoek en controle van de nierfunctie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Omdat er erytrocyten in de urine zijn, is follow-up belangrijk. Het onderzoek dat daarbij hoort is vooral urinecontrole en controle van creatinine.`}</Inline></p>
    </div>
  )
}
