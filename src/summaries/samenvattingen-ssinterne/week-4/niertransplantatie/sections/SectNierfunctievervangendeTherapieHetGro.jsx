import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nierfunctievervangende therapie: het grote plaatje`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij terminale nierinsufficiëntie werken de nieren niet meer voldoende om afvalstoffen, vocht en elektrolyten goed te reguleren. Zonder behandeling is dat niet lang met het leven verenigbaar. Daarom zijn er vormen van nierfunctievervangende therapie: behandelingen die de functie van de nieren overnemen. De belangrijkste opties zijn niertransplantatie en dialyse. Soms wordt ook gekozen voor conservatief beleid, dus afzien van nierfunctievervangende behandeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De keuze voor een behandeling hangt niet alleen af van de nierfunctie zelf, maar ook van de algemene toestand van de patiënt. Leeftijd, kwetsbaarheid, co-morbiditeit, mentale en lichamelijke beperkingen en de verwachte invloed op kwaliteit van leven spelen allemaal mee.`}</Inline></p>
      <SubHeading><Inline>{`Wanneer begin je met voorlichting?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een predialysetraject start op het moment dat verwacht wordt dat nierfunctievervangende therapie binnen ongeveer een jaar nodig zal zijn. Dat is meestal bij een eGFR van ongeveer 15–25 ml/min/1,73 m², afhankelijk van hoe snel de nierfunctie achteruitgaat. Bij CKD stadium 5, dus een eGFR <15 ml/min/1,73 m², ontstaat in elk geval de noodzaak tot nierfunctievervangende therapie.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom begin je al vóór het echte nierfalen met voorlichting?
**Mini-antwoord:** Omdat er tijd nodig is om samen een keuze te maken en de voorbereiding voor de gekozen behandeling te regelen.`} />
    </div>
  )
}
