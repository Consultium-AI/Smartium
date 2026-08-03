import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Radiologische beeldvorming begint met goed oriënteren in de anatomische vlakken en richtingstermen. Daarna kun je technieken als röntgen, CT, MRI en echografie beter begrijpen en vergelijken. Röntgen is snel en eenvoudig, CT geeft veel detail en is geschikt voor acute situaties, MRI biedt uitstekend weke delen contrast zonder straling, en echografie is real-time, veilig en breed inzetbaar. In de kliniek kies je de techniek die het best past bij de vraagstelling, de patiënt en de praktische situatie.`}</Inline></p>
    </div>
  )
}
