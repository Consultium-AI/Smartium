import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus 2: van verkleuring naar bloedingsprobleem of vasculitis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de 17-jarige jongen is de verkleuring na trauma ontstaan. Omdat er ook op het andere been een paarse verkleuring zichtbaar is, wordt voor de zekerheid een vasculitis uitgesloten met een biopt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tegelijkertijd moet je denken aan een stollings- of bloedplaatjesprobleem, zeker omdat er sprake is van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`blauwe plekken;`}</Inline></li>
        <li><Inline>{`lang nabloeden na wondjes;`}</Inline></li>
        <li><Inline>{`slijmvliesbloedingen als vraagpunt in de anamnese;`}</Inline></li>
        <li><Inline>{`geen duidelijke ontstekingsziekte.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarom wordt aanvullend hematologisch onderzoek gedaan, met onder andere PT, APTT, trombocyten en von Willebrand-factorbepalingen.`}</Inline></p>
    </div>
  )
}
