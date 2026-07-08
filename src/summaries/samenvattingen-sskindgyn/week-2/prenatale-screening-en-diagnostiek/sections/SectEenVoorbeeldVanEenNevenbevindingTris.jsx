import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Een voorbeeld van een nevenbevinding: trisomie 7`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als de NIPT een trisomie 7 laat zien, is dat een nevenbevinding. Het gaat dan om een vermoede chromosoomafwijking die niet valt onder trisomie 21, 18 of 13.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een volledige trisomie 7 bij de foetus is niet levensvatbaar en leidt meestal tot een miskraam. Als de zwangerschap toch intact is, denk je eerder aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**CPM**: de trisomie zit alleen in de placenta;`}</Inline></li>
        <li><Inline>{`**mozaïek foetale trisomie**: een deel van de foetale cellen is afwijkend.`}</Inline></li>
      </ul>
      <PBody text={`Bij CPM kan er bij de foetus ook een **uniparentale disomie (UPD)** van chromosoom 7 ontstaan. Dat kan leiden tot het **Silver-Russell-syndroom**.`} />
      <SubHeading><Inline>{`Wat is trisomic rescue?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een bevruchte eicel kan eerst een trisomie aanwezig zijn. Tijdens latere celdelingen kan één extra chromosoom worden uitgestoten. Daardoor kan een zwangerschap doorgaan, maar kunnen verschillende weefsels verschillende chromosoompatronen hebben. Als de placenta afwijkend blijft en de foetus niet, verklaart dat waarom de NIPT afwijkend kan zijn terwijl de foetus gezond lijkt.`}</Inline></p>
      <SubHeading><Inline>{`Silver-Russell-syndroom`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dit syndroom kenmerkt zich door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ernstige groeiachterstand, al vóór de geboorte;`}</Inline></li>
        <li><Inline>{`typische gelaatstrekken, zoals een driehoekig gezicht, hoog voorhoofd, kleine kaak en smalle kin;`}</Inline></li>
        <li><Inline>{`ontwikkelingsachterstand;`}</Inline></li>
        <li><Inline>{`problemen met praten, taal en leren.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Wat is dan het vervolg?`}</Inline></SubHeading>
      <PBody text={`Bij een afwijkende NIPT met trisomie 7 is **amniocentese** het meest passend. Daarnaast is er aandacht voor mogelijke groeivertraging van de foetus. Daarom zijn frequente echografische groeicontroles nodig. Na de geboorte kan genetisch onderzoek van de placenta worden gedaan om te kijken of er inderdaad sprake was van CPM trisomie 7.`} />
    </div>
  )
}
