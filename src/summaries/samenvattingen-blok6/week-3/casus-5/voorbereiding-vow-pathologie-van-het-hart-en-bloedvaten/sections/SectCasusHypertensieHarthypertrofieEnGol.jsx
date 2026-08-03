import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus: hypertensie, harthypertrofie en Goldblattfenomeen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de casus gaat het om een oudere man met langdurige hypertensie. Bij obductie wordt een sterk hypertrofisch hart gevonden, een uitgebreid infarct in de linker ventrikel, atherosclerotische veranderingen in de aorta en een groot verschil in niergrootte.`}</Inline></p>
      <SubHeading><Inline>{`Harthypertrofie`}</Inline></SubHeading>
      <PBody text={`Door langdurige hypertensie moet het hart tegen een verhoogde weerstand in pompen. Daardoor ontstaat **hypertrofie van de linker ventrikel**. De linker kamer moet immers de systemische circulatie op gang houden en krijgt dus de hoogste drukbelasting.`} />
      <SubHeading><Inline>{`Atherosclerose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De aorta laat uitgebreide atherosclerotische veranderingen zien, vooral in het abdominale deel. Dat past bij langdurige vaatbelasting en vaatwandveranderingen.`}</Inline></p>
      <SubHeading><Inline>{`Verschil in niergrootte`}</Inline></SubHeading>
      <PBody text={`Het grote verschil tussen de twee nieren past bij het **Goldblattfenomeen**. Daarbij is één nier kleiner door een verminderde doorbloeding, bijvoorbeeld door een stenose van de arteria renalis. Die nier kan atrofisch worden. De andere nier kan juist groter worden door compensatie.`} />
      <PBody text={`**Aandachtspunt:**
Heeft iemand met één goed werkende nier altijd nierfunctiestoornissen?
**Antwoord:** nee, één nier kan het verlies van de andere nier vaak goed compenseren.`} />
      <SubHeading><Inline>{`Welke nier heeft littekens?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier die blootgesteld is aan de hypertensie raakt beschadigd door arterio- en arteriolosclerose. Daardoor kunnen littekens en intrekkingen van het oppervlak ontstaan. De andere nier kan juist een compensatoire vergroting laten zien.`}</Inline></p>
      <SubHeading><Inline>{`Schema van het Goldblattfenomeen`}</Inline></SubHeading>
      <PBody text={`Een eenzijdige stenose van de arteria renalis leidt tot verminderde doorbloeding van die nier. Die nier gaat meer **renine** produceren. Renine activeert hormonale mechanismen die de bloeddruk verhogen. Daardoor ontstaat hypertensie. De andere nier krijgt vervolgens te maken met deze hoge bloeddruk en ontwikkelt arterio- en arteriolosclerose. Ook dat beïnvloedt de renineproductie en houdt de vicieuze cirkel in stand.`} />
    </div>
  )
}
