import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze e-module moet je de volgende dingen kunnen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`De vier nieuwe antibiotica kennen die extra worden behandeld: **piperacilline-tazobactam, cefazoline, cefuroxim en ceftazidim**.`}</Inline></li>
        <li><Inline>{`Van de belangrijkste antibiotica de **indicatie, toediening, belangrijkste bijwerkingen, spectrum en opvallende bijzonderheden** kunnen noemen.`}</Inline></li>
        <li><Inline>{`De antibiotica kunnen indelen in groepen, vooral **penicillines** en **cefalosporines**.`}</Inline></li>
        <li><Inline>{`Begrijpen hoe het spectrum van cefalosporines per generatie verschilt.`}</Inline></li>
        <li><Inline>{`Antibiotica kunnen toepassen in klinische situaties, zoals bij **pneumonie**, **MRSA-profylaxe** en **hospital acquired pneumonia**.`}</Inline></li>
        <li><Inline>{`De betekenis van **antimicrobiële resistentie** begrijpen en weten waarom dit een groot probleem is voor de gezondheidszorg.`}</Inline></li>
        <li><Inline>{`Weten welke maatregelen helpen om resistentie tegen te gaan, zoals **gericht antibioticagebruik** en **antibioticateams**.`}</Inline></li>
      </ul>
    </div>
  )
}
