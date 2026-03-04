import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07LeefstijlInvloedSummary = () => {
  const toc = [{ id: 'invloed', title: 'Invloed op het immuunsysteem', icon: BarChart3 }]
  return (
    <SummaryLayout
      title="Leefstijlfactoren en invloed op immuunsysteem (2)"
      description="Volgorde van invloed en mechanismen per factor."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image07"
    >
      <section id="invloed" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Volgorde van invloed</h2>
        <p className="text-slate-700 mb-4">De leefstijlfactoren hebben in volgorde van invloed op het immuunsysteem:</p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700 mb-6">
          <li><strong>Voeding</strong> – darmmicrobioom, darmbarrière</li>
          <li><strong>Beweging</strong> – leukocyten</li>
          <li><strong>Middelengebruik</strong> – nicotine, cafeïne, alcohol onderdrukken de immuunrespons</li>
          <li><strong>Slaap</strong></li>
          <li><strong>Ontspanning</strong></li>
          <li><strong>(Sociale) verbinding</strong></li>
        </ol>
        <h3 className="font-bold text-slate-800 mb-2">Mechanismen</h3>
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li>Voeding beïnvloedt het darmmicrobioom en de darmbarrière</li>
          <li>Beweging beïnvloedt onder meer leukocyten</li>
          <li>Nicotine, cafeïne en alcohol onderdrukken de immuunrespons</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image07LeefstijlInvloedSummary
