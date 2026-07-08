import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De menopauze is de laatste natuurlijke menstruatie en kan pas achteraf worden vastgesteld na 1 jaar amenorroe. De perimenopauze is de overgangsperiode met afnemende ovariële functie en klachten zoals opvliegers en nachtzweten. De postmenopauze begint 1 jaar na de laatste menstruatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Door het afnemen van de follikelvoorraad daalt de ovariële hormoonproductie. Dat heeft gevolgen voor onder andere thermoregulatie, stemming, botstofwisseling, huid en urogenitaal weefsel. Opvliegers ontstaan waarschijnlijk door ontregeling van het hypothalamische warmteregulatiecentrum en een versmalling van de tolerantiezone.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke postmenopauzale gevolgen zijn osteoporose en urogenitale atrofie. Osteoporose kan worden beoordeeld met een DXA-scan en T-scores. Behandeling van klachten kan lokaal met oestriol of systemisch met hormonale therapie, maar daarbij moeten risico’s en contra-indicaties goed worden meegewogen. Niet-hormonale alternatieven bestaan ook, maar zijn vaak minder effectief.`}</Inline></p>
    </div>
  )
}
