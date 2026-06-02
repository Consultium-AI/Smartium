import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-emerald-50/90 dark:bg-emerald-500/10 rounded-xl border-l-4 border-emerald-400 space-y-4">
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Bij klachten binnenshuis moet je altijd denken aan de woning als mogelijke oorzaak. In deze casus zijn vooral koolmonoxide en vocht/schimmel belangrijk. Koolmonoxide kan acute klachten geven zoals hoofdpijn, misselijkheid, verwardheid en benauwdheid, maar ook chronische, vage klachten zoals vermoeidheid, prikkelbaarheid en concentratieproblemen. Omdat de klachten weinig specifiek zijn, worden ze vaak verkeerd geïnterpreteerd.`}</Inline>
        </p>
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Bij verdenking op koolmonoxide kijk je naar de bron in huis, de klachten van meerdere bewoners en de juiste diagnostiek, zoals COHb-bepaling bij acute vergiftiging en een ademtest bij chronische blootstelling. Bij benauwdheid of inhalatieschade beoordeel je de ademweg zorgvuldig, let je op tekenen van inhalatietrauma en overweeg je snelle intubatie bij dreigend oedeem. Vocht en schimmel in huis kunnen hoesten, niezen en snotteren veroorzaken en astma verergeren.`}</Inline>
        </p>
      </div>
    </div>
  )
}
