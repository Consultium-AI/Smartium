import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oligohydramnion en gevolgen voor de foetus`}</Inline></SubHeading>
      <PBody text={`Als de zwangerschap doorgaat, kan het vruchtwater sterk afnemen. Dan ontstaat **oligohydramnion** of zelfs **anhydramnion**.`} />
      <p className="leading-relaxed"><Inline>{`De meest waarschijnlijke oorzaak is een verminderde urineproductie door de nierproblematiek. De foetus ontwikkelt meestal geen klassiek nierfalen zoals een volwassene, omdat de placenta tijdens de zwangerschap grotendeels de bloedzuivering overneemt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Wel kunnen door weinig vruchtwater belangrijke gevolgen ontstaan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**longhypoplasie**: onderontwikkeling van de longen;`}</Inline></li>
        <li><Inline>{`**contracturen**: standsafwijkingen of verstijving van gewrichten.`}</Inline></li>
      </ul>
    </div>
  )
}
