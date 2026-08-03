import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Toepassingen van CT`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`CT is belangrijk in veel klinische situaties, bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**traumadiagnostiek**: snel overzicht van inwendige verwondingen;`}</Inline></li>
        <li><Inline>{`**oncologie**: detectie, stadiëring en follow-up van tumoren;`}</Inline></li>
        <li><Inline>{`**neurologie**: beoordeling van bloedingen, infarcten en tumoren;`}</Inline></li>
        <li><Inline>{`**longziekten**: gedetailleerde beoordeling van longweefsel en luchtwegen;`}</Inline></li>
        <li><Inline>{`**vaatonderzoek**: met contrast kunnen vaten zichtbaar worden gemaakt, bijvoorbeeld bij longembolie of stenosen.`}</Inline></li>
      </ul>
    </div>
  )
}
