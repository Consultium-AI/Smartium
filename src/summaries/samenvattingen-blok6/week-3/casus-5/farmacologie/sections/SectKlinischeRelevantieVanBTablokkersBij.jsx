import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische relevantie van bètablokkers bij hartfalen`}</Inline></SubHeading>
      <PBody text={`In de module wordt ook verwezen naar **bètablokkers in CHF**. CHF staat voor **congestive heart failure**, oftewel hartfalen. De module koppelt de kennis over bètablokkers dus aan een klinische context waarin deze middelen relevant zijn.`} />
      <p className="leading-relaxed"><Inline>{`De kern blijft dat je moet begrijpen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`welke bètablokker selectief is,`}</Inline></li>
        <li><Inline>{`welke aselectief is,`}</Inline></li>
        <li><Inline>{`en hoe farmacokinetiek en farmacodynamiek samen de keuze van een middel beïnvloeden.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
