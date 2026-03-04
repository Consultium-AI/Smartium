import { AlertCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05ExposoomOntstekingSummary = () => {
  const toc = [{ id: 'ontsteking', title: 'Ontsteking als exposoomfactor?', icon: AlertCircle }]
  return (
    <SummaryLayout
      title="Exposoom (3) – Ontsteking als exposoomfactor?"
      description="Argumenten voor en tegen het rekenen van ontsteking tot het exposoom."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image05"
    >
      <section id="ontsteking" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Ontsteking en het exposoom</h2>
        <p className="text-slate-700 mb-4">In de video wordt ontsteking ook gerekend tot een exposoomfactor. Er zijn argumenten voor én tegen:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <strong>WEL:</strong> Tijdens een ontstekingsreactie worden factoren geproduceerd (zoals cytokinen) die door het lichaam worden opgemerkt en waarop een reactie kan volgen. Sterke ontstekingsreacties veroorzaken ook schade (zuurstofradicalen, enzymen uit granulocyten).
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <strong>NIET:</strong> Ontsteking is de reactie van het immuunsysteem op een schadeprikkel. Je zou kunnen zeggen dat het een reactie is op een exposoomprikkel, niet de prikkel zelf.
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05ExposoomOntstekingSummary
