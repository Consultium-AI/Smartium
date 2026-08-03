import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het P-QRS-T-complex`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het ECG wordt meestal beschreven met de letters P, QRS en T.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`De **P-top** staat voor de depolarisatie van de atria.`}</Inline></li>
        <li><Inline>{`Het **QRS-complex** staat voor de depolarisatie van de ventrikels.`}</Inline></li>
        <li><Inline>{`De **T-top** staat voor de repolarisatie van de ventrikels.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De repolarisatie van de atria bestaat ook, maar die is normaal zo klein dat je die niet goed terugziet op het ECG, omdat die samenvalt met het QRS-complex.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een handige manier om dit te onthouden is dat een hartcel zich eerst ontlaadt en daarna weer moet “opladen”. Dat opnieuw opladen heet repolarisatie.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom zie je de atriale repolarisatie meestal niet terug op het ECG?**
Omdat die klein is en samenvalt met het QRS-complex.`} />
    </div>
  )
}
