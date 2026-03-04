import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21BehandelingVaccinsSummary = () => {
  const tableOfContents = [
    { id: 'hoofdstuk', title: 'Behandeling en vaccins', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="Hoofdstuk 4: Behandeling en preventieve vaccins"
      description="Behandeling van invasieve meningokokken- en pneumokokkeninfecties en preventieve vaccinatie."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 21"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image21"
    >
      <section id="hoofdstuk" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling en preventieve vaccins
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Dit hoofdstuk behandelt de <strong>behandeling van invasieve meningokokken- en pneumokokkeninfecties</strong> en de <strong>preventieve vaccins</strong> die beschikbaar zijn in het Rijksvaccinatieprogramma.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image21BehandelingVaccinsSummary
