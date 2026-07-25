import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diabeteszorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Diabeteszorg is multidisciplinair. De patiënt zelf speelt een centrale rol, maar daarnaast zijn vaak betrokken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`huisarts`}</Inline></li>
        <li><Inline>{`diabetesverpleegkundige of praktijkondersteuner`}</Inline></li>
        <li><Inline>{`diëtist`}</Inline></li>
        <li><Inline>{`oogarts, meestal jaarlijks`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Op indicatie kunnen ook een pedicure of podotherapeut, psycholoog en seksuoloog betrokken zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een insulinepomp, oftewel continue subcutane insuline-infusie, kan zinvol zijn bij onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`dawn-fenomeen`}</Inline></li>
        <li><Inline>{`pijnlijke neuropathie`}</Inline></li>
        <li><Inline>{`brittle diabetes`}</Inline></li>
        <li><Inline>{`zwangerschap`}</Inline></li>
        <li><Inline>{`diabetische voet`}</Inline></li>
      </ul>
    </div>
  )
}
