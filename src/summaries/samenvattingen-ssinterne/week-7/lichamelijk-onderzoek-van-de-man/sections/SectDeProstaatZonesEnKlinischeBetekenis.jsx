import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De prostaat: zones en klinische betekenis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De prostaat heeft verschillende zones, en die zijn belangrijk voor het lichamelijk onderzoek en voor het begrijpen van prostaatziekten.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Prostaatzones en bijbehorende afwijkingen`}</Inline></SubHeading>
      <DataTable rows={[["Zone", "Belangrijke afwijking", "Klinische betekenis"], ["Transitional zone", "Adenoom", "Groeit rondom de urethra en kan plasklachten geven"], ["Peripheral zone", "Meeste tumoren", "Prostaatcarcinoom ontstaat hier meestal en is vaak voelbaar bij rectaal onderzoek"], ["Central zone", "Minder nadruk in deze module", "—"], ["Fibromuscular zone", "Minder nadruk in deze module", "—"]]} />
      <p className="leading-relaxed"><Inline>{`Het adenoom van de prostaat zit vooral in de transitional zone en periurethrale klierregio. Met de leeftijd kan dit weefsel groeien en de urethra deels afsluiten. Daardoor ontstaat prostaathypertrofie met moeilijker plassen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Prostaatcarcinoom ontstaat meestal in de perifere zone. Daardoor is het vaak voelbaar aan de buitenzijde van de prostaat bij rectaal onderzoek. In tegenstelling tot een adenoom geeft prostaatkanker niet snel plasklachten, omdat het de urethra niet dichtdrukt. Het kan dus ook voorkomen bij mannen zonder klachten.`}</Inline></p>
    </div>
  )
}
