import { Bug } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04VerwekkersSummary = () => {
  const tableOfContents = [
    { id: 'verwekkers', title: 'Veel voorkomende verwekkers', icon: Bug },
    { id: 'belang', title: 'Belang van diagnostiek', icon: Bug },
  ]

  return (
    <SummaryLayout
      title="Veel voorkomende verwekkers van exantheem"
      description="Overzicht van virale verwekkers van exantheem bij kinderen en het belang van correcte diagnostiek."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 4"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image04"
    >
      <section id="verwekkers" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Bug className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Veel voorkomende verwekkers
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Veel voorkomende verwekkers van exantheem zijn:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Varicella zoster virus</strong> (waterpokken)</li>
            <li><strong>Enterovirus</strong></li>
            <li><strong>Parvovirus B19</strong> (vijfde ziekte)</li>
            <li><strong>Humaan herpesvirus 6</strong> (zesde ziekte)</li>
            <li><strong>Rubella</strong> (rode hond) – bij niet-gevaccineerde patiënten</li>
            <li><strong>Mazelenvirus</strong> – bij niet-gevaccineerde patiënten</li>
          </ul>
          
          <p>
            Deze infecties worden in de module verder besproken.
          </p>
        </div>
      </section>

      <section id="belang" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Bug className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Belang van correcte diagnostiek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Voor veel virale exantheemziekten hebben we niet direct een geneesmiddel. Toch is het juist diagnosticeren van een infectieuze exantheemziekte belangrijk omdat het soms verstrekkende gevolgen kan hebben; niet alleen voor de patiënt, maar ook voor de publieke gezondheidszorg.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Denk aan:</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Het opsporen van verheffingen van virale infecties die we eerder weinig meer zagen, zoals mazelen</li>
              <li>Het aanpakken van uitbraken binnen scholen of kinderdagverblijven</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04VerwekkersSummary
