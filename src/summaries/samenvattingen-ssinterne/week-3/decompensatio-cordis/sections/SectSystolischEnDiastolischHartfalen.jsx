import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systolisch en diastolisch hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen wordt ook ingedeeld in systolisch en diastolisch hartfalen.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Systolisch hartfalen**: het hart knijpt minder krachtig samen. De ejectiefractie is verlaagd. Je kunt dit zien als een “slap hart”.`}</Inline></li>
        <li><Inline>{`**Diastolisch hartfalen**: het hart is stijf en vult zich minder goed, terwijl de pompfunctie op zich nog bewaard kan zijn. Het probleem zit dan vooral in de vulling.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze indeling is belangrijk, omdat de behandeling niet voor elke vorm even goed werkt.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** wat is het belangrijkste verschil tussen systolisch en diastolisch hartfalen?
**Mini-antwoord:** bij systolisch hartfalen is de pompkracht verminderd, bij diastolisch hartfalen is vooral de vulling gestoord.`} />
    </div>
  )
}
