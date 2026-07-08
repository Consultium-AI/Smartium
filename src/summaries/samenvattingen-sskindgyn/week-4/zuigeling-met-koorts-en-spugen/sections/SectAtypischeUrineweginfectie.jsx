import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Atypische urineweginfectie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als een kind na 48 uur antibiotische behandeling onvoldoende opknapt, of als er sprake is van een verhoogd serumcreatinine, dan past dat bij een atypische urineweginfectie. Andere kenmerken van een atypische UWI zijn onder meer:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ernstig ziek zijn;`}</Inline></li>
        <li><Inline>{`sepsis;`}</Inline></li>
        <li><Inline>{`slechte urinestraal;`}</Inline></li>
        <li><Inline>{`buik- of blaasmassa;`}</Inline></li>
        <li><Inline>{`verhoogd creatinine;`}</Inline></li>
        <li><Inline>{`geen respons binnen 48 uur op antibiotica;`}</Inline></li>
        <li><Inline>{`infectie met andere micro-organismen dan E. coli.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een atypische UWI kan veroorzaakt worden door anatomische afwijkingen van de urinewegen, zoals reflux, kleppen of een UPJ-stenose. Daarom is in de acute fase een echo van de urinewegen aangewezen.`}</Inline></p>
    </div>
  )
}
