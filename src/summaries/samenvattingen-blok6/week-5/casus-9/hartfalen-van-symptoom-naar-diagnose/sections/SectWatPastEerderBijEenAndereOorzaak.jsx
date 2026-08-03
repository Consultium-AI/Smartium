import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat past eerder bij een andere oorzaak?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sommige klachten lijken op hartfalen, maar passen ook goed bij andere aandoeningen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`piepende expiratie → eerder COPD of astma`}</Inline></li>
        <li><Inline>{`periorbitaal oedeem → eerder nefrotisch syndroom`}</Inline></li>
        <li><Inline>{`moeheid met bleekheid → eerder anemie`}</Inline></li>
        <li><Inline>{`oedeem met varices → eerder veneuze insufficiëntie`}</Inline></li>
        <li><Inline>{`angst met tintelingen en snelle ademhaling → eerder angst of hyperventilatie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Soms bestaan meerdere oorzaken tegelijk. Bij oudere patiënten komt dat vaak voor.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
