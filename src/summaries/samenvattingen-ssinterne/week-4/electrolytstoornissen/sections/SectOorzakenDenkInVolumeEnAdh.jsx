import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken: denk in volume en ADH`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hyponatriëmie kan worden veroorzaakt door verschillende situaties. Een handig begin is kijken naar de balans tussen natrium en water.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Scenario’s kunnen passen bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**hartfalen**: hypervolemische hyponatriëmie;`}</Inline></li>
        <li><Inline>{`**SIADH**: euvolemische hyponatriëmie;`}</Inline></li>
        <li><Inline>{`**diarree**: hypovolemische hyponatriëmie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij de meeste patiënten met hyponatriëmie is ADH aantoonbaar of actief. Dat kan op vier manieren gebeuren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verlaagd intravasculair volume, waardoor baroreceptoren ADH-afgifte stimuleren;`}</Inline></li>
        <li><Inline>{`non-osmotische stimulatie van osmoreceptoren;`}</Inline></li>
        <li><Inline>{`ectopische ADH-productie, bijvoorbeeld bij kleincellig longcarcinoom;`}</Inline></li>
        <li><Inline>{`nefrogene antidiurese, waarbij de nier als het ware blijft reageren alsof ADH aanwezig is.`}</Inline></li>
      </ul>
    </div>
  )
}
