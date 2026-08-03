import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`1. Hemodynamiek en bloeddrukregulatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je kunt de basisprincipes van hemodynamiek uitleggen: de relatie tussen druk, flow en weerstand. Ook kun je beschrijven hoe de bloeddruk wordt gereguleerd, zowel snel als op langere termijn.`}</Inline></p>
    </div>
  )
}
