import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Innervatie van het hart`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De hartfunctie wordt beïnvloed door zowel het parasympathische als het sympathische zenuwstelsel. De parasympathische innervatie verloopt via de nervus vagus vanuit de hersenstam naar de plexus cardiacus. Deze plexus ligt rond de aortaboog en de truncus pulmonalis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De sympathische innervatie komt vanuit het thoracale ruggenmerg en loopt via sympathische ganglia in de sympathische grensstreng naar het hart. Zo kan het autonome zenuwstelsel de hartfunctie beïnvloeden.`}</Inline></p>
    </div>
  )
}
