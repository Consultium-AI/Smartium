import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie van hand en voet`}</Inline></SubHeading>
      <PBody text={`Voor het onderscheiden van artrose en verschillende vormen van artritis is het heel belangrijk om te weten **welke gewrichten aangedaan zijn**. De verdeling over de gewrichten van handen en voeten geeft namelijk veel informatie voor de differentiaaldiagnose.`} />
    </div>
  )
}
