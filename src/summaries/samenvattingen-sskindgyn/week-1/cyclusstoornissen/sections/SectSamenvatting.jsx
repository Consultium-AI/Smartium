import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cyclusstoornissen zijn vaak een teken van onderliggende pathologie en moeten altijd goed worden uitgevraagd. De cyclusanamnese vormt de basis, met aandacht voor cyclusduur, puberteitsontwikkeling, anticonceptiegebruik, familieanamnese en klachten zoals opvliegers, vaginale droogheid, acne, hirsutisme of galactorroe. Lichamelijk onderzoek en aanvullend hormonaal onderzoek helpen om de oorzaak te bepalen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een WHO3-cyclusstoornis ligt de oorzaak op ovarieel niveau. Als de ovariële functie uitvalt vóór het 40e levensjaar spreek je van POI. De behandeling richt zich op klachtenvermindering, botbescherming, leefstijl en, bij een kinderwens, vooral op eiceldonatie. Psychosociale begeleiding is belangrijk, omdat de impact van POI groot kan zijn.`}</Inline></p>
    </div>
  )
}
