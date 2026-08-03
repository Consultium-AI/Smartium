import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek bij IPF`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bloedonderzoek laat geen auto-antistoffen zien. Longfunctieonderzoek toont een restrictief patroon met verlaagde FVC en verlaagde DLCO. HRCT laat fibrose zien in een UIP-patroon, met reticulaire afwijkingen, honeycombing en traction bronchiectasis.`}</Inline></p>
    </div>
  )
}
