import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Diagnostiek:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`lichamelijk onderzoek`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`letten op tekenen van compartimentsyndroom`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`controleren of de **pulsaties** intact zijn`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`echo om **DVT** uit te sluiten`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`echo kan ook een **hematoom** aantonen`}</Inline></p>
    </div>
  )
}
