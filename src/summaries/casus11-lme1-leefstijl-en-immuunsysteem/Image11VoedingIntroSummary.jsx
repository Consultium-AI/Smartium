import { Utensils } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11VoedingIntroSummary = ({ standalone = true }) => {
  const toc = [{ id: 'voeding-intro', title: 'Voeding en immuunsysteem – introductie', icon: Utensils }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Voeding en immuunsysteem (1)"
      description="Kritiek op commerciële immune boosters en wat een goed afgesteld immuunsysteem is."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image11"
    >
      <section id="voeding-intro" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Voeding en immuunsysteem</h2>
        <p className="text-slate-700 mb-4">Commerciële producten die het immuunsysteem zouden &quot;boosten&quot; zijn vaak kritisch te bekijken. Een goed afgesteld immuunsysteem is niet per se actief zonder aanleiding.</p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Goed afgesteld immuunsysteem</h4>
          <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
            <li>Geen activiteit zonder aanleiding</li>
            <li>Snel reageren tegen pathogenen wanneer nodig</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image11VoedingIntroSummary
