import { Glasses } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19SafetyIIBrilSummary = ({ standalone = true }) => {
  const toc = [{ id: 'safety2', title: 'De Safety II-bril', icon: Glasses }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="De Safety II-bril"
      description="Leren van wat goed gaat in plaats van alleen fouten."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 19"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image19"
    >
      <section id="safety2" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">De Safety II-bril</h2>
        <p className="text-slate-700 mb-4">Genoeg over alles wat fout gaat – laten we leren van alles wat goed gaat! De Safety II-beweging richt zich niet alleen op wat er misgaat, maar onderzoekt ook wat er goed of buitengewoon goed gaat in de dagelijkse praktijk.</p>
        <p className="text-slate-700 mb-4">Met de Safety II-bril kijk je naar volledige processen en identificeer je zowel kwetsbaarheden als krachten. Door te leren van succesverhalen en best practices kun je zorgsystemen veerkrachtiger en effectiever maken.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image19SafetyIIBrilSummary
