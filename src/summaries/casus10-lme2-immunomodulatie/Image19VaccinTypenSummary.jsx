import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19VaccinTypenSummary = () => {
  const toc = [{ id: 'vaccintypen', title: 'Vaccintypen', icon: BookOpen }]
  return (
    <SummaryLayout
      title="Typen vaccins"
      description="Levend verzwakt, geïnactiveerd, subunit en mRNA vaccins."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 19"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image19"
    >
      <section id="vaccintypen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Typen vaccins</h2>
        <p className="text-slate-700 mb-4">Vaccins kunnen levend verzwakt, geïnactiveerd, subunit of mRNA zijn. Elk type heeft een eigen werkingsmechanisme en toepassingsgebied.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image19VaccinTypenSummary
