import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Farmacologie en farmacokinetiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Farmacologie gaat over de interactie tussen een geneesmiddel en het menselijk lichaam: hoe werken geneesmiddelen, en hoe bewegen ze zich door het lichaam? Binnen de farmacologie zijn er twee grote onderdelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Farmacokinetiek**: wat het lichaam met het farmacon doet;`}</Inline></li>
        <li><Inline>{`**Farmacodynamiek**: wat het farmacon met het lichaam doet.`}</Inline></li>
      </ul>
      <PBody text={`Een **farmacon** is de werkzame stof in een geneesmiddel. Een tablet paracetamol is dus het geneesmiddel, terwijl paracetamol zelf het farmacon is. Farmacodynamiek gaat bijvoorbeeld over hoe ibuprofen pijn vermindert. Farmacokinetiek beschrijft juist de reis van het farmacon door het lichaam. Die reis wordt samengevat met **ADME**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Absorptie**`}</Inline></li>
        <li><Inline>{`**Distributie**`}</Inline></li>
        <li><Inline>{`**Metabolisme**`}</Inline></li>
        <li><Inline>{`**Eliminatie**`}</Inline></li>
      </ul>
    </div>
  )
}
