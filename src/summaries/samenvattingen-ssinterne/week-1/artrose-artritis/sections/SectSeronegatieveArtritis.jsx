import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Seronegatieve artritis`}</Inline></SubHeading>
      <PBody text={`**Seronegatieve artritis** is sterk geassocieerd met **HLA-B27**. Hieronder vallen onder andere:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**artritis psoriatica**`}</Inline></li>
        <li><Inline>{`**ankyloserende spondylitis** (morbus Bechterew)`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij deze aandoeningen zie je vaak:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ontsteking bij de **benige insertie** van pezen en ligamenten`}</Inline></li>
        <li><Inline>{`betrokkenheid van het **axiale skelet**, dus vooral de wervelkolom`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Enthesitis en enthesopathie`}</Inline></SubHeading>
      <PBody text={`De plaats waar een pees of ligament aan het bot vastzit heet de **enthesis**. Ontsteking daar heet **enthesitis**. De radiologische uiting daarvan heet vaak **enthesopathie**.`} />
    </div>
  )
}
