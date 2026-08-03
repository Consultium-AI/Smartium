import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Deze module laat zien dat medische handelingen altijd samenhangen met een bepaald **denkkader**. De vijf denkkaders van de uitgebreide Jewson-these zijn:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Bedside medicine**: de patiënt als persoon, ziekte als holistische verstoring;`}</Inline></li>
        <li><Inline>{`**Hospital medicine**: de patiënt als geval, ziekte als anatomische laesie;`}</Inline></li>
        <li><Inline>{`**Laboratory medicine**: de patiënt als cellencomplex, ziekte als fysiologisch proces;`}</Inline></li>
        <li><Inline>{`**Surveillance medicine**: de patiënt als risicoprofiel, ziekte als statistische afwijking;`}</Inline></li>
        <li><Inline>{`**E-scaped / informational medicine**: de patiënt als databron, ziekte als gepersonaliseerd risicoprobleem.`}</Inline></li>
      </ul>
      <PBody text={`De geschiedenis van **hartfalen** en **hypertensie** laat goed zien hoe deze denkkaders het medische denken sturen. Ze bepalen wat artsen zien, hoe ze diagnostiek doen en hoe ze ziekte afbakenen. Daardoor helpen denkkaders om medische ontwikkelingen historisch te begrijpen én om medische argumentaties in hun context te lezen.`} />
    </div>
  )
}
