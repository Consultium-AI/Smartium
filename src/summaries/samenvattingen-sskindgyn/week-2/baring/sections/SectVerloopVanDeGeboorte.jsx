import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verloop van de geboorte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De begeleider van de bevalling stuurt het persen en helpt het kind zo veilig mogelijk geboren te worden. Eerst laat je de vrouw persen tot het hoofd staat. Dat betekent dat het hoofd tussen de weeën niet meer terugzakt. Daarna laat je haar voorzichtig persen en af en toe zuchten, zodat het hoofd geleidelijk geboren wordt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Na de geboorte van het hoofd voel je of de navelstreng om de hals zit. Als dat niet zo is, omvat je het hoofd met twee handen. Vervolgens laat je de vrouw persen en beweeg je het hoofd sacraalwaarts tot de voorste schouder geboren is. Daarna haak je de oksel aan. Vervolgens laat je de vrouw zuchten en beweeg je het kind symphysewaarts zodat de achterste schouder geboren wordt. Ook dan let je op het perineum en haak je de achterste oksel aan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarna leg je het kind op de buik van de moeder, droog je het af en houd je het warm met bijvoorbeeld een mutsje en warme doeken. Vervolgens bepaal je de Apgarscore na 1 en 5 minuten. De navelstreng wordt afgeklemd en de vader mag deze doorknippen.`}</Inline></p>
    </div>
  )
}
