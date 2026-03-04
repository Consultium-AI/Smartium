import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05CelwandSummary = () => {
  const toc = [{ id: 'celwand', title: 'Celwandstructuur Gram+ en Gram-', icon: Layers }]
  return (
    <SummaryLayout
      title="Celwandstructuur – Gram-positief en Gram-negatief"
      description="Verschillen in celwandopbouw tussen grampositieve en gramnegatieve bacteriën."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image05"
    >
      <section id="celwand" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Celwandstructuur</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Gram-positief</h4>
            <ul className="list-disc pl-6 space-y-1 text-blue-700 text-sm">
              <li>Dikke peptidoglycaanlaag als uiterste buitenzijde</li>
              <li>Teichoïnezuur en lipoteichoïnezuur</li>
              <li>Eén celmembraan</li>
            </ul>
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Gram-negatief</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Dunne peptidoglycaanlaag in periplasmische ruimte</li>
              <li>Buitenmembraan met porines en lipopolysacchariden (LPS)</li>
              <li>Twee membranen (binnen- en buitenmembraan)</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05CelwandSummary
