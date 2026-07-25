import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sensitiviteit en specificiteit`}</Inline></SubHeading>
      <PBody text={`Bij het interpreteren van testuitslagen zijn **sensitiviteit** en **specificiteit** heel belangrijk. Deze begrippen helpen je begrijpen hoe goed een test een ziekte kan aantonen of uitsluiten.`} />
      <SubHeading><Inline>{`Sensitiviteit`}</Inline></SubHeading>
      <PBody text={`**Sensitiviteit** is het vermogen van een test om mensen met de ziekte goed als positief te herkennen.`} />
      <p className="leading-relaxed"><Inline>{`Formule:`}</Inline></p>
      <PBody text={`**sensitiviteit = true positives / (true positives + false negatives)**`} />
      <PBody text={`Een test met hoge sensitiviteit mist weinig zieke mensen. Er zijn dus weinig **vals-negatieven**.`} />
      <SubHeading><Inline>{`Specificiteit`}</Inline></SubHeading>
      <PBody text={`**Specificiteit** is het vermogen van een test om mensen zonder de ziekte goed als negatief te herkennen.`} />
      <p className="leading-relaxed"><Inline>{`Formule:`}</Inline></p>
      <PBody text={`**specificiteit = true negatives / (true negatives + false positives)**`} />
      <PBody text={`Een test met hoge specificiteit geeft weinig **vals-positieven**.`} />
      <SubHeading><Inline>{`Vals-negatief en vals-positief`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Vals-negatief**: de test is negatief, terwijl de ziekte wel aanwezig is.`}</Inline></li>
        <li><Inline>{`**Vals-positief**: de test is positief, terwijl de ziekte niet aanwezig is.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Welke test kies je?`}</Inline></SubHeading>
      <PBody text={`Als je een diagnose wilt **bevestigen**, heb je bij voorkeur een **specifieke** test nodig. Dan zijn er weinig vals-positieven, zodat een positieve uitslag sterker pleit voor de diagnose.`} />
      <PBody text={`Als je een diagnose juist **niet wilt missen**, kies je eerder een **sensitieve** test. Dan zijn er weinig vals-negatieven.`} />
      <SubHeading><Inline>{`ASAT als levermarker`}</Inline></SubHeading>
      <PBody text={`**ASAT** is een **sensitieve** marker voor leverschade, maar minder specifiek. Dat betekent dat een verhoogde ASAT niet automatisch bewijst dat de lever de oorzaak is van de afwijking. Een verhoogde ASAT kan dus wel passen bij leverschade, maar bevestigt de diagnose niet alleen.`} />
      <PBody text={`Welke marker is specifieker dan ASAT voor leverschade?
Dat is **ALAT**.`} />
    </div>
  )
}
