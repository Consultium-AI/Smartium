import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hemodynamiek: druk, flow en weerstand`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hemodynamiek gaat over hoe bloed door het lichaam stroomt. Je kunt het vergelijken met water dat door buizen stroomt: het hart is de pomp, de bloedvaten zijn de leidingen, en de stroming wordt bepaald door drukverschillen en weerstand.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De basisrelatie is:`}</Inline></p>
      <PBody text={`**Flow = drukverschil / weerstand**
of: **ΔP = F · R**`} />
      <p className="leading-relaxed"><Inline>{`Hierbij is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**ΔP** het drukverschil dat de stroom aandrijft`}</Inline></li>
        <li><Inline>{`**F** de flow, dus de hoeveelheid bloed die per tijdseenheid stroomt`}</Inline></li>
        <li><Inline>{`**R** de weerstand die de bloedstroom tegenwerkt`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een belangrijk punt is dat bloed altijd stroomt van een plek met hogere druk naar een plek met lagere druk. Zonder drukverschil is er geen flow.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:**
Waarom is het drukverschil belangrijker dan de absolute druk op één plek?
**Mini-antwoord:** Omdat het drukverschil bepaalt welke kant het bloed op stroomt.`} />
      <PBody text={`De totale flow die het hart per minuut uitpompt heet de **cardiac output (CO)** of het **hartminuutvolume**. Die wordt bepaald door:`} />
      <PBody text={`**CO = hartfrequentie × slagvolume**`} />
      <p className="leading-relaxed"><Inline>{`Dus:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`meer slagen per minuut geeft een hogere CO`}</Inline></li>
        <li><Inline>{`een groter slagvolume geeft ook een hogere CO`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 1. Kernbegrippen hemodynamiek`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["Druk", "De kracht die het bloed op de vaatwand uitoefent"], ["Flow", "De hoeveelheid bloed per tijdseenheid"], ["Weerstand", "De tegenwerking van de bloedvaten"], ["Cardiac output", "De totale hoeveelheid bloed die het hart per minuut rondpompt"]]} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
