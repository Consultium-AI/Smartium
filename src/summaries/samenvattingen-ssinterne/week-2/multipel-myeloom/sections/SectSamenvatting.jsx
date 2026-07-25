import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Multipel myeloom is een kwaadaardige plasmacelaandoening van het beenmerg, vooral voorkomend op oudere leeftijd. De ziekte presenteert zich vaak met aspecifieke klachten zoals vermoeidheid en botpijn, maar laboratoriumafwijkingen zoals anemie, hoge BSE, verhoogd totaal eiwit en nierfunctiestoornissen kunnen de verdenking versterken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke diagnostische stappen zijn het eiwithspectrum, immunofixatie, beenmergonderzoek, flowcytometrie en FISH. Een M-proteïne is een monoklonale antistof, vaak zichtbaar als een piek in het gammagebied. Niet altijd is een M-proteïne aantoonbaar; vrije lichte-keten myeloom en niet-secretorend myeloom blijven dan nog mogelijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De diagnose multipel myeloom wordt gesteld bij een combinatie van een M-proteïne, verhoogde plasmacellen in het beenmerg en orgaanschade, ook wel ROTI of CRAB genoemd. Cytogenetische afwijkingen zoals deletie 17p13 en t(4;14) geven een ongunstige prognose. De behandeling kan bestaan uit bortezomib, thalidomide en dexamethason, met elk hun eigen typische bijwerkingen.`}</Inline></p>
    </div>
  )
}
