import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Verschil in één oogopslag`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Irritatief contacteczeem", "Allergisch contacteczeem"], ["---", "---", "---"], ["Oorzaak", "Directe schade door irriterende stof", "Allergische immuunreactie"], ["Sensibilisatie nodig?", "Nee", "Ja"], ["Belangrijk mechanisme", "Toxische schade, barrièreverstoring", "Type IV-hypersensitiviteit"], ["Belangrijke cellen/signalen", "Keratinocyten, IL-1α, IL-1β", "Langerhanscellen, Th1/Th17"]]} />
    </div>
  )
}
