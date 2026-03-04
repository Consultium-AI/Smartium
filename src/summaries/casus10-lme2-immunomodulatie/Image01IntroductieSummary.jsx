import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image01IntroductieSummary = () => {
  const tableOfContents = [{ id: 'intro', title: 'Introductie', icon: BookOpen }]
  return (
    <SummaryLayout
      title="Introductie – Immunomodulatie"
      description="Leerdoelen, doelgroep en inhoud."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 1"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image01"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Introductie</h2>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200 mb-4">
          <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
          <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
            <li>Uitleggen wat immuunmodulatie betekent</li>
            <li>Globaal overzicht van immuunmodulerende middelen</li>
            <li>Voorbeelden van ziektebeelden behandeld met immuunmodulatie</li>
            <li>Typen vaccins en werkingsmechanisme</li>
          </ul>
        </div>
        <div className="p-5 bg-teal-50 rounded-xl border border-teal-200 mb-4">
          <h4 className="font-bold text-teal-800 mb-2">Inhoud</h4>
          <p className="text-teal-700 text-sm">Principes immuunsuppressie, immunosuppressiva, immunostimulantia. Tijd: circa 1 uur.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image01IntroductieSummary
