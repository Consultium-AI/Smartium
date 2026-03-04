import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Module-overzicht', icon: LayoutList },
  ]

  return (
    <SummaryLayout
      title="Module-overzicht – Exantheem kind"
      description="Inleiding en navigatie door de e-learning over huidmanifestaties van virale infectieziekten bij kinderen."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image02"
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
            Voor veel ouders is huiduitslag en eventuele bijkomende koorts bij hun kind een reden om contact op te nemen met de huisarts. Vaak is de uitslag onschuldig, maar soms is er sprake van een aandoening die behandeld en/of gemeld moet worden.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Focus van deze e-learning</h4>
            <p className="text-primary-700 text-sm mb-2">
              In deze e-learning staan de huidmanifestaties van virale infectieziekten centraal, maar is er ook aandacht voor andere en niet-infectieuze oorzaken van rash bij kinderen.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Aan het eind van de e-learning ken je de meest voorkomende (virale) infecties die rashes geven bij kinderen en weet je wat het beleid voor deze infectieziekten moet zijn.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Differentiaaldiagnose</h4>
            <p className="text-amber-700 text-sm m-0">
              Omdat een huiduitslag bij een kind niet altijd onschuldig is en ook door niet-infectieuze oorzaken veroorzaakt kan worden, besteedt deze e-learning en de bijbehorende literatuur ook aandacht aan de differentiaaldiagnose van rash bij kinderen.
            </p>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-1">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">1.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Introductie exantheem</h4>
                <p className="text-slate-600 text-sm">Wat is een rash? Terminologie en beschrijving.</p>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">2.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Exantheemziekten</h4>
                <p className="text-slate-600 text-sm">Infectieuze exantheemziekten op de kinderleeftijd.</p>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">3.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Oefenen</h4>
                <p className="text-slate-600 text-sm">Oefenvragen om je kennis te toetsen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary
