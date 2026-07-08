import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Normale bevalling en baring in het algemeen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een normale bevalling is een fysiologische gebeurtenis. Daarbij verloopt de geboorte spontaan, zonder medische interventies, en vindt deze plaats bij een zwangerschapsduur tussen 37 en 42 weken. De foetus ligt in hoofdligging, de weeën beginnen spontaan en de ontsluiting en uitdrijving verlopen normaal. Na de geboorte hoort de placenta met de vliezen binnen een uur geboren te zijn. Het bloedverlies blijft onder de 1000 ml. Het perineum kan gaaf blijven, of er kan sprake zijn van een 1e- of 2e-graadsruptuur of een episiotomie. De neonaat heeft na 5 minuten een Apgarscore boven de 7 en heeft geen directe zorg nodig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De baring kent 4 tijdperken:`}</Inline></p>
      <DataTable rows={[["Tabel 1. De vier tijdperken van de baring"], ["1. Ontsluitingstijdperk", "De cervix verstrijkt en ontsluit"], ["2. Uitdrijvingstijdperk", "Het kind wordt geboren"], ["3. Nageboortetijdperk", "De placenta wordt geboren"], ["4. Postplacentair tijdperk", "De periode na de geboorte van de placenta"]]} />
      <PBody text={`**Aandachtsvraag:** Wanneer spreek je van een normale bevalling?
**Mini-antwoord:** Als de baring spontaan verloopt, de foetus in hoofdligging ligt, de duur tussen 37 en 42 weken is en moeder en kind na afloop goed zijn.`} />
    </div>
  )
}
