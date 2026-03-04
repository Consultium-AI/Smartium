import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05VoorkomenSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'voorkomen', title: 'Voorkomen dermatomycosen', icon: BarChart3 },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Voorkomen – Dermatomycosen"
      description="Feiten over prevalentie en epidemiologie van schimmelinfecties van de huid."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image05"
    >
      <section id="voorkomen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Voorkomen dermatomycosen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-3">Feiten over prevalentie</h4>
            <ul className="space-y-2 text-primary-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span><strong>Dermatomycosen bij kinderen vs. volwassenen:</strong> Niet waar dat ze vaker bij kinderen voorkomen. Alleen tinea capitis wordt vaker gezien onder 11 jaar. Bij onychomycose neemt prevalentie toe met leeftijd. Tinea corporis piek: 25-45 jaar. Tinea pedis piek: 30-60 jaar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span><strong>Tinea pedis:</strong> 10-30% van de volwassenen (niet 50%).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span><strong>Onychomycose:</strong> 3-11% van de volwassenen (niet 20%).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span><strong>Behandeling:</strong> 80% van de schimmelinfecties van de huid geneest in 4 weken indien behandeld. Onychomycose en tinea capitis behoeven langere behandeling.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span><strong>Seizoenspatroon:</strong> De meeste schimmelinfecties van de huid komen voor in de zomer en herfst (niet in het voorjaar).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05VoorkomenSummary
