import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vroege detectie en biochemische markers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het zou ideaal zijn als zwangerschappen met een verhoogde kans op FGR vroeg herkend konden worden. Er zijn veel risicofactoren bekend, maar er is geen zinvolle biochemische marker voor routinematige opsporing van FGR in het eerste trimester.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Onder andere de volgende markers blijken geen betrouwbare voorspellers:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hCG;`}</Inline></li>
        <li><Inline>{`estradiol;`}</Inline></li>
        <li><Inline>{`inhibin A;`}</Inline></li>
        <li><Inline>{`PAPP-A;`}</Inline></li>
        <li><Inline>{`AFP;`}</Inline></li>
        <li><Inline>{`PlGF.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`PlGF lijkt het meest veelbelovend, maar de klinische relevantie is nog onvoldoende duidelijk. Routinematig biochemisch screenen op FGR is daarom niet zinvol.`}</Inline></p>
    </div>
  )
}
