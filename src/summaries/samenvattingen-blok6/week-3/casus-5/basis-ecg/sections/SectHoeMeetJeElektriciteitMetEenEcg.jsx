import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe meet je elektriciteit met een ECG?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Elektrische meting gebeurt altijd tussen twee punten: een kathode en een anode. Een positieve depolarisatiegolf die naar een positieve elektrode toe beweegt, geeft een positieve uitslag op het ECG.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De totale elektrische activiteit van het hart kun je samenvatten in een vector: een pijl met richting en grootte. Het ECG registreert die vector in de tijd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
