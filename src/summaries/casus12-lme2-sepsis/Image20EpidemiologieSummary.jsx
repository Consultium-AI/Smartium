import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20EpidemiologieSummary = () => {
  const toc = [{ id: 'epidemiologie', title: 'Epidemiologie', icon: BarChart3 }]
  return (
    <SummaryLayout
      title="Epidemiologie van sepsis"
      description="Wereldwijde en Nederlandse cijfers, mortaliteit en gevolgen voor overlevenden."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 20"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image20"
    >
      <section id="epidemiologie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Epidemiologie</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Wereldwijd: ~11 miljoen doden per jaar</li>
          <li>Nederland: ~9.000 doden per jaar</li>
          <li>Mortaliteit: 15–50% afhankelijk van ernst</li>
          <li>Overlevenden: verminderde kwaliteit van leven, depressie, cognitieve stoornissen</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image20EpidemiologieSummary
