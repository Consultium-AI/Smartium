import { FileText } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04Definities2016Summary = () => {
  const toc = [{ id: 'definities', title: 'Sepsis 2016 consensus definities', icon: FileText }]
  return (
    <SummaryLayout
      title="Sepsis en septische shock – 2016 consensus definities"
      description="Klinische criteria voor sepsis: infectie + SOFA-score."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image04"
    >
      <section id="definities" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Sepsis 2016 consensus</h2>
        <p className="text-slate-700 mb-4">Sepsis wordt gedefinieerd als: <strong>verdenking of bevestigde infectie</strong> gecombineerd met een <strong>acute verandering van de SOFA-score ≥ 2 punten</strong>.</p>
        <h3 className="font-bold text-slate-800 mb-2">SOFA-score componenten</h3>
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li>PaO2/FiO2 (respiratie)</li>
          <li>Hypotensie of vasopressoren (cardiovasculair)</li>
          <li>Glasgow Coma Scale (neurologie)</li>
          <li>Bilirubine (lever)</li>
          <li>Trombocyten (stolling)</li>
          <li>Creatinine of oligurie (nier)</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image04Definities2016Summary
