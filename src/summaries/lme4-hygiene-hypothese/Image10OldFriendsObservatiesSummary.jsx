import { FileText } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10OldFriendsObservatiesSummary = () => {
  const tableOfContents = [
    { id: 'observaties', title: 'Observaties', icon: FileText },
    { id: 'oldfriends', title: "Old friends-hypothese", icon: FileText },
  ]

  return (
    <SummaryLayout
      title="Old friends – Observaties en hypothese"
      description="Observaties die het Th1/Th2-dogma tegenspreken en de Old friends-hypothese."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image10"
    >
      <section id="observaties" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Observaties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Er zijn observaties die het dogma van een verstoorde Th1/Th2-balans en geassocieerde allergische aandoeningen tegenspreken:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Parasitaire infecties in Afrika:</strong> Parasitaire infecties leiden tot Th2-skewing van het immuunsysteem, maar allergieën komen daar minder vaak voor.</li>
            <li><strong>Auto-immuunziekten:</strong> Vaak geassocieerd met verhoogde Th1-activiteit – ook verklaard door de hygiënehypothese.</li>
            <li><strong>Virale infecties:</strong> Virale infecties (mazelen, luchtweginfecties) lijken niet beschermend tegen allergie; ze kunnen het risico zelfs verhogen.</li>
          </ul>
        </div>
      </section>

      <section id="oldfriends" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Old friends-hypothese
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De <strong>Old friends-hypothese</strong> en de <strong>Biodiversiteits-hypothese</strong> zijn recenter geformuleerd.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-primary-700 text-sm m-0">
              De Old friends-hypothese stelt dat de mens als soort evolutionair is mee-geëvolueerd met een gebalanceerd darmmicrobioom, inclusief parasitaire wormen (helminthen). Deze co-evolutie resulteerde in een gebalanceerd immuunsysteem. De uitroeiing van deze parasitaire wormen in de westerse wereld zou een mogelijke verklaring kunnen zijn voor de onbalans in ons immuunsysteem.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image10OldFriendsObservatiesSummary
