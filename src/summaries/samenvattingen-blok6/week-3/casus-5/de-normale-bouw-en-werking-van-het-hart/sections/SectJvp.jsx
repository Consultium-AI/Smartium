import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`JVP`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De jugulaire veneuze puls is de zichtbare pulsatie van de vena jugularis interna. Omdat er geen kleppen zijn tussen deze vene en het rechteratrium, weerspiegelt de JVP de drukveranderingen in het rechteratrium.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De normale golven zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**a-golf:** atriale contractie`}</Inline></li>
        <li><Inline>{`**c-golf:** uitpuilen van de tricuspidalisklep tijdens isovolumetrische contractie`}</Inline></li>
        <li><Inline>{`**v-golf:** veneuze vulling van het rechteratrium terwijl de tricuspidalisklep gesloten is`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De dalen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**x-descent:** atriale relaxatie en naar beneden trekken van de klepring`}</Inline></li>
        <li><Inline>{`**y-descent:** openen van de tricuspidalisklep en snelle vulling van de rechterkamer`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
