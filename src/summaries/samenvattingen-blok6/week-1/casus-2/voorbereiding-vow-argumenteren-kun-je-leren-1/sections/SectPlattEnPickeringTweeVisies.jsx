import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Platt en Pickering: twee visies`}</Inline></SubHeading>
      <PBody text={`Robert Platt zag essentiële hypertensie als een **specifieke ziekte**. Volgens hem bestond er een aparte groep mensen, de hypertensieven, die een eigen aanleg hadden. George White Pickering zag hypertensie juist als een **kwantitatieve afwijking** binnen een normale verdeling van bloeddrukwaarden.`} />
      <p className="leading-relaxed"><Inline>{`Dat verschil is belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij Platt is hypertensie iets wat je **hebt of niet hebt**;`}</Inline></li>
        <li><Inline>{`bij Pickering is het een **continuüm** van waarden.`}</Inline></li>
      </ul>
      <PBody text={`Pickering onderzocht ogenschijnlijk gezonde mensen en vond geen duidelijke scheiding tussen twee groepen. Voor hem was hypertensie een ziekte van **graad, niet van soort**.`} />
    </div>
  )
}
