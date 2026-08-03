import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom geeft dit cyanose?`}</Inline></SubHeading>
      <PBody text={`Door de pulmonalisstenose kan bloed minder goed naar de longen stromen om zuurstof op te nemen. Daarnaast kan door de hoge rechterventrikeldruk via het VSD een **rechts-naar-links shunt** ontstaan. Daardoor komt zuurstofarm bloed in de systemische circulatie terecht en ontstaat **cyanose**.`} />
    </div>
  )
}
