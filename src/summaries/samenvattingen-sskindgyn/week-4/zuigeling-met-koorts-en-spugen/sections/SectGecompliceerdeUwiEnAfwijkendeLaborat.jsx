import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gecompliceerde UWI en afwijkende laboratoriumwaarden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als de urinekweek positief is en er daarnaast afwijkingen zijn in het bloed, kan er sprake zijn van een gecompliceerde urineweginfectie. Denk dan aan hyponatriëmie, een licht verhoogd kalium, metabole acidose en een verhoogd creatinine.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Deze afwijkingen kunnen passen bij een septisch ziek kind, maar kunnen ook wijzen op een pseudohypoaldosteronisme. Een verhoogd creatinine wijst op nierinsufficiëntie, die acuut kan zijn door de infectie of chronisch door een bestaande nierafwijking.`}</Inline></p>
    </div>
  )
}
