import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Relatie van trachea, oesophagus en zenuwen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In een dwarse doorsnede ligt de oesophagus direct dorsaal van de trachea. Ventraal van de trachea ligt deels de schildklier. Langs de trachea en oesophagus loopt ook een belangrijke zenuw: de rechter nervus laryngeus recurrens. Deze is een tak van de nervus vagus en stijgt vanuit de thorax langs de trachea omhoog. De nervus laryngeus recurrens verzorgt de motorische en sensibele innervatie van een deel van de larynx.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De nervus vagus daalt in de hals af langs de arteria carotis communis. Zo zie je dat de luchtweg, slokdarm, grote vaten en zenuwen in de hals en thorax nauw met elkaar samenhangen.`}</Inline></p>
    </div>
  )
}
