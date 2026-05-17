import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Preventie van diabetes type 2 door leefstijl`}</Inline></h3>
      <p><Inline>{`Een gezonde leefstijl kan diabetes type 2 helpen voorkomen of uitstellen. Dit geldt vooral bij mensen met een verhoogd risico, zoals mensen met prediabetes, overgewicht, een verhoogd risico op hart- en vaatziekten of een gestoorde glucosestofwisseling.`}</Inline></p>
      <p><Inline>{`Een groot voorbeeld is het **Diabetes Prevention Program**. Daarin werden mensen met prediabetes verdeeld over:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`standaardzorg + placebo`}</Inline></li>
        <li><Inline>{`standaardzorg + metformine`}</Inline></li>
        <li><Inline>{`standaardzorg + intensief leefstijlprogramma`}</Inline></li>
      </ul>
      <p><Inline>{`Het intensieve leefstijlprogramma bestond uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een laagcalorisch, laagvet dieet;`}</Inline></li>
        <li><Inline>{`150 minuten beweging per week;`}</Inline></li>
        <li><Inline>{`16 bijeenkomsten in 24 weken, daarna maandelijks contact;`}</Inline></li>
        <li><Inline>{`streven naar minimaal 7% gewichtsverlies.`}</Inline></li>
      </ul>
      <p><Inline>{`De uitkomst was duidelijk: het intensieve leefstijlprogramma werkte beter dan metformine en placebo in het voorkomen van diabetes type 2. Metformine werkte ook, maar minder sterk dan leefstijl. De leefstijlgroep liet na 4 jaar het minste nieuwe diabetes zien.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Wat is hier de hoofdboodschap?  
**Mini-antwoord:** Intensieve leefstijlinterventie is een zeer krachtige maatregel om diabetes type 2 te voorkomen bij mensen met een verhoogd risico.`} />
    </div>
  )
}
