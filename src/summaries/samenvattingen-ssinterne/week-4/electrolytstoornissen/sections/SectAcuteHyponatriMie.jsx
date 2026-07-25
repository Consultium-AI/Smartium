import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute hyponatriëmie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Acute hyponatriëmie komt vaak voor in situaties zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`postoperatief;`}</Inline></li>
        <li><Inline>{`bij MDMA/ecstasy;`}</Inline></li>
        <li><Inline>{`bij polydipsie;`}</Inline></li>
        <li><Inline>{`bij voorbereiding op colonoscopie;`}</Inline></li>
        <li><Inline>{`na een marathon;`}</Inline></li>
        <li><Inline>{`na recente start van een thiazide;`}</Inline></li>
        <li><Inline>{`bij desmopressine;`}</Inline></li>
        <li><Inline>{`bij oxytocine;`}</Inline></li>
        <li><Inline>{`bij cyclofosfamide i.v.`}</Inline></li>
      </ul>
      <PBody text={`Bij acute hyponatriëmie kan het beeld ernstig zijn, met neurologische klachten door hersenoedeem. Een combinatie van **polydipsie en SIADH** kan hierbij een rol spelen.`} />
      <p className="leading-relaxed"><Inline>{`Bij pure polydipsie is de urine meestal sterk verdund. Als de urine-osmolaliteit toch hoger is, wijst dat erop dat er ook ADH-activiteit aanwezig is.`}</Inline></p>
    </div>
  )
}
