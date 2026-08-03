import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Invloed van toedieningsvormen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De farmacokinetiek kan verschillen per toedieningsvorm van hetzelfde middel.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Intraveneus**: direct in de bloedsomloop, snelste manier om een hoge bloedconcentratie te bereiken.`}</Inline></li>
        <li><Inline>{`**Intramusculair of subcutaan**: moet eerst nog worden opgenomen vanuit de weefsels.`}</Inline></li>
        <li><Inline>{`**Oraal**: moet eerst door maag en darm heen en kan last hebben van het first-pass effect.`}</Inline></li>
        <li><Inline>{`**Rectaal**: de actieve stof moet eerst vrijkomen uit de toedieningsvorm.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De toedieningsvorm beïnvloedt dus zowel de opname als de uiteindelijke bloedspiegel.`}</Inline></p>
      <SubHeading><Inline>{`Klinisch voorbeeld`}</Inline></SubHeading>
      <PBody text={`Bij een ernstige infectie, zoals sepsis, wil je een antibioticum zo snel mogelijk en in zo hoog mogelijke concentratie in het bloed krijgen. Daarom is **intraveneuze toediening** dan het meest geschikt.`} />
      <PBody text={`Bij een urineweginfectie is het juist logisch om te denken aan een **hydrofiel** antibioticum, omdat de urine in de blaas een waterig milieu is.`} />
    </div>
  )
}
