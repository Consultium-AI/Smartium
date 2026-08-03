import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat kun je met een echo wel en niet beantwoorden?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Echografie is vooral geschikt om snelle, praktische vragen te beantwoorden. Een arts die niet gespecialiseerd is in echografie kan vaak vooral eenvoudige ja/nee-vragen beantwoorden, zoals: is het pyelum gedilateerd, is de blaas leeg, is er duidelijke hydronefrose? Een radioloog kan met dezelfde techniek meestal veel gedetailleerder antwoorden geven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat verschil is belangrijk. De techniek zelf is nuttig, maar de uitkomst hangt ook af van de vraag die je stelt en van de ervaring van degene die het onderzoek uitvoert.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Verschil in gebruik van echografie`}</Inline></SubHeading>
      <DataTable rows={[["Gebruiker", "Typische vraag", "Kenmerk"], ["Niet-radioloog, bijvoorbeeld internist of SEH-arts", "“Is er hydronefrose?” “Is de blaas leeg?”", "Snel, gericht, vooral ja/nee-antwoorden"], ["Radioloog", "Meer uitgebreide beoordeling van nieren en urinewegen", "Gedetailleerder en uitgebreider antwoord"]]} />
      <PBody text={`**Aandachtsvraag:** Wat is het voordeel van bedside echografie door de behandelend arts?
**Mini-antwoord:** Snelheid en gemak; je kunt direct aan het bed van de patiënt beoordelen of er een belangrijke afwijking is.`} />
    </div>
  )
}
