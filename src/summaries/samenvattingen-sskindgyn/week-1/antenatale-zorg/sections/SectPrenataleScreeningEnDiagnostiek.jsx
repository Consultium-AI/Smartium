import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prenatale screening en diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor structurele afwijkingen of aanlegstoornissen bestaat een verhoogd risico als de kans bij een individuele zwangere hoger is dan het populatierisico. De totale prevalentie van aanlegstoornissen is ongeveer 2-4% bij geboorte. Voor sommige afwijkingen, zoals trisomie 21, neemt de kans toe met de leeftijd van de zwangere.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tegenwoordig krijgt elke zwangere de combinatietest aangeboden. Daarbij wordt de kans op downsyndroom berekend op basis van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`echoscopische zwangerschapsduur`}</Inline></li>
        <li><Inline>{`leeftijd van de zwangere`}</Inline></li>
        <li><Inline>{`dikte van de nekplooi`}</Inline></li>
        <li><Inline>{`PAPP-A en bèta-hCG in maternale serum`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als een vrouw geen combinatietest wil, is een vroege echo nog steeds zinvol, liefst na 14 weken, zodat een eventueel verdikte nekplooi niet meer zichtbaar is. Een vroege echo is ook belangrijk om een meerlingzwangerschap vast te stellen en de chorioniciteit te bepalen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Sinds april 2017 is de NIPT beschikbaar voor alle zwangeren. Hierbij wordt bloed van de zwangere onderzocht op vrij circulerend DNA. Ongeveer 10% daarvan is afkomstig van de placenta en 90% van de zwangere zelf. Als er relatief veel DNA-fragmenten van chromosoom 21, 18 of 13 aanwezig zijn, wijst dat op respectievelijk down-, edwards- of patausyndroom.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij de NIPT moet de zwangere kiezen of zij nevenbevindingen wil horen. Daarnaast wordt aan elke zwangere een structureel echoscopisch onderzoek rond 20 weken aangeboden, de twintigwekenecho, om ernstige structurele afwijkingen op te sporen. Bij zeer ernstige afwijkingen kan de vrouw ervoor kiezen de zwangerschap af te breken of verwezen te worden naar een derdelijns centrum voor gespecialiseerde opvang.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom is een vroege echo ook nuttig als iemand geen combinatietest wil?**
Omdat je dan de zwangerschap goed kunt dateren en een meerlingzwangerschap of chorioniciteit kunt vaststellen.`} />
    </div>
  )
}
