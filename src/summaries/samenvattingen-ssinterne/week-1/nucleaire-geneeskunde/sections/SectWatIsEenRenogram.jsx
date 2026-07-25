import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is een renogram?`}</Inline></SubHeading>
      <PBody text={`Een renogram is een onderzoek waarmee je de **functie van de nieren** en de **afvloed van urine** kunt beoordelen. Het radiofarmacon dat hiervoor wordt gebruikt is **Tc-99m-MAG-3**. Daarbij is **Tc-99m** de radioactieve component en **MAG-3** de werkzame stof.`} />
      <PBody text={`Na toediening via een **bolusinjectie** komt het radiofarmacon in het bloed terecht. Vervolgens wordt het grotendeels door de nier geklaard via **tubulaire excretie** en daarna uitgescheiden met de urine naar de blaas. Simpel gezegd: het gaat de nier in en weer uit via de urine. Daardoor krijg je een beeld van hoe goed de nier werkt.`} />
      <SubHeading><Inline>{`Waarom geef je furosemide?`}</Inline></SubHeading>
      <PBody text={`Om de afvloed goed te kunnen beoordelen, krijgt de patiënt vaak **furosemide** 15 minuten vóór toediening van het radiofarmacon. Ook moet de patiënt vooraf goed drinken. Zo kun je beter zien of de urine echt goed wegloopt of dat er sprake is van een obstructie.`} />
      <PBody text={`**Aandacht-vraagje:** waarom is goed drinken belangrijk?
**Mini-antwoord:** dan is de urineproductie beter en kun je de afvloed van de nier duidelijker beoordelen.`} />
    </div>
  )
}
