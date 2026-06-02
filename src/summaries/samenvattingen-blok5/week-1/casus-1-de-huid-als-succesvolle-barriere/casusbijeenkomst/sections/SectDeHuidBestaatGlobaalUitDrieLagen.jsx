import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De huid bestaat globaal uit drie lagen:`}</Inline></SubHeading>
      <DataTable rows={[["Laag", "Belangrijkste kenmerken"], ["---", "---"], ["Epidermis", "Buitenste laag; vormt de belangrijkste barrière"], ["Dermis", "Ondersteunende laag met bloedvaten, zenuwen en huidstructuren"], ["Subcutis / hypodermis", "Diepere laag met vooral vetweefsel"]]} />
      <p className="leading-relaxed"><Inline>{`In de huid vind je daarnaast haren, haarfollikels, zweetklieren, talgklieren, bloedvaatjes en zenuwen. Ook de arrector pili-spier hoort bij de haarfollikel.`}</Inline></p>
    </div>
  )
}
