import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pleura en pleuraholte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De binnenkant van de thoraxwand is grotendeels bekleed met de pleura parietalis. Deze wordt onderverdeeld in pleura costalis, pleura mediastinalis en pleura diaphragmatica. De longen zelf zijn bekleed met de pleura visceralis. Tussen beide bladen ligt een dun laagje vloeistof. Daardoor kunnen de vliezen niet uit elkaar wijken, maar wel soepel langs elkaar bewegen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de pleura parietalis en visceralis deels vergroeid zijn, blijft de ademhalingsfunctie grotendeels intact. Bij een recidiverende pneumothorax kunnen beide pleurabladen kunstmatig aan elkaar worden verkleefd. Dat heet pleurodese. Zo kan de long niet opnieuw samenvallen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De longen vullen niet de hele pleuraholte, ook niet tijdens inspiratie. Onder de onderrand van de longen ligt de recessus costodiafragmaticus. Daar hoopt vocht zich vaak als eerste op.`}</Inline></p>
    </div>
  )
}
