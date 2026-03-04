import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04NatuurlijkeResistentieSummary = ({ standalone = true }) => {
  const toc = [{ id: 'natuurlijk', title: 'Natuurlijke resistentie – Vancomycine', icon: Shield }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Natuurlijke resistentie – Vancomycine en gramnegatieven"
      description="Waarom gramnegatieve bacteriën intrinsiek resistent zijn voor vancomycine."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image04"
    >
      <section id="natuurlijk" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Natuurlijke resistentie</h2>
        <p className="text-slate-700 mb-4">Natuurlijke resistentie kan het gevolg zijn van de bouw van de bacterie. Een voorbeeld is de resistentie van gramnegatieve bacteriën voor vancomycine.</p>
        <div className="space-y-3">
          <p className="text-slate-700 text-sm">Vancomycine werkt op de celwandsynthese (peptidoglycaanlaag). Grampositieve en gramnegatieve bacteriën hebben een celmembraan; aan de buitenzijde ligt de peptidoglycaanlaag. Gramnegatieve bacteriën hebben een dunne peptidoglycaanlaag en een buitenmembraan met porines. Grampositieve bacteriën hebben een dikke peptidoglycaanlaag als uiterste buitenzijde.</p>
          <p className="text-slate-700 text-sm">Om de peptidoglycaanlaag te bereiken moeten moleculen zoals vancomycine door de porines van de buitenmembraan. Het vancomycine-molecuul is echter te groot voor de porines en kan de buitenmembraan niet passeren. Gramnegatieve bacteriën zijn dus altijd resistent voor vancomycine.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04NatuurlijkeResistentieSummary
