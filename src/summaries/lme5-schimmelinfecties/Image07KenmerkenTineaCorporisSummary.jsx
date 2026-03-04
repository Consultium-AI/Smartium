import { CheckCircle2, XCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07KenmerkenTineaCorporisSummary = () => {
  const tableOfContents = [
    { id: 'kenmerkend', title: 'Kenmerkend vs. niet kenmerkend', icon: CheckCircle2 },
  ]

  return (
    <SummaryLayout
      title="Kenmerken – Tinea corporis"
      description="Differentiatie tussen kenmerken die passen bij een schimmelinfectie en kenmerken die niet kenmerkend zijn."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 7"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image07"
    >
      <section id="kenmerkend" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kenmerken tinea corporis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                Kenmerkend voor klassieke tinea corporis
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
                <li>Rode plek</li>
                <li>Verheven rand</li>
                <li>Opheldering/genezingstendens in het midden</li>
                <li>Fijne schilfering</li>
                <li>Scherp begrensd</li>
                <li>(Milde) jeuk</li>
              </ul>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-amber-600" />
                Niet kenmerkend voor schimmelinfectie
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
                <li>Onscherp begrensd</li>
                <li>Atrofie</li>
                <li>Grove schilfering</li>
                <li>Pijn</li>
                <li>Wonden</li>
                <li>Witte verkleuring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image07KenmerkenTineaCorporisSummary
