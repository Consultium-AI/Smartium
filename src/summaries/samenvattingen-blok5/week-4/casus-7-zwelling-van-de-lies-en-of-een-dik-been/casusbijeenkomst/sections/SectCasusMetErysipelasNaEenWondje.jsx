import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus met erysipelas na een wondje`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In een andere variant is er een week eerder een wondje ontstaan tijdens het scheren. Daarna ontstaat een rood, glanzend, strakgespannen en scherp begrensd gebied in de oksel en bovenarm. Dat gebied is warm en pijnlijk, maar er is geen harde massa voelbaar.`}</Inline></p>
    </div>
  )
}
