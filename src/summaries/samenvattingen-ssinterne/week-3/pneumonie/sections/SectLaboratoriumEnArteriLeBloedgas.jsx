import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Laboratorium en arteriële bloedgas`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij deze patiënt zijn de ontstekingswaarden sterk verhoogd: CRP en leukocyten zijn hoog, met veel staafkernige granulocyten. Dat past bij een forse infectie. Ook zijn er aanwijzingen voor ziekte-ernst en orgaanbelasting: het ureum is verhoogd, de kreatinine is licht verhoogd en er zijn afwijkingen in leverenzymen en bloedbeeld.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De arteriële bloedgas laat een acidose zien met een lage pH, een lage pCO2 en een verlaagde pO2. Dat betekent dat de patiënt respiratoir en metabool ontregeld is en onvoldoende geoxygeneerd wordt. Dit past bij een ernstig ziek beeld.`}</Inline></p>
    </div>
  )
}
