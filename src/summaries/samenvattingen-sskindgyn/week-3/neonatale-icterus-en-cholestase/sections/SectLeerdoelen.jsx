import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze e-module moet je bij een pasgeborene met icterus kunnen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`onderscheid maken tussen **ongeconjugeerde** en **geconjugeerde hyperbilirubinemie**;`}</Inline></li>
        <li><Inline>{`de belangrijkste oorzaken van **neonatale geelzucht** benoemen;`}</Inline></li>
        <li><Inline>{`begrijpen wanneer **hemolyse** waarschijnlijk is, bijvoorbeeld bij **AB0-antagonisme**;`}</Inline></li>
        <li><Inline>{`weten waarom de **enterohepatische kringloop** bij pasgeborenen vaak toeneemt;`}</Inline></li>
        <li><Inline>{`herkennen wanneer **fototherapie** of **wisseltransfusie** nodig kan zijn;`}</Inline></li>
        <li><Inline>{`een beeld van **conjugated jaundice** koppelen aan aandoeningen zoals **galactosemie**;`}</Inline></li>
        <li><Inline>{`de klinische betekenis van **positieve urine-reductie** begrijpen;`}</Inline></li>
        <li><Inline>{`weten waarom een pasgeborene met galactosemie ook risico heeft op **E. coli-sepsis**.`}</Inline></li>
      </ul>
    </div>
  )
}
