import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03SafetyISafetyIISummary = () => {
  const toc = [{ id: 'safety', title: 'Safety I en Safety II', icon: Shield }]
  return (
    <SummaryLayout
      title="Safety I en Safety II"
      description="Verschil tussen Safety I (foutgericht) en Safety II (krachtgericht) denken."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image03"
    >
      <section id="safety" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Safety I vs Safety II</h2>
        <p className="text-slate-700 mb-4">Safety I en Safety II zijn zienswijzen om (medicatie)veiligheid te bewerkstelligen.</p>
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">Safety I</h4>
            <p className="text-red-700 text-sm">De klassieke methode ziet menselijk handelen als foutgevoelig. Fouten zijn het gevolg van niet of onvoldoende naleven van protocollen. Het doel: zoeken naar factoren die een fout kunnen veroorzaken en deze aanpakken.</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
            <h4 className="font-bold text-emerald-800 mb-2">Safety II</h4>
            <p className="text-emerald-700 text-sm">Een benadering vanuit alles wat minder goed, gewoon goed of bijzonder goed gaat in de dagelijkse praktijk. Neemt het volledige proces onder de loep en focust niet alleen op fouten, maar ook op krachten. Er gaat zo veel goed in de zorg – waarom alleen focussen op fouten?</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03SafetyISafetyIISummary
