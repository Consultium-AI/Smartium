import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Thuismonitoring: wat is het en waarom wordt het ingezet?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Thuismonitoring is een vorm van digitale zorg waarbij een patiënt thuis gegevens doorgeeft, terwijl de zorgverlener die gegevens op afstand volgt. Het gaat vaak om patiënten met een chronische aandoening. De overheid vindt digitalisering van de zorg belangrijk, maar de invoering in de praktijk gaat nog niet vanzelf. Daarvoor moeten processen worden aangepast en moeten zorgverleners en patiënten de voordelen echt gaan zien.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor de patiënt kan thuismonitoring prettig zijn omdat het meer regie geeft en minder tijd kost. Reizen naar het ziekenhuis of naar andere zorgverleners is dan minder vaak nodig. Voor de zorgverlener kan het ook voordelen hebben, zoals minder administratie, betrouwbaardere gegevensuitwisseling en een betere inzet van tijd, zodat de zorg toegankelijk blijft.`}</Inline></p>
      <PBody text={`Aandachtsvraag: waarom is thuismonitoring voor veel patiënten aantrekkelijk?
Mini-antwoord: omdat het tijd scheelt, meer eigen regie geeft en minder belastend kan zijn dan steeds naar het ziekenhuis gaan.`} />
    </div>
  )
}
