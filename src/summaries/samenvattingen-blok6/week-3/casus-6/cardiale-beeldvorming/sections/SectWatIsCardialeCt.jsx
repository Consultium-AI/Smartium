import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is cardiale CT?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cardiale CT is een beeldvormingstechniek waarmee gedetailleerde beelden van het hart en de coronairen gemaakt worden. Omdat het hart voortdurend beweegt, is cardiale CT technisch lastiger dan een gewone CT. Je moet niet alleen snel kunnen scannen, maar ook op het juiste moment in de hartcyclus scannen. Anders ontstaan bewegingsartefacten: beelden worden wazig en structuren zoals de coronairen zijn dan slecht of niet te beoordelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De techniek werd echt praktisch bruikbaar vanaf de 64-slice CT-scanner. Hoe hoger het aantal slices, hoe sneller er gescand kan worden. Dat was belangrijk om de coronairen betrouwbaar in beeld te brengen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er zijn twee hoofdvormen van cardiale CT:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**CT hart zonder contrast**: de **CT-kalkscore**, bedoeld om atherosclerose te kwantificeren en risico in te schatten.`}</Inline></li>
        <li><Inline>{`**CT hart met contrast**: **CT-coronairangiografie (CTA coronairen)**, bedoeld om coronairstenosen uit te sluiten.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom is snelheid zo belangrijk bij cardiale CT?**
Omdat het hart beweegt. Hoe sneller de scan, hoe kleiner de kans op bewegingsonscherpte.`} />
    </div>
  )
}
