import { Brain } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image25ImmunologischGeheugenSummary = () => {
  const toc = [{ id: 'geheugen', title: 'Immunologisch geheugen', icon: Brain }]
  return (
    <SummaryLayout
      title="Immunologisch geheugen"
      description="Memory B- en T-cellen voor langdurige bescherming na vaccinatie."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 25"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image25"
    >
      <section id="geheugen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Immunologisch geheugen</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Tijdens de immuunrespons na vaccinatie of infectie worden geheugen-T-cellen en geheugen-B-cellen gevormd. Deze cellen zijn verantwoordelijk voor immunologisch geheugen: ze &apos;onthouden&apos; het antigeen, zodat het immuunsysteem bij een volgende blootstelling sneller en krachtiger kan reageren.
        </p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Belangrijk</h4>
          <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
            <li><strong>Geheugen-B-cellen</strong> kunnen snel specifieke antilichamen produceren bij hernieuwde blootstelling</li>
            <li><strong>Geheugen-T-cellen</strong> zorgen voor snelle herkenning en eliminatie van geïnfecteerde cellen</li>
            <li>Dankzij de persistentie van antigenen in lymfoïde weefsels en geheugencellen kan het lichaam lange tijd beschermd blijven</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image25ImmunologischGeheugenSummary
