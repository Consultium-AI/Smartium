import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20ActieveImmunisatieSummary = () => {
  const toc = [
    { id: 'vaccinatie', title: 'Vaccinatie', icon: Syringe },
    { id: 'principe', title: 'Principe van vaccinatie', icon: Syringe },
  ]
  return (
    <SummaryLayout
      title="Actieve immunisatie – Vaccinatie"
      description="Vaccinatie als effectieve vorm van immunostimulatie."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 20"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image20"
    >
      <section id="vaccinatie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Vaccinatie</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Vaccinatie is een van de meest effectieve en bewezen vormen van immunostimulatie. Immunostimulantia zijn stoffen die het immuunsysteem activeren of versterken, waardoor de afweermechanismen van het lichaam beter in staat zijn infecties te bestrijden of ziekten te voorkomen.
        </p>
      </section>
      <section id="principe" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Principe van vaccinatie</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Het principe is gebaseerd op het stimuleren van het immuunsysteem om een specifieke, langdurige afweer te ontwikkelen tegen bepaalde pathogenen (virussen of bacteriën), zonder dat de persoon daadwerkelijk ziek wordt. Door het toedienen van verzwakte, gedode of gefragmenteerde vormen van een ziekteverwekker leert het immuunsysteem het pathogeen herkennen en reageren op toekomstige blootstellingen.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image20ActieveImmunisatieSummary
