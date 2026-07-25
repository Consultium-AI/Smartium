import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risicofactoren voor hart- en vaatziekten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn beïnvloedbare en niet-beïnvloedbare risicofactoren. De belangrijkste zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leeftijd;`}</Inline></li>
        <li><Inline>{`geslacht;`}</Inline></li>
        <li><Inline>{`roken;`}</Inline></li>
        <li><Inline>{`diabetes mellitus;`}</Inline></li>
        <li><Inline>{`overgewicht en obesitas, vooral centrale adipositas;`}</Inline></li>
        <li><Inline>{`obstructief slaapapneusyndroom;`}</Inline></li>
        <li><Inline>{`positieve familie-anamnese;`}</Inline></li>
        <li><Inline>{`lage sociaal-economische status;`}</Inline></li>
        <li><Inline>{`dyslipidemie, vooral hoog LDL en laag HDL;`}</Inline></li>
        <li><Inline>{`hypertensie;`}</Inline></li>
        <li><Inline>{`doorgemaakte pre-eclampsie of HELLP;`}</Inline></li>
        <li><Inline>{`chronische nierinsufficiëntie;`}</Inline></li>
        <li><Inline>{`inflammatoire aandoeningen, zoals reumatoïde artritis.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom is leeftijd zo belangrijk?**
Omdat hart- en vaatziekten vooral op hogere leeftijd voorkomen; jonge mensen hebben er veel minder vaak last van.`} />
    </div>
  )
}
