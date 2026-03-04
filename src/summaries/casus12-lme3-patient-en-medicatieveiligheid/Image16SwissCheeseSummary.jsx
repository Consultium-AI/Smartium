import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16SwissCheeseSummary = () => {
  const toc = [{ id: 'swiss', title: 'Proces- en systeemdenken', icon: Layers }]
  return (
    <SummaryLayout
      title="Proces- en systeemdenken"
      description="Swiss Cheese Model van James Reason."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 16"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image16"
    >
      <section id="swiss" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Proces- en systeemdenken</h2>
        <p className="text-slate-700 mb-4">Processen zijn niet geïsoleerd maar onderdeel van een groter geheel. Proces- en systeemdenken helpt bredere verbanden te begrijpen: interacties tussen mensen, middelen en werkomgeving. Fouten ontstaan vaak doordat meerdere barrières falen – dit wordt geïllustreerd door het <strong>Swiss Cheese Model</strong> van James Reason.</p>
        <p className="text-slate-700 mb-4">De &apos;gaten&apos; in de lagen van bescherming symboliseren zwakke plekken. Een incident treedt op wanneer deze zwakke plekken op één lijn komen. Voorbeelden van lagen: toegepaste technieken, ontwerp apparatuur, personeelsbeleid, opleidingsbeleid.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image16SwissCheeseSummary
