import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 4: wegen van het geweld of de mishandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In deze stap verifieer je je vermoeden door zo mogelijk te overleggen met andere hulpverleners die bij het gezin betrokken zijn. Dat mag, als het nodig is, ook zonder toestemming of medeweten van de betrokkenen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Door met betrokken professionals te overleggen, verklein je de kans op een onterechte melding. Overleggen met professionals die niet rechtstreeks bij het gezin betrokken zijn en met wie je geen verwijsrelatie hebt, wordt niet aanbevolen.`}</Inline></p>
    </div>
  )
}
