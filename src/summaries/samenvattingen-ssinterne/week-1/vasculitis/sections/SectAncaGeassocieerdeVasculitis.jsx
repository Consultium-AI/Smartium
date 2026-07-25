import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ANCA-geassocieerde vasculitis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als infectie en maligniteit minder waarschijnlijk worden en het beeld past bij een systeemziekte, is ANCA-geassocieerde vasculitis een belangrijke diagnose. Bij de beschreven patiënte past dit het best.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`ANCA-geassocieerde vasculitis is een kleine-vatenvasculitis met multiorgaanbetrokkenheid. Het is zeldzaam. De incidentie ligt rond 2 tot 12 per 1.000.000 personen. De aandoening komt ongeveer even vaak voor bij mannen als bij vrouwen, meestal op middelbare leeftijd, en vooral bij mensen met een Kaukasische achtergrond.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De belangrijkste subtypen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`granulomatosis met polyangiitis (GPA, voorheen Morbus Wegener);`}</Inline></li>
        <li><Inline>{`eosinofiele granulomatosis met polyangiitis (EGPA, voorheen Churg-Strauss);`}</Inline></li>
        <li><Inline>{`microscopische polyangiitis (MPA).`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij de patiënte uit de casus past GPA het best.`}</Inline></p>
    </div>
  )
}
