import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vaststellen van een beroepsziekte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het Nederlands Centrum voor Beroepsziekten werkt met een zes-stappenplan om vast te stellen of er sprake is van een beroepsziekte. Daarbij wordt gekeken naar de diagnose, de blootstelling en de relatie tussen beide.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een beroepschauffeur met knieklachten en artrose moet je bijvoorbeeld nadenken over mogelijke andere oorzaken, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`overgewicht;`}</Inline></li>
        <li><Inline>{`etnische achtergrond;`}</Inline></li>
        <li><Inline>{`sporten;`}</Inline></li>
        <li><Inline>{`andere gewrichtsaandoeningen.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Wanneer noem je iets een beroepsziekte?**
Als de belasting in arbeid of arbeidsomstandigheden in overwegende mate heeft bijgedragen aan het ontstaan van de aandoening.`} />
    </div>
  )
}
