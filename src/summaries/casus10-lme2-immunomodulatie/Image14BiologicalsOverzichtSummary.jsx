import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14BiologicalsOverzichtSummary = () => {
  const toc = [
    { id: 'biologicals', title: 'Biologicals overzicht', icon: Layers },
    { id: 'targets', title: 'Aangrijpingspunten', icon: Layers },
  ]
  return (
    <SummaryLayout
      title="Biologicals – Overzicht"
      description="Overzicht van biologicals en hun aangrijpingspunten in het immuunsysteem."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image14"
    >
      <section id="biologicals" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Biologicals</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Naast anti-TNF-alpha zijn er steeds meer biologicals die kunnen worden ingezet bij de behandeling van immuungemedieerde aandoeningen. Biologicals zijn een nieuwere klasse immunosuppressiva met een gerichter aangrijpingspunt: ze blokkeren specifieke pathways of pro-inflammatoire cytokinen. Ze remmen de functie van inflammatoire eiwitten en immuuncellen, en bestaan geheel of gedeeltelijk uit dierlijk of humaan eiwit.
        </p>
      </section>
      <section id="targets" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Aangrijpingspunten van biologicals</h2>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <ul className="list-disc pl-6 space-y-2 text-primary-700 text-sm">
            <li><strong>TNFα:</strong> Infliximab, Adalimumab, Etanercept, Certolizumab, Golimumab</li>
            <li><strong>IL-1:</strong> Anakinra, Canakinumab</li>
            <li><strong>IL-12/IL-23:</strong> Ustekinumab</li>
            <li><strong>IL-17:</strong> Secukinumab</li>
            <li><strong>CD28/CD80/86:</strong> Abatacept</li>
            <li><strong>BlyS:</strong> Atacicept, Belimumab</li>
            <li><strong>CD20 (B-cellen):</strong> Rituximab</li>
            <li><strong>IgE:</strong> Omalizumab</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image14BiologicalsOverzichtSummary
