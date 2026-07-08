import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kanttekeningen bij behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij vruchtbaarheidsbehandeling spelen niet alleen medische, maar ook ethische en sociale factoren een rol. Denk aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`erfelijke ziekten;`}</Inline></li>
        <li><Inline>{`chromosoomafwijkingen in de familie;`}</Inline></li>
        <li><Inline>{`andere familiale aandoeningen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast kijk je ook naar psychosociale factoren die relevant kunnen zijn voor een toekomstig kind, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`psychiatrische voorgeschiedenis;`}</Inline></li>
        <li><Inline>{`verslavingsproblematiek;`}</Inline></li>
        <li><Inline>{`uithuisplaatsingen;`}</Inline></li>
        <li><Inline>{`zwakbegaafdheid;`}</Inline></li>
        <li><Inline>{`veroordelingen voor geweldsdelicten of kindermishandeling.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als zorgverlener weeg je de psychische draagkracht van het paar en de medische zinvolheid van een behandeling af. De kans op zwangerschap moet in verhouding staan tot de belasting en risico’s van de behandeling.`}</Inline></p>
    </div>
  )
}
