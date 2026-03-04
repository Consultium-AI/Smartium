import { Zap } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18ImmunostimulantiaSummary = () => {
  const toc = [{ id: 'immunostimulantia', title: 'Immunostimulantia', icon: Zap }]
  return (
    <SummaryLayout
      title="Immunostimulantia"
      description="Middelen die het immuunsysteem stimuleren."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image18"
    >
      <section id="immunostimulantia" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Immunostimulantia</h2>
        <p className="text-slate-700 mb-4">Immunostimulantia zijn middelen die het immuunsysteem versterken. Vaccins zijn een belangrijk voorbeeld: ze induceren een actieve immuunrespons en immunologisch geheugen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image18ImmunostimulantiaSummary
