import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Effecten van het Mediterrane dieet`}</Inline></h3>
      <p><Inline>{`Striktere naleving van het Mediterrane dieet kan het risico op diabetes type 2 flink verminderen. In de stof worden reducties genoemd van ongeveer 23% tot 52%. Daarnaast kan het dieet:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de glykemische controle verbeteren;`}</Inline></li>
        <li><Inline>{`de lichaamssamenstelling verbeteren;`}</Inline></li>
        <li><Inline>{`cardiovasculaire risicofactoren verlagen;`}</Inline></li>
        <li><Inline>{`bij sommige mensen bijdragen aan remissie van diabetes.`}</Inline></li>
      </ul>
      <p><Inline>{`In de PREDIMED-studie werden mensen met hoog cardiovasculair risico verdeeld over drie groepen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`controledieet;`}</Inline></li>
        <li><Inline>{`Mediterraan dieet met extra olijfolie;`}</Inline></li>
        <li><Inline>{`Mediterraan dieet met extra noten.`}</Inline></li>
      </ul>
      <p><Inline>{`Voor cardiovasculaire uitkomsten bleken zowel olijfolie als noten gunstig. Voor diabetespreventie was vooral de olijfoliegroep duidelijk significant gunstig. Ook bij mensen met al type 2 diabetes kan een Mediterrane voeding helpen, maar op langere termijn kunnen mensen toch weer diabetes ontwikkelen door minder goede naleving en door de natuurlijke achteruitgang van de alvleesklier in de loop van de jaren.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom komt diabetes soms later toch terug, ondanks een goed dieet?  
**Mini-antwoord:** Omdat mensen het dieet minder goed volhouden en omdat de alvleesklier in de loop van de jaren verder achteruit kan gaan.`} />
    </div>
  )
}
