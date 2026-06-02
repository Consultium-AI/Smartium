import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Medicamenteuze behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`valaciclovir 3x 1000 mg gedurende 7 dagen`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`zinkzalf`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`korte prednisonkuur`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`eventueel ciclosporine`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`geen methotrexaat bij actieve zwangerschapswens`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`dupilumab als klassiek middel faalt`}</Inline></p>
    </div>
  )
}
