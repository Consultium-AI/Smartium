import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03PrincipesImmuunsuppressieSummary = () => {
  const toc = [{ id: 'principes', title: 'Principes van immuunsuppressie', icon: Shield }]
  return (
    <SummaryLayout
      title="Principes van immuunsuppressie"
      description="Aangrijpingspunten van immuunsuppressieve medicijnen."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image03"
    >
      <section id="principes" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Principes van immuunsuppressie</h2>
        <p className="text-slate-700 mb-4">Immuunsuppressieve medicijnen grijpen aan op verschillende processen van het menselijk immuunsysteem. Een belangrijk kenmerk is dat ze een remmend effect hebben op immuuncelactivatie.</p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Aangrijpingspunten</h4>
          <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
            <li>Remming van overactieve immuuncellen</li>
            <li>Activatie van regulatoire mechanismen of cellen die het immuunsysteem onderdrukken</li>
            <li>Remming van celdeling van immuuncellen</li>
            <li>Remming van de productie van pro-inflammatoire factoren en cytokinen</li>
            <li>Remming van de migratie van cellen naar plaatsen van ontsteking of weefselschade</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03PrincipesImmuunsuppressieSummary
