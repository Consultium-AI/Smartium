import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijke klinische aandachtspunten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hyponatriëmie kan het eerste teken zijn van onderliggend lijden. Denk daarom altijd aan een onderliggende oorzaak, zoals medicatiegebruik of een tumor.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij thiazide-geïnduceerde hyponatriëmie is de diepste hyponatriëmie meestal chronisch. De oorzaak is vaak een combinatie van polydipsie en waterretentie, niet simpelweg hypovolemie. Ook hier geldt: corrigeer langzaam en bewaak de limiet van 8 tot 10 mmol/l per dag.`}</Inline></p>
    </div>
  )
}
