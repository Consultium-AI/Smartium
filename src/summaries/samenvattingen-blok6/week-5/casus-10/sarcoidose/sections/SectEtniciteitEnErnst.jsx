import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Etniciteit en ernst`}</Inline></SubHeading>
      <PBody text={`Bij **Black Americans** is het levenslange risico hoger dan bij **White Americans**. Daarnaast ontwikkelen Black Americans de ziekte gemiddeld **eerder, acuter en ernstiger**. White Americans presenteren zich vaker met een asymptomatisch of langzaam verlopend beeld.`} />
    </div>
  )
}
