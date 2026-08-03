import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De wet van Fick`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De wet van Fick beschrijft hoe snel een gas door een membraan diffundeert. De diffusiesnelheid is:`}</Inline></p>
      <PBody text={`**V̇gas = D × A / T × ΔP**`} />
      <p className="leading-relaxed"><Inline>{`Hierin staat:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**V̇gas** voor de hoeveelheid gas die per tijdseenheid diffundeert`}</Inline></li>
        <li><Inline>{`**D** voor de diffusieconstante van het gas`}</Inline></li>
        <li><Inline>{`**A** voor het diffusieoppervlak`}</Inline></li>
        <li><Inline>{`**T** voor de dikte van het membraan`}</Inline></li>
        <li><Inline>{`**ΔP** voor het verschil in partiële druk over het membraan`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De diffusieconstante van een gas hangt af van twee dingen: de oplosbaarheid en het molecuulgewicht. Hoe beter een gas oplost, hoe makkelijker het diffundeert. Hoe groter het molecuulgewicht, hoe moeilijker diffusie gaat.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Factoren uit de wet van Fick`}</Inline></SubHeading>
      <DataTable rows={[["Factor", "Betekenis", "Effect op diffusie"], ["ΔP", "Partiële drukverschil", "Groter verschil geeft meer diffusie"], ["A", "Oppervlak", "Groter oppervlak geeft meer diffusie"], ["T", "Membraandikte", "Dikker membraan geeft minder diffusie"], ["D", "Diffusieconstante", "Hogere D geeft meer diffusie"]]} />
      <p className="leading-relaxed"><Inline>{`In de long zijn de omstandigheden normaal gesproken gunstig voor diffusie. Het diffusieoppervlak is groot, ongeveer 100 m², en het membraan is heel dun, ongeveer 1 tot 2 µm. Daardoor kunnen zuurstof en koolstofdioxide efficiënt worden uitgewisseld.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij longziekten kunnen deze eigenschappen veranderen. Als het oppervlak kleiner wordt of het membraan dikker wordt, gaat diffusie moeilijker. Dat is bijvoorbeeld het geval bij longemfyseem en longfibrose.`}</Inline></p>
      <SubHeading><Inline>{`Diffusiecapaciteit van de long`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diffusiecapaciteit van de long voor zuurstof wordt samengevat als:`}</Inline></p>
      <PBody text={`**DLO2 = D O2 × A / T**`} />
      <p className="leading-relaxed"><Inline>{`Je kunt dit ook schrijven als:`}</Inline></p>
      <PBody text={`**DLO2 = V̇O2 / (P A,O2 − P c,O2)**`} />
      <p className="leading-relaxed"><Inline>{`Hiermee wordt duidelijk dat de diffusiecapaciteit afhangt van de zuurstofopname en het drukverschil tussen alveolus en capillair bloed. In de praktijk is de exacte capillaire zuurstofdruk lastig te bepalen. Daarom wordt de diffusiecapaciteit niet met zuurstof zelf gemeten, maar met koolmonoxide.`}</Inline></p>
    </div>
  )
}
