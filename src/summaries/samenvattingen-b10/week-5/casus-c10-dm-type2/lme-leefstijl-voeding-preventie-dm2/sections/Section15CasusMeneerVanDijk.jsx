import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Casus: meneer Van Dijk`}</Inline></h3>
      <p><Inline>{`De casus laat goed zien hoe je de theorie in de praktijk gebruikt. Meneer Van Dijk is 52 jaar, heeft een BMI van 31,4 kg/m², een middelomtrek van 112 cm, verhoogde nuchtere glucose, een HbA1c van 56 mmol/mol en een ongunstig lipidenprofiel. Daarmee past zijn beeld bij **diabetes mellitus type 2**.`}</Inline></p>
      <p><Inline>{`Zijn leefstijl bevat meerdere risicofactoren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`veel ultrabewerkte voeding;`}</Inline></li>
        <li><Inline>{`suikerhoudende dranken;`}</Inline></li>
        <li><Inline>{`wit brood en geraffineerde granen;`}</Inline></li>
        <li><Inline>{`bewerkt vlees;`}</Inline></li>
        <li><Inline>{`weinig beweging;`}</Inline></li>
        <li><Inline>{`stress;`}</Inline></li>
        <li><Inline>{`slaaptekort.`}</Inline></li>
      </ul>
      <p><Inline>{`Beschermende factoren zijn nog onvoldoende aanwezig, maar een aantal kleine eerste stappen is wel laagdrempelig mogelijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`frisdrank vervangen door water of light;`}</Inline></li>
        <li><Inline>{`wit brood vervangen door volkorenbrood;`}</Inline></li>
        <li><Inline>{`dagelijks een extra portie groente toevoegen;`}</Inline></li>
        <li><Inline>{`peulvruchten vaker gebruiken;`}</Inline></li>
        <li><Inline>{`elke dag ontbijten met iets vezelrijks;`}</Inline></li>
        <li><Inline>{`dagelijks minimaal 30 minuten wandelen of een andere haalbare beweegvorm;`}</Inline></li>
        <li><Inline>{`slaap verbeteren.`}</Inline></li>
      </ul>
      <p><Inline>{`Gezien zijn motivatie is een **Mediterrane voedingsstijl** een duurzame eerste stap, omdat die haalbaar is en goed past bij het doel om diabetes onder controle te krijgen. Een very low-calorie dieet kan ook overwogen worden als de motivatie hoog is en er goede begeleiding is, maar bij zijn werkstress en onregelmatige eetpatroon lijkt eerst normaliseren van de gewoonten verstandiger.`}</Inline></p>
      <p><Inline>{`Belangrijk is daarnaast:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`monitoren van HbA1c, lipiden, gewicht en bloeddruk;`}</Inline></li>
        <li><Inline>{`verwijzing naar een diëtist voor een persoonlijk plan;`}</Inline></li>
        <li><Inline>{`eventueel deelname aan een leefstijlprogramma;`}</Inline></li>
        <li><Inline>{`langdurige follow-up, met in het begin frequente controle en daarna periodieke opvolging;`}</Inline></li>
        <li><Inline>{`aandacht voor sociale steun en terugvalpreventie.`}</Inline></li>
      </ul>
    </div>
  )
}
