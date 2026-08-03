import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Digitaal platform of app`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Naast meetapparatuur is een app of platform nodig waarin de patiënt de metingen kan invoeren. In deze module wordt gewerkt met Luscii, een Nederlands platform. Belangrijk is dat zo’n platform op zichzelf nog niet het volledige zorgprogramma is. Het platform is vooral de technische basis. Als zorgverlener moet je zelf bepalen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`wat er gemeten wordt;`}</Inline></li>
        <li><Inline>{`hoe vaak dat gebeurt;`}</Inline></li>
        <li><Inline>{`welke grenswaarden gelden;`}</Inline></li>
        <li><Inline>{`welke alarmen worden ingesteld.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Soms bestaat er al een kant-en-klaar programma dat je kunt gebruiken of inkopen. Maar in andere gevallen moet je het programma zelf samenstellen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Is een app alleen genoeg?
**Mini-antwoord:** Nee. De app is slechts het middel; je moet ook bepalen wat er gemeten wordt, hoe vaak en wat je doet bij afwijkingen.`} />
    </div>
  )
}
