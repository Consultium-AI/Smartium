import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Eliminatie`}</Inline></SubHeading>
      <PBody text={`Eliminatie, ook wel **excretie** of **klaring** genoemd, is het wegwerken van het farmacon uit het lichaam. Dit gebeurt vooral via de **nieren** in de urine. Een andere route is via de **gal**, waarna uitscheiding met de feces volgt. Eliminatie begint al zodra een farmacon is opgenomen.`} />
      <SubHeading><Inline>{`Halfwaardetijd`}</Inline></SubHeading>
      <PBody text={`De eliminatie verloopt meestal volgens **1e orde kinetiek**. Dat betekent dat per tijdseenheid een vast percentage van het farmacon wordt geklaard. Om de snelheid daarvan aan te geven, gebruik je de **halfwaardetijd** (**T1/2**): de tijd die het lichaam nodig heeft om de helft van het farmacon te elimineren.`} />
      <p className="leading-relaxed"><Inline>{`Als een middel een halfwaardetijd van 20 minuten heeft, dan is na 40 minuten nog 25% over: het is dan twee keer gehalveerd.`}</Inline></p>
      <SubHeading><Inline>{`Cmax en Tmax`}</Inline></SubHeading>
      <PBody text={`Tijdens de absorptiefase neemt de absorptiesnelheid geleidelijk af. Zodra de absorptiesnelheid gelijk is aan de eliminatiesnelheid, is de **Tmax** bereikt. Dat is de tijd die nodig is om de **Cmax** te bereiken.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Cmax** = de maximale concentratie in het bloed`}</Inline></li>
        <li><Inline>{`**Tmax** = de tijd waarop die maximale concentratie wordt bereikt`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Na het bereiken van Tmax wordt de eliminatiesnelheid groter dan de absorptiesnelheid, waardoor de bloedconcentratie daalt.`}</Inline></p>
      <SubHeading><Inline>{`AUC`}</Inline></SubHeading>
      <PBody text={`De totale blootstelling van het lichaam aan een farmacon wordt weergegeven met de **AUC**: **Area Under the Curve**. De y-as laat de concentratie in het bloed zien, de x-as de tijd. Het oppervlak onder de curve geeft de totale hoeveelheid farmacon weer waaraan het lichaam is blootgesteld.`} />
      <DataTable rows={[["Begrip", "Betekenis"], ["Cmax", "Hoogste bloedconcentratie"], ["Tmax", "Tijd tot Cmax"], ["T1/2", "Tijd om de helft te elimineren"], ["AUC", "Totale blootstelling aan het farmacon"]]} />
    </div>
  )
}
