import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beleid bij niet-vorderende baring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een niet-vorderende baring zijn er twee belangrijke interventies: oxytocine i.v. en een sectio caesarea. Welke keuze passend is, hangt af van de oorzaak.`}</Inline></p>
      <DataTable rows={[["Tabel 3. Oorzaken van niet-vorderende baring en beleid"], ["Onvoldoende krachtige weeën", "Oxytocine i.v."], ["Afwijkende stand van het presenterende foetale deel", "Oxytocine i.v."], ["Afwijkingen in het maternale bekken", "Sectio caesarea"], ["Afwijkingen in de uterus", "Sectio caesarea"]]} />
      <p className="leading-relaxed"><Inline>{`Daarnaast moet je altijd denken aan de foetale conditie. Tijdens de baring kan foetale asfyxie optreden. Daarom bewaak je de foetus met een CTG of doptone registratie.`}</Inline></p>
    </div>
  )
}
