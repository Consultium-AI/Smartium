import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Diagnostiek:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`anamnese en lichamelijk onderzoek`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`echo van het been en de liesregio om een **proximale DVT** uit te sluiten`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`verwijzing naar de **gynaecoloog**`}</Inline></p>
      <PBody text={`**CT-abdomen/bekken** om de anatomie en eventuele maligniteit in beeld te brengen`} />
      <p className="leading-relaxed"><Inline>{`bij aanwijzingen voor maligniteit: **biopt** voor histologische diagnose`}</Inline></p>
    </div>
  )
}
