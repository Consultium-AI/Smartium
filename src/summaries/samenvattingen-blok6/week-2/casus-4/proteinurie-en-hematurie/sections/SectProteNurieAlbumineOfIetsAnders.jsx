import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Proteïnurie: albumine of iets anders?`}</Inline></SubHeading>
      <PBody text={`De urinstick is vooral gevoelig voor **albumine**. Dat is belangrijk, want niet elk eiwit in de urine wordt door de stick herkend. Als er andere eiwitten in de urine zitten, kan de stick dus ten onrechte negatief zijn.`} />
      <p className="leading-relaxed"><Inline>{`Bij het beoordelen van proteïnurie is het belangrijk om te weten of je kijkt naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**concentratie per liter**;`}</Inline></li>
        <li><Inline>{`of **uitscheiding per dag**.`}</Inline></li>
      </ul>
      <PBody text={`Dat verschil is essentieel, omdat de definitie van bijvoorbeeld het nefrotisch syndroom in **gram per dag** wordt uitgedrukt.`} />
      <SubHeading><Inline>{`24-uurs urine of een spot urine?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De hoeveelheid eiwit per dag kun je bepalen met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**24-uurs urineverzameling**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit is nauwkeurig, maar lastig in de praktijk.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Een eenmalig urinemonster** met creatininecorrectie`}</Inline></li>
      </ul>
      <PBody text={`Hierbij gebruik je de veronderstelling dat creatinine-uitscheiding ongeveer constant is, rond **10 mmol per dag**.`} />
      <p className="leading-relaxed"><Inline>{`Zo kun je uit een concentratie per liter terugrekenen naar een schatting per dag. Dat is handig, omdat een sterk verdunde of juist sterk geconcentreerde urine anders tot een verkeerde inschatting kan leiden.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Waarom creatinine helpt bij het schatten van eiwitverlies`}</Inline></SubHeading>
      <DataTable rows={[["Gegeven", "Betekenis"], ["Eiwit per liter", "Alleen concentratie"], ["Creatinine per liter", "Hulp om de dagelijkse uitscheiding te schatten"], ["Creatinine per dag", "Ongeveer constant, rond 10 mmol/dag"], ["Eiwit per dag", "Nodig voor de definitie van proteïnurie en nefrotisch syndroom"]]} />
    </div>
  )
}
