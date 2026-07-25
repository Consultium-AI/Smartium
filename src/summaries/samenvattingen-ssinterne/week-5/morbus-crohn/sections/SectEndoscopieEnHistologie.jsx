import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Endoscopie en histologie`}</Inline></SubHeading>
      <PBody text={`Bij Crohn zie je vaak ontsteking in het terminale ileum en rond de valvula Bauhini. Er kunnen afteuze laesies zichtbaar zijn. De biopten laten typisch een **focale inflammatie** zien, soms met **granulomen**. Dat past bij de diagnose Morbus Crohn.`} />
      <PBody text={`De ziekte kan volgens de **Montreal-classificatie** worden getypeerd. In de casus had de patiënte subtype **A2L1B1**. Dat betekent dat de ziekte op volwassen leeftijd begon, gelokaliseerd is in het terminale ileum en geen penetrerende of stenoserende complicaties had op dat moment.`} />
    </div>
  )
}
