import { Video } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04VideoAchtergrondSummary = () => {
  const tableOfContents = [
    { id: 'video', title: 'Video achtergrond', icon: Video },
    { id: 'microben', title: 'Blootstelling aan microben', icon: Video },
  ]

  return (
    <SummaryLayout
      title="Achtergrond hygiëne hypothese"
      description="Video van de Universiteit van Nederland en de rol van vroege blootstelling aan de microbiële wereld."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 4"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image04"
    >
      <section id="video" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Video className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Video achtergrond
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Voor de achtergrond van de hygiëne hypothese wordt verwezen naar een video van de Universiteit van Nederland over de vraag: &quot;Kun je beter heel schoon of juist lekker vies leven om te voorkomen dat je ziek wordt?&quot;
          </p>
        </div>
      </section>

      <section id="microben" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Video className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Blootstelling aan microben
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Een illustratie toont een baby omringd door diverse micro-organismen (bacteriën, virussen). Dit beeld symboliseert het concept van vroege blootstelling aan de microbiële wereld, wat centraal staat in de hygiëne hypothese.
          </p>
          
          <p className="text-slate-600 text-sm">
            Bron afbeelding: Harvard Medical School – Hygiene Hypothesis Gets Gut Check
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04VideoAchtergrondSummary
