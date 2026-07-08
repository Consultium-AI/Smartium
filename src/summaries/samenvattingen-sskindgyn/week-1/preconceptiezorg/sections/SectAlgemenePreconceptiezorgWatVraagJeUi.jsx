import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Algemene preconceptiezorg: wat vraag je uit?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij algemene preconceptiezorg begin je met een brede anamnese. In Nederland wordt daarbij gebruikgemaakt van de Preconceptie Indicatie Lijst, afgekort PIL. Dit is een lijst met multidisciplinaire samenwerkingsafspraken die helpt om systematisch risico’s te inventariseren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij de anamnese wil je in elk geval weten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de algemene voorgeschiedenis, zoals ziekten, operaties, allergieën, bloedtransfusies en familieanamnese;`}</Inline></li>
        <li><Inline>{`medicatiegebruik;`}</Inline></li>
        <li><Inline>{`obstetrische voorgeschiedenis, zoals miskramen, vroeggeboorte of foetale groeirestrictie;`}</Inline></li>
        <li><Inline>{`erfelijke aandoeningen;`}</Inline></li>
        <li><Inline>{`arbeidsomstandigheden;`}</Inline></li>
        <li><Inline>{`infectierisico’s;`}</Inline></li>
        <li><Inline>{`leefstijlfactoren, zoals roken, alcohol, drugs, voeding en foliumzuurgebruik.`}</Inline></li>
      </ul>
      <PBody text={`**Aandacht-vraagje:** waarom is dit zo breed?
Omdat risico’s uit heel verschillende hoeken kunnen komen: uit de gezondheid van de vrouw, de partner, medicatie, erfelijkheid of leefstijl.`} />
    </div>
  )
}
