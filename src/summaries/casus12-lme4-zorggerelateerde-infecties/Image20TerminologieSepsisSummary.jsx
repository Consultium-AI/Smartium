import { HeartPulse } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20TerminologieSepsisSummary = () => {
  const toc = [
    { id: 'definitie', title: 'Primaire vs secundaire sepsis', icon: HeartPulse },
    { id: 'voorbeelden', title: 'Voorbeelden', icon: HeartPulse },
  ]
  return (
    <SummaryLayout
      title="Terminologie – Primaire en secundaire sepsis"
      description="Onderscheid tussen primaire en secundaire sepsis."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 20"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image20"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Primaire vs secundaire sepsis</h2>
        <p className="text-slate-700 mb-4">Een ziekenhuisomgeving is niet een omgeving waarin je patiënten langer dan nodig wilt houden in verband met het risico op het ontstaan van een infectie. Vaak is een eerste uiting van een infectie in het ziekenhuis koorts. Vervolgens wordt focusonderzoek ingezet om de oorzaak van de koorts te achterhalen.</p>
        <p className="text-slate-700 mb-4">Een primaire en secundaire sepsis zijn o.a. van elkaar te onderscheiden door middel van de informatie over wanneer de patiënt is opgenomen, wanneer de bloedkweken zijn afgenomen en of een patiënt in het bezit is van een lijn.</p>
      </section>
      <section id="voorbeelden" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Voorbeelden</h2>
        <p className="text-slate-700 mb-4"><strong>Primaire sepsis:</strong> Een patiënt komt binnen met een primaire sepsis, denk hierbij aan verwekkers die bijvoorbeeld een urineweginfectie kunnen geven, of een community acquired pneumonie of een ernstige huidwekedelen infectie op basis van S. aureus of MRSA.</p>
        <p className="text-slate-700 mb-4"><strong>Secundaire sepsis:</strong> Een sepsis bij een opgenomen patiënt met een centraal veneuze katheter (een infuus in een grote ader) is een voorbeeld van een secundaire sepsis. Als een coagulase negatieve staphylococcus (CNS) uit het bloed wordt gekweekt is bijna altijd sprake van een secundaire sepsis. Secundaire sepsis ontstaat in het ziekenhuis en is vaak lijngerelateerd waarbij vooral CNS een rol spelen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image20TerminologieSepsisSummary
