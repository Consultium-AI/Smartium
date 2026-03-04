import { TestTube } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13DiagnostiekSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'diag', title: 'Diagnostiek virale gastro-enteritis', icon: TestTube },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Diagnostiek virale gastro-enteritis"
      description="Moleculaire detectie en multiplex assays voor virale verwekkers."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 13"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image13"
    >
      <section id="diag" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <TestTube className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek virale gastro-enteritis
          </h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Voor detectie van virale gastro-enteritis verwekkers wordt moleculaire diagnostiek gebruikt.
          </p>
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">NAAT / PCR</h4>
            <p className="text-teal-700 text-sm m-0">
              Nucleic Acid Amplification Tests (NAAT), waaronder PCR, zijn de gouden standaard. Ze zijn gevoelig en specifiek en kunnen meerdere verwekkers tegelijk detecteren.
            </p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Multiplex assay</h4>
            <p className="text-amber-700 text-sm m-0">
              Een multiplex assay kan in een test rotavirus, norovirus, adenovirus en astrovirus detecteren. Dit is efficiënt bij patienten met diarree waarbij de oorzaak nog onbekend is.
            </p>
          </div>
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Materiaal</h4>
            <p className="text-rose-700 text-sm m-0">
              Faeces is het aangewezen materiaal. Het monster moet vers worden afgenomen of adequaat bewaard.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image13DiagnostiekSummary
