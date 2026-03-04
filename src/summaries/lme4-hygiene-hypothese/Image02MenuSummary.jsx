import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Module-overzicht', icon: LayoutList },
  ]

  return (
    <SummaryLayout
      title="Menu – Hygiëne hypothese"
      description="Inleiding op de module: toenemende allergieën en auto-immuunziekten, en het belang van contact met de microbiële wereld."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image02"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <LayoutList className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Module-overzicht
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Sinds halverwege de 20e eeuw neemt het aantal mensen met allergieën en auto-immuunziekten explosief toe. Hoe komt dat?
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Kernboodschap</h4>
            <p className="text-primary-700 text-sm m-0">
              In deze e-module wordt duidelijk hoe belangrijk de ontwikkeling van een goed functionerend immuunsysteem samenhangt met ons contact met de microbiële wereld buiten en binnen ons lichaam.
            </p>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-1">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">1.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Hoofdstuk 1</h4>
                <p className="text-slate-600 text-sm">Kun je beter heel schoon of juist lekker vies leven om te voorkomen dat je ziek wordt?</p>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">2.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Hoofdstuk 2</h4>
                <p className="text-slate-600 text-sm">De Old friends en Biodiversiteits-hypotheses</p>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">3.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Hoofdstuk 3</h4>
                <p className="text-slate-600 text-sm">Epitheliale barrière theorie</p>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">4.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Afsluiting en reflectie</h4>
                <p className="text-slate-600 text-sm">Samenvatting en vergelijking van de theorieën</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary
