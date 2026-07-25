import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe zuurstof in het bloed wordt vervoerd`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zuurstof lost maar heel beperkt op in bloed. Volgens de wet van Henry is de hoeveelheid gas die in een vloeistof oplost recht evenredig met de druk van dat gas. Voor zuurstof is de oplosbaarheid echter klein: bij 100 mmHg zuurstofdruk lost slechts ongeveer 0,31 ml O2 per 100 ml bloed op. Koolstofdioxide is veel beter oplosbaar.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarom is opgelost zuurstof alleen niet genoeg om het lichaam van voldoende zuurstof te voorzien. Het grootste deel van het zuurstoftransport gebeurt via hemoglobine in de erytrocyten.`}</Inline></p>
    </div>
  )
}
