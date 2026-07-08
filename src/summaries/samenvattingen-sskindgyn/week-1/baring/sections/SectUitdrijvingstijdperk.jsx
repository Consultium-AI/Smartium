import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Uitdrijvingstijdperk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het uitdrijvingstijdperk begint wanneer de ontsluiting volledig is en eindigt met de geboorte van het kind. De meeste foetussen liggen in achterhoofdsligging. Dat betekent dat het achterhoofd van de foetus als eerste door het baringskanaal komt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Naast achterhoofdsligging bestaan ook kruinligging, voorhoofdsligging en aangezichtsligging. De stand van het hoofd in het bekken is belangrijk voor het verloop van de geboorte.`}</Inline></p>
      <SubHeading><Inline>{`Inwendige spildraai`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tijdens de passage van het foetale hoofd door het maternale bekken moet het hoofd zich aanpassen aan de vorm van het bekken. De bekkeningang is een dwarse ovaal, terwijl de bekkenuitgang een rechtopstaande ovaal is. Omdat het hoofd ook ovaal van vorm is, moet het draaien om goed te kunnen passeren. Die draai heet de inwendige spildraai.`}</Inline></p>
      <SubHeading><Inline>{`Uitwendige spildraai`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de geboorte van het hoofd volgt de uitwendige spildraai. Dat gebeurt onder invloed van de wee en het meepersen van de vrouw. De schouders moeten namelijk ook door het bekken passen. Terwijl de schouders draaien, zie je dat aan het hoofd. Dat is de uitwendige spildraai.`}</Inline></p>
      <SubHeading><Inline>{`Begeleiding van de geboorte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de begeleiding van de uitdrijving geef je de vrouw instructies om het kind zo veilig en atraumatisch mogelijk geboren te laten worden. Eerst laat je haar persen tot het hoofd staat, dus totdat het hoofd niet meer tussen de weeën terugzakt. Daarna laat je haar voorzichtig persen en af en toe zuchten, zodat het hoofd geleidelijk kan doorsnijden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Na de geboorte van het hoofd laat je het hoofd spontaan spildraaien. Daarna controleer je of de navelstreng om de nek zit. Als dat niet zo is, omvat je het hoofd met twee handen en help je de geboorte van de schouders. Je beweegt het hoofd sacraalwaarts tot de voorste schouder geboren is, haakt de oksel aan, en beweegt vervolgens het kind symphysewaarts zodat de achterste schouder geboren wordt. Daarbij let je goed op het perineum.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Na de geboorte leg je het kind op de buik van de moeder, droog je het af en houd je het warm met bijvoorbeeld een mutsje en warme doeken. Daarna bepaal je de Apgarscore na 1 en 5 minuten. Vervolgens klem je de navelstreng af en laat je de vader deze doorknippen.`}</Inline></p>
    </div>
  )
}
