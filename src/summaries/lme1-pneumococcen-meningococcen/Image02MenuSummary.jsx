import { BookOpen, BarChart3, Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = () => {
  const tableOfContents = [
    { id: 'overview', title: 'Module-overzicht', icon: BookOpen },
    { id: 'chapters', title: 'Hoofdstukken', icon: BarChart3 },
  ]

  return (
    <SummaryLayout
      title="Module-overzicht – Pneumokokken en meningokokken"
      description="Introductie tot de e-learning module over twee kritieke pathogenen in de Nederlandse gezondheidszorg."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image02"
    >
      <section id="overview" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Module-overzicht
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Welkom bij de e-learning module over <strong>pneumokokken</strong> en <strong>meningokokken</strong> – twee kritieke pathogenen die je frequent zult tegenkomen in je medische carrière.
          </p>
          
          <p>
            <strong>Streptococcus pneumoniae</strong> (pneumokok) en <strong>Neisseria meningitidis</strong> (meningokok) behoren tot de meest dodelijke bacteriën in de reguliere Nederlandse geneeskundige zorg. Beide kunnen deel uitmaken van de nasofarynxflora zonder directe klinische consequenties.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Module-inhoud</h4>
            <p className="text-primary-700 text-sm m-0">
              In deze module komen aan bod: epidemiologie, pathofysiologie, klinische presentatie en preventieve maatregelen zoals vaccinatie. Er wordt ook aandacht besteed aan <strong>petechiën</strong> – een belangrijk diagnostisch teken om te herkennen tijdens het tentamen en in de klinische praktijk.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="chapters" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Hoofdstukken
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <Stethoscope className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong>Hoofdstuk 1: Epidemiologische risicofactoren</strong>
                <p className="text-slate-600 text-sm mt-1">Surveillance, incidentie en risicogroepen voor pneumokokken- en meningokokkenziekte.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <Stethoscope className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong>Hoofdstuk 2: Klinische presentatie</strong>
                <p className="text-slate-600 text-sm mt-1">Symptomen, verwekkers en differentiaaldiagnose van meningitis en sepsis.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary
