import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05CorticosteroidenSummary = () => {
  const toc = [{ id: 'corticosteroiden', title: 'Corticosteroïden', icon: Activity }]
  return (
    <SummaryLayout
      title="Corticosteroïden"
      description="Definitie, toepassingen en werkingsmechanismen."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image05"
    >
      <section id="corticosteroiden" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Corticosteroïden</h2>
        <p className="text-slate-700 mb-4">Corticosteroïden zijn synthetische geneesmiddelen die lijken op het natuurlijke bijnierschorshormoon cortisol. Ze hebben krachtige ontstekingsremmende en afweeronderdrukkende eigenschappen en worden gebruikt voor auto-immuunziekten (reumatoïde artritis, multiple sclerose), longaandoeningen (COPD, astma) en ter voorkoming van afstoting na orgaantransplantaties.</p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Werkingsmechanismen</h4>
          <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
            <li>Remmen productie van inflammatoire mediatoren (cytokinen, prostaglandines, nitric oxide)</li>
            <li>Stimuleren apoptose van leukocyten en lymfocyten</li>
            <li>Remmen celmigratie naar ontstekingsplaatsen door remming van adhesiemoleculen</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05CorticosteroidenSummary
