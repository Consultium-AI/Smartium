import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Netto bicarbonaatvorming en zuur-excretie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier doet dus twee dingen tegelijk. Ten eerste voorkomt hij dat bicarbonaat verloren gaat in de urine. Ten tweede zorgt hij ervoor dat de netto zuurbelasting die het lichaam binnenkrijgt, wordt uitgescheiden als vrij H+, NH4+ en titreerbaar zuur.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een proximale tubulaire acidose gaat dit terugwinnen van bicarbonaat fout. Dan verlies je bicarbonaat in de urine en ontstaat acidose. Normaal gesproken is de proximale tubulus dus vooral belangrijk voor het behouden van bicarbonaat, terwijl de verzamelbuis de echte netto zuuruitscheiding verzorgt.`}</Inline></p>
    </div>
  )
}
