import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wachten op een donorlong`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Patiënten op de wachtlijst worden nauwkeurig gevolgd. Ze komen minstens elke 3 maanden op controle. Daarbij wordt gekeken of de conditie nog goed genoeg is en of er geen nieuwe problemen ontstaan, zoals hart- en vaatziekten of kanker, die de uitkomst na transplantatie slechter zouden maken.`}</Inline></p>
      <PBody text={`De volgorde op de wachtlijst wordt bepaald door de **Lung Allocation Score (LAS)**. Hoe hoger de score, hoe urgenter de transplantatie. Ook bloedgroep en de gewenste grootte van de long spelen mee.`} />
    </div>
  )
}
