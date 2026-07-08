import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systole en diastole herkennen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartgeruisen kunnen systolisch of diastolisch zijn. Om dat goed te beoordelen, moet je weten waar systole en diastole liggen. Het systolische interval ligt tussen de 1e en 2e harttoon. De tijd tussen de 1e en 2e harttoon is korter dan de tijd tussen de 2e en de volgende 1e harttoon. Ook moet je weten waar de harttonen het luidst gehoord worden, zodat je het geruis in de juiste fase plaatst.`}</Inline></p>
    </div>
  )
}
