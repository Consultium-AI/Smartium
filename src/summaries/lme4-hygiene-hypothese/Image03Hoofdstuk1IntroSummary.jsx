import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03Hoofdstuk1IntroSummary = () => {
  const tableOfContents = [
    { id: 'vraag', title: 'Centrale vraag', icon: HelpCircle },
  ]

  return (
    <SummaryLayout
      title="Hoofdstuk 1 – Schoon of vies?"
      description="De centrale vraag van de hygiëne hypothese: is het beter heel schoon of lekker vies te leven om te voorkomen dat je ziek wordt?"
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 3"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image03"
    >
      <section id="vraag" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Centrale vraag
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Hoofdstuk 1</h4>
            <p className="text-primary-700 text-sm m-0">
              <strong>Kun je beter heel schoon of juist lekker vies leven om te voorkomen dat je ziek wordt?</strong>
            </p>
          </div>
          
          <p>
            Deze vraag vormt het uitgangspunt van de hygiëne hypothese. Het contrast tussen een schone en een vieze leefomgeving – en de gevolgen daarvan voor het immuunsysteem – staat centraal in dit hoofdstuk.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03Hoofdstuk1IntroSummary
