import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Waarom leidt ultrabewerkt voedsel tot meer eten?`}</Inline></h3>
      <p><Inline>{`In een crossover-onderzoek kregen mensen twee diëten die gelijk waren in calorieën, macronutriënten en vezels: een ultrabewerkt dieet en een onbewerkt dieet. Toch aten mensen op het ultrabewerkte dieet gemiddeld meer en kwamen ze aan, terwijl ze op het onbewerkte dieet juist afvielen.`}</Inline></p>
      <p><Inline>{`De verklaring die in de stof wordt genoemd is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ultrabewerkt voedsel is sneller en makkelijker te eten;`}</Inline></li>
        <li><Inline>{`de eetsnelheid ligt hoger;`}</Inline></li>
        <li><Inline>{`mensen eten daardoor ongemerkt meer calorieën;`}</Inline></li>
        <li><Inline>{`het dieet kan minder verzadigend zijn;`}</Inline></li>
        <li><Inline>{`bij bewerkte voeding wordt vaker meer vet en koolhydraten gebruikt en relatief minder eiwit, wat minder verzadigend is dan eiwit.`}</Inline></li>
      </ul>
      <p><Inline>{`De kern is dus niet alleen *wat* iemand eet, maar ook *hoe makkelijk* een voedingspatroon tot overeten leidt.`}</Inline></p>
    </div>
  )
}
