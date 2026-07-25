import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 1. Hoofdgroepen van oorzaken van coma`}</Inline></SubHeading>
      <DataTable rows={[["Hoofdgroep", "Voorbeelden"], ["Metabool", "hypoglycemie, hyperglycemie, leverfalen, uremie, hypothyreoïdie"], ["Infectieus", "meningitis, encefalitis, sepsis, hersenabces"], ["Toxisch-medicamenteus", "opiaten, benzodiazepinen, alcohol, andere intoxicaties"], ["Neurologisch", "status epilepticus, bloeding, CVA, tumor, hydrocefalus, trauma"], ["Psychiatrisch", "catatonie"]]} />
    </div>
  )
}
