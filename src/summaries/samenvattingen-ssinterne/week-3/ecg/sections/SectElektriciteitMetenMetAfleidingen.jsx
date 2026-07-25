import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Elektriciteit meten met afleidingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een ECG meet altijd tussen twee punten: een positieve elektrode en een negatieve elektrode. Een depolarisatiegolf die naar een positieve elektrode toe beweegt, geeft een positieve uitslag op het ECG.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De totale elektrische activiteit van het hart op een bepaald moment kun je samenvatten in een vector. Het ECG is de registratie van die vector in de tijd.`}</Inline></p>
    </div>
  )
}
