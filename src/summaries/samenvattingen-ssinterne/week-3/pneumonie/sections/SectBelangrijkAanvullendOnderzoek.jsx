import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijk aanvullend onderzoek`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Doel"], ["CRP", "Mate van ontsteking"], ["Leukocyten + differentiatie", "Infectie en type ontstekingsreactie"], ["Ureum/kreatinine", "Uitdroging en nierfunctie"], ["Urine legionella-antigeen", "Opsporen van Legionella"], ["Urine pneumococcen-antigeen", "Opsporen van pneumokokken"], ["Bloedkweek", "Bacteriëmie aantonen"], ["Keelwat", "Virale diagnostiek"], ["Sputum", "Gramkleuring en kweek"]]} />
    </div>
  )
}
