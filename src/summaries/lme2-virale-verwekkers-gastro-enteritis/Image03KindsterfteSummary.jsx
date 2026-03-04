import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03KindsterfteSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'sterfte', title: 'Oorzaken kindsterfte gastro-enteritis', icon: AlertTriangle },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Oorzaken van kindsterfte door gastro-enteritis"
      description="Wereldwijde ziektelast, virale verwekkers en preventieve maatregelen."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 3"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image03"
    >
      <section id="sterfte" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Oorzaken kindsterfte door gastro-enteritis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Wereldwijd sterven naar schatting 580.000 kinderen onder de vijf jaar per jaar aan diarree. Virale pathogenen vormen een substantieel deel van de verwekkers.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Virale verwekkers (aantallen)</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Rotavirus: 210.000 (35,7%) – belangrijkste virale oorzaak</li>
              <li>Adenovirus: 37.000 (6,3%)</li>
              <li>Norovirus: 36.000 (6,2%)</li>
              <li>Sapovirus: 23.000 (3,9%)</li>
              <li>Astrovirus: 17.000 (3,0%)</li>
            </ul>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Risicofactoren</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>Onveilig drinkwater</li>
              <li>Slechte sanitaire voorzieningen</li>
              <li>Ondervoeding</li>
            </ul>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Preventie en interventie</h4>
            <ul className="list-disc pl-6 space-y-1 text-rose-700 text-sm">
              <li>Toegang tot orale rehydratieoplossing (ORS)</li>
              <li>Therapeutisch zink</li>
              <li>Rotavirusvaccin</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03KindsterfteSummary
