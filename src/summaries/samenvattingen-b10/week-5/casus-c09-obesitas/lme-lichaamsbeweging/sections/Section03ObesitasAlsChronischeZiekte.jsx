import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Obesitas als chronische ziekte`}</Inline></h3>
      <p><Inline>{`Obesitas is niet alleen “te veel gewicht”, maar een chronische, progressieve ziekte van het vetweefsel. Daarbij is er sprake van lichaamsbrede endocriene, metabole en immunologische ontregeling. Dat maakt obesitas lastig te behandelen en kan leiden tot uiteenlopende comorbiditeiten, van leververvetting tot kanker.`}</Inline></p>
      <PBody text={`Aandachtsvraag: Waarom is dit belangrijk voor de praktijk?  
Kort antwoord: Omdat obesitas een ziekte is die je actief moet meenemen in je gesprek en beleid, en niet alleen als leefstijlprobleem moet zien.`} />
    </div>
  )
}
