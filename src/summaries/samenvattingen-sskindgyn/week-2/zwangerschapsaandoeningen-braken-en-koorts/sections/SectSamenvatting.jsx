import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hyperemesis gravidarum herken je aan hardnekkig braken met gewichtsverlies, dehydratie en ketonurie. Pre-eclampsie herken je aan hypertensie in de tweede helft van de zwangerschap, meestal met proteïnurie, en HELLP aan hemolyse, verhoogde leverenzymen en lage trombocyten. Koorts in de zwangerschap heeft een brede differentiaaldiagnose en kan belangrijke gevolgen hebben voor moeder en kind. Bij alle drie de thema’s geldt: denk gericht, onderzoek zorgvuldig en beoordeel steeds wat de gevolgen zijn voor de zwangerschap en de foetus.`}</Inline></p>
    </div>
  )
}
