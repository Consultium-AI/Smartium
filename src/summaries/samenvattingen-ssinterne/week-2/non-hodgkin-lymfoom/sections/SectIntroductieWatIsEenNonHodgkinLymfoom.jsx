import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Introductie: wat is een non-Hodgkin lymfoom?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Non-Hodgkin lymfomen vormen een grote groep kwaadaardige lymfomen. Binnen de hemato-oncologische aandoeningen zijn ze een belangrijke groep maligniteiten. Er bestaan meer dan vijftig verschillende klinisch-pathologische entiteiten. Die kunnen ontstaan uit B-lymfocyten, T-lymfocyten of NK-lymfocyten, maar in westerse landen ontstaat het overgrote deel van de maligne lymfomen uit B-lymfocyten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een lymfoom kan op verschillende plaatsen in het lichaam ontstaan. Het merendeel presenteert zich in een lymfeklier; dat heet een nodaal lymfoom. Een kleiner deel presenteert zich primair in het bloed en beenmerg, dus leukemisch. Nog een kleiner deel heeft een extranodale oorsprong, bijvoorbeeld in het maag-darmkanaal.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij non-Hodgkin lymfoom is het belangrijk om te weten dat er veel verschillende vormen bestaan, maar dat in deze stof vooral het meest voorkomende type centraal staat: het diffuus grootcellig B-cel non-Hodgkin lymfoom, vaak afgekort als DLBCL.`}</Inline></p>
    </div>
  )
}
