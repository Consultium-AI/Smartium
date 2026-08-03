import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Epidemiologie en klinische relevantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De incidentie en prevalentie verschillen sterk per regio en per type blootstelling. In sommige delen van de westerse wereld nemen bepaalde beroepsgebonden ILD’s af, terwijl ze in andere regio’s juist toenemen. Dat hangt samen met verschillen in industrie, regelgeving en arbeidsomstandigheden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij asbestose speelt mee dat de ziekte nog jarenlang kan optreden door de lange latentietijd, ook al wordt asbest in veel landen niet meer gebruikt. Daardoor zal de incidentie niet meteen verdwijnen.`}</Inline></p>
    </div>
  )
}
