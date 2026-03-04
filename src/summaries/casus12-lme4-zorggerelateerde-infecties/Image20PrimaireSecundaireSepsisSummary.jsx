import { HeartPulse } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20PrimaireSecundaireSepsisSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'primaire', title: 'Primaire sepsis', icon: HeartPulse },
    { id: 'secundaire', title: 'Secundaire sepsis', icon: HeartPulse },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Terminologie – Primaire en secundaire sepsis"
      description="Het onderscheid tussen primaire en secundaire sepsis."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 20"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image20"
    >
      <section id="primaire" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Primaire sepsis</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Een patiënt komt binnen met een primaire sepsis. Denk hierbij aan verwekkers die bijvoorbeeld een urineweginfectie kunnen geven, of een community acquired pneumonie, of een ernstige huidwekedeleninfectie op basis van S. aureus of MRSA.
        </p>
      </section>
      <section id="secundaire" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Secundaire sepsis</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Een sepsis bij een opgenomen patiënt met een centraal veneuze katheter (een infuus in een grote ader) is een voorbeeld van een <strong>secundaire sepsis</strong>.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Als een <strong>coagulase negatieve staphylococcus (CNS)</strong> uit het bloed wordt gekweekt, is bijna altijd sprake van een secundaire sepsis.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Primaire en secundaire sepsis zijn onder andere van elkaar te onderscheiden door middel van de informatie over wanneer de patiënt is opgenomen, wanneer de bloedkweken zijn afgenomen en of een patiënt in het bezit is van een lijn. Secundaire sepsis ontstaat in het ziekenhuis en is vaak lijngerelateerd waarbij vooral CNS een rol spelen.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image20PrimaireSecundaireSepsisSummary
