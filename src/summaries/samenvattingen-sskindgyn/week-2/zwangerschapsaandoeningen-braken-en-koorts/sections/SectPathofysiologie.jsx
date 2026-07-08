import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pathofysiologie`}</Inline></SubHeading>
      <PBody text={`Pre-eclampsie ontstaat vooral in de **eerste zwangerschap**. De kern ligt in **lokale endotheelbeschadiging** en **placentaire ischemie**. Dat komt door onvoldoende ingroei van foetale vaten in de placenta. Daardoor ontstaan **vasoconstrictie**, **trombocytenaggregatie** en **doorbloedingsstoornissen** in organen, met weefselschade als gevolg.`} />
    </div>
  )
}
