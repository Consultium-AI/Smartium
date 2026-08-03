import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom behandelen we hartfalen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen is een progressieve aandoening. Dat betekent dat de hartfunctie in de loop van de tijd verder achteruit kan gaan. Het hart is dan niet meer in staat om voldoende bloed rond te pompen om aan de behoefte van het lichaam te voldoen. Daardoor ontstaan klachten zoals vermoeidheid, kortademigheid en vochtophoping.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling van hartfalen heeft meerdere doelen tegelijk. We willen de achteruitgang van de hartfunctie vertragen of stabiliseren, klachten verminderen, ziekenhuisopnames voorkomen en de levensverwachting verbeteren. Hartfalen behandelen is dus niet alleen gericht op symptoomverlichting, maar ook op het remmen van verdere schade en het verbeteren van de prognose.`}</Inline></p>
      <SubHeading><Inline>{`Hoe ontstaat de vicieuze cirkel?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij hartfalen reageert het lichaam met compensatiemechanismen. Op korte termijn helpen die nog, maar op langere termijn worden ze schadelijk.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`De sympathicus wordt geactiveerd: de hartslag stijgt en de bloedvaten trekken samen.`}</Inline></li>
        <li><Inline>{`Het RAAS wordt geactiveerd: er ontstaat natrium- en vochtretentie en ook vasoconstrictie.`}</Inline></li>
        <li><Inline>{`ADH zorgt ervoor dat het lichaam nog meer vocht vasthoudt.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hierdoor nemen preload en afterload toe. Het hart moet harder werken, er ontstaat meer vochtophoping en uiteindelijk raakt de hartspier beschadigd. Dat leidt tot remodelling: structurele verandering en verdere verslechtering van het myocard.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom zijn deze compensatiemechanismen op lange termijn ongunstig?
**Mini-antwoord:** Omdat ze het hart extra belasten, vocht vasthouden en de hartspier verder beschadigen.`} />
    </div>
  )
}
