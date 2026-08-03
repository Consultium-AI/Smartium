import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Distributie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na opname in de bloedbaan begint de distributie: het farmacon verspreidt zich door het lichaam. Je kunt de bloedsomloop zien als een wegennetwerk. Sommige organen liggen aan een drukke snelweg en krijgen snel veel farmacon aangevoerd, terwijl andere organen meer aan een rustig landweggetje liggen en dus later bereikt worden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Binnen het lichaam wordt onderscheid gemaakt tussen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**vasculaire vloeistof**: alle vloeistof in hart en bloedvaten;`}</Inline></li>
        <li><Inline>{`**extravasculaire vloeistof**: alle overige vloeistof in het lichaam.`}</Inline></li>
      </ul>
      <PBody text={`Om te beschrijven hoe goed een farmacon zich verdeelt, gebruik je het **verdelingsvolume** (**Vd**). Dit geeft aan in hoeveel schijnbaar volume het farmacon zich verdeelt, uitgedrukt in **L/kg**. Hoe hoger het verdelingsvolume, hoe groter de verdeling van het farmacon.`} />
      <SubHeading><Inline>{`Verdelingsvolume en lichaamswater`}</Inline></SubHeading>
      <PBody text={`Het watergehalte van het lichaam wordt geschat op ongeveer **40 liter**. Als het verdelingsvolume hoger is dan 40 liter, betekent dit dat er meer dan 40 liter nodig zou zijn om het farmacon in het bloed opgelost te krijgen. In dat geval zit het farmacon dus relatief meer in de weefsels, vooral in **vette weefsels**.`} />
      <DataTable rows={[["Verdelingsvolume", "Betekenis"], ["Laag Vd", "Vooral in de bloedbaan"], ["Hoog Vd", "Meer verdeling naar weefsels, vooral vetweefsel"]]} />
      <p className="leading-relaxed"><Inline>{`De formule die hierbij hoort is:`}</Inline></p>
      <PBody text={`**Vd = hoeveelheid geneesmiddel in het lichaam / concentratie in het bloed**`} />
      <p className="leading-relaxed"><Inline>{`Een hoge hoeveelheid in het lichaam bij een lage bloedconcentratie geeft dus een hoog verdelingsvolume.`}</Inline></p>
    </div>
  )
}
