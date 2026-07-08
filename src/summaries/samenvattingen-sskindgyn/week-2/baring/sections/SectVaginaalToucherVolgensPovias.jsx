import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vaginaal toucher volgens POVIAS`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`POVIAS helpt je om systematisch te beschrijven wat je voelt:`}</Inline></p>
      <DataTable rows={[["Tabel 2. POVIAS bij vaginaal toucher"], ["P = Portio", "Richting, verstrijking en consistentie"], ["O = Ontsluiting", "Hoeveel centimeter ontsluiting er is"], ["V = Vliezen", "Of de vliezen nog intact zijn"], ["I = Indaling", "Hoe diep het voorliggende deel is ingedaald"], ["A = Aard voorliggend deel", "Hoofd, stuit of iets anders"], ["S = Stand", "De ligging van het voorliggende deel"]]} />
      <PBody text={`Bij de **portio** let je op de richting: sacraal, mediosacraal of centraal. Je beoordeelt ook de verstrijking en de consistentie: stug, matig week of week. Bij **indaling** kijk je naar de vlakken van Hodge. Daarbij spelen ook caput succedaneum en moulage een rol. Caput succedaneum is zwelling van het foetale hoofd door huidoedeem tijdens de bevalling. Moulage betekent dat schedelnaden over elkaar heen schuiven onder druk in het baringskanaal.`} />
      <PBody text={`De **stand** van het kind kan bijvoorbeeld achterhoofdsligging, kruinligging, voorhoofdsligging, aangezichtsligging, onvolkomen stuitligging, volkomen stuitligging of een dwarsligging zijn.`} />
    </div>
  )
}
