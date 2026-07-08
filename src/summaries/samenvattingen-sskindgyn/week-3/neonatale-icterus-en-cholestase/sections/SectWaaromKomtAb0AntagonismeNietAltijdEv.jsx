import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom komt AB0-antagonisme niet altijd even sterk tot uiting?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn factoren die de kans op hemolyse beïnvloeden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ras;`}</Inline></li>
        <li><Inline>{`immunisatie van de moeder;`}</Inline></li>
        <li><Inline>{`antigeniteit van A- en B-antigenen in de voeding van de moeder;`}</Inline></li>
        <li><Inline>{`de hoeveelheid A- en B-antigenen op de foetale erytrocyt is lager dan bij volwassenen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarom is AB0-antagonisme bij prematuren onder 30 weken zeldzaam. Ook is er bij AB0-antagonisme geen complementactivatie, in tegenstelling tot rhesusantagonisme. Dat verklaart waarom de hemolyse meestal minder heftig is.`}</Inline></p>
    </div>
  )
}
