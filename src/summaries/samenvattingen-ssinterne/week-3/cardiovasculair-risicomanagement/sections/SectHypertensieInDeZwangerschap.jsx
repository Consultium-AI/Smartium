import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypertensie in de zwangerschap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tijdens de zwangerschap kan sprake zijn van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`pre-existente hypertensie;`}</Inline></li>
        <li><Inline>{`hypertensie die tijdens de zwangerschap ontstaat;`}</Inline></li>
        <li><Inline>{`pre-eclampsie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Pre-eclampsie is hypertensie na 20 weken zwangerschap met proteïnurie, orgaanschade of uteroplacentaire dysfunctie. Vroege pre-eclampsie is ernstiger en hangt samen met een insufficiënt aangelegde placenta. Onbehandeld kan het leiden tot eclampsie. Ook HELLP kan optreden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vrouwen die pre-eclampsie of HELLP hebben doorgemaakt, hebben later een verhoogd risico op hart- en vaatziekten. Zwangerschap wordt daarom gezien als een soort stresstest voor het cardiovasculaire systeem.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tijdens de zwangerschap zijn methyldopa, labetalol en nifedipine veilige middelen. ACE-remmers zijn niet veilig.`}</Inline></p>
    </div>
  )
}
