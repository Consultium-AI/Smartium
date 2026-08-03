import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sympathisch zenuwstelsel`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De snelle reactie verloopt via de baroreflex. Als de bloeddruk daalt, registreren baroreceptoren in de aortaboog en sinus carotidicus dat en wordt het sympathisch zenuwstelsel geactiveerd. Dit gebeurt binnen seconden tot minuten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De effecten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`tachycardie;`}</Inline></li>
        <li><Inline>{`verhoogde contractiliteit;`}</Inline></li>
        <li><Inline>{`vasoconstrictie van arteriolen;`}</Inline></li>
        <li><Inline>{`veneuze vasoconstrictie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hierdoor stijgen perifere weerstand, veneuze terugkeer en tijdelijk ook de bloeddruk. De belangrijkste receptoren zijn β1-receptoren in het hart en α1-receptoren in arteriën en venen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Op korte termijn is dit nuttig, maar chronische sympathische activatie is schadelijk. Dan ontstaan downregulatie van β-receptoren, meer zuurstofverbruik van het myocard, remodellering en een grotere kans op ritmestoornissen.`}</Inline></p>
    </div>
  )
}
