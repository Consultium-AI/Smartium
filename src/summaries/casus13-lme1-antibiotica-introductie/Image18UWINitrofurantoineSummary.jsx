import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18UWINitrofurantoineSummary = () => {
  const toc = [{ id: 'uwi', title: 'Eerste keus UWI', icon: Pill }]
  return (
    <SummaryLayout
      title="Urineweginfectie – Eerste keus"
      description="NHG-standaard eerste keus bij ongecompliceerde urineweginfectie."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image18"
    >
      <section id="uwi" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Middelen bij urineweginfectie</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Van de antibiotica die doorgaans voorgeschreven worden bij een urineweginfectie zijn nitrofurantoïne en trimethoprim behandeld.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Volgens de NHG (Nederlands Huisartsen Genootschap) standaard is <strong>nitrofurantoïne</strong> de eerste keus bij een ongecompliceerde urineweginfectie.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image18UWINitrofurantoineSummary
