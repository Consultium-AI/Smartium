import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Basisfysiologie van het hartritme`}</Inline></SubHeading>
      <PBody text={`Het ECG registreert de elektrische activiteit van het hart. Daarbij speelt het begrip **dipool** een rol: een dipool creëert een vector in een bepaalde richting tussen twee polen. Dat is wat het oppervlakte-ECG uiteindelijk opvangt. Het begrip vector sluit hierop aan.`} />
      <p className="leading-relaxed"><Inline>{`Bij een normaal sinusritme loopt de elektrische prikkel vanuit de sinusknoop via de atria naar de AV-knoop en daarna naar de ventrikels. De P-top hoort bij de atriale depolarisatie, het QRS-complex bij de ventriculaire depolarisatie en de T-golf bij de repolarisatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De AV-knoop zorgt voor vertraging in de prikkelgeleiding. De totale vertraging over de AV-knoop, de bundel van His en het Purkinje-systeem mag maximaal 200 milliseconden bedragen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is afleiding II vaak handig bij ritmebeoordeling?
**Mini-antwoord:** omdat de P-top en de atriale activiteit daar vaak goed zichtbaar zijn.`} />
    </div>
  )
}
