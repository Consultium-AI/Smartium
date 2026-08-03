import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vesica urinaria: de blaas`}</Inline></SubHeading>
      <PBody text={`De urine komt de blaas binnen via het **ostium ureteris**. De **vesica urinaria** is een opslagplaats voor urine en kan ongeveer **500 tot 1500 ml** bevatten. Toch ontstaat **plasdrang** al bij een vulling van ongeveer **250 tot 500 ml**. De blaas hoeft dus niet volledig gevuld te zijn voordat je aandrang voelt.`} />
      <SubHeading><Inline>{`Wandopbouw van de blaas`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De wand van de vesica urinaria bestaat uit twee belangrijke lagen:`}</Inline></p>
      <DataTable rows={[["Tabel 4. Lagen van de blaaswand", "Functie"], ["Tunica muscularis (m. detrusor)", "Kan samentrekken en zo de druk in de blaas sterk verhogen, waardoor urine naar en door de urethra wordt geperst"], ["Tunica mucosa", "Beschermt de blaaswand tegen de agressieve chemische samenstelling van urine, zoals zuren, zouten en afvalstoffen"]]} />
      <PBody text={`De **m. detrusor** is dus de spierlaag die de blaas leegperst. De **mucosa** is de beschermende binnenbekleding.`} />
    </div>
  )
}
