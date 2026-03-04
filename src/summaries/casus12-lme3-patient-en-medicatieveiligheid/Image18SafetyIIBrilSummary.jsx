import { Glasses } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18SafetyIIBrilSummary = () => {
  const toc = [{ id: 'bril', title: 'De Safety II bril', icon: Glasses }]
  return (
    <SummaryLayout
      title="De Safety II bril"
      description="Leren van wat goed gaat – kwetsbaarheden en krachten, veerkracht en effectiviteit."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image18"
    >
      <section id="bril" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">De Safety II bril</h2>
        <p className="text-slate-700 mb-4">Genoeg over alles wat fout gaat – laten we leren van alles wat goed gaat! De Safety II-beweging onderzoekt niet alleen wat fout gaat, maar ook wat goed of bijzonder goed gaat in de dagelijkse praktijk.</p>
        <p className="text-slate-700 mb-4">De Safety II-bril moedigt aan om complete processen te bekijken om zowel <strong>kwetsbaarheden</strong> als <strong>krachten</strong> te identificeren. Het doel: leren van succesverhalen en best practices om systemen veerkrachtiger en effectiever te maken.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image18SafetyIIBrilSummary
