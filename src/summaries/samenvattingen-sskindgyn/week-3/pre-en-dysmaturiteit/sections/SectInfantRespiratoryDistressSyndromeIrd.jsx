import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Infant Respiratory Distress Syndrome (IRDS)`}</Inline></SubHeading>
      <PBody text={`Bij prematuren is de long vaak het eerste orgaan waarin onrijpheid duidelijk wordt. Een belangrijk gevolg is **surfactanttekort**. Surfactant verlaagt normaal de oppervlaktespanning in de alveoli. Als er te weinig surfactant is, wordt de oppervlaktespanning te hoog en klappen de alveoli dicht. Daardoor ontstaat **IRDS**.`} />
      <p className="leading-relaxed"><Inline>{`Typische klachten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`tachypnoe`}</Inline></li>
        <li><Inline>{`intrekkingen van de borstkas`}</Inline></li>
        <li><Inline>{`neusvleugelen`}</Inline></li>
        <li><Inline>{`zuurstofbehoefte`}</Inline></li>
        <li><Inline>{`hypercapnie`}</Inline></li>
        <li><Inline>{`soms pneumothorax`}</Inline></li>
      </ul>
      <PBody text={`De behandeling bestaat uit ondersteuning van de ademhaling, bijvoorbeeld met **CPAP**. CPAP houdt de alveoli open en vermindert zo de collaps. Soms is ook **endotracheale surfactant** nodig.`} />
    </div>
  )
}
