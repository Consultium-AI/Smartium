import { ArrowUpFromLine } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13EffluxSummary = ({ standalone = true }) => {
  const toc = [{ id: 'efflux', title: 'Efflux van antibiotica', icon: ArrowUpFromLine }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Efflux van antibiotica"
      description="Resistentiemechanisme: actieve uitscheiding van antibiotica door de bacterie."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image13"
    >
      <section id="efflux" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Efflux van antibiotica</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Wanneer de bacterie het antibioticum actief uit zichzelf verwijdert, spreken we van efflux van antibiotica. De bacterie &apos;pompt&apos; het antibioticum naar buiten voordat het zijn werk kan doen.
        </p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Voorbeeld</h4>
          <p className="text-primary-700 text-sm">Ciprofloxacin wordt door de bacterie eruit gepompt. Dit is een voorbeeld van efflux als resistentiemechanisme bij fluorchinolonen.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image13EffluxSummary
