import { ListChecks } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10PreventieveMaatregelenLijstSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'maatregelen', title: 'Preventieve maatregelen', icon: ListChecks },
    { id: 'doelen', title: 'Doelen van maatregelen tegen POWI', icon: ListChecks },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Preventieve maatregelen – Lijst en doelen"
      description="Overzicht van preventieve maatregelen en hun doelen bij postoperatieve wondinfecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image10"
    >
      <section id="maatregelen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Preventieve maatregelen</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Zoals eerder benoemd is de preventie van infecties in het ziekenhuis een onderdeel van goede patiëntenzorg. Hieronder staat een aantal preventieve maatregelen opgesomd:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Handhygiëne</li>
          <li>Isoleren van patiënten</li>
          <li>Dragen van persoonlijke beschermingsmiddelen</li>
          <li>Reinigen en desinfecteren van patiëntenkamers en apparatuur</li>
          <li>Hygiënisch inbrengen van vreemd lichaamsmateriaal, bijvoorbeeld een urinekatheter</li>
        </ul>
        <p className="text-slate-700 mt-4 leading-relaxed">
          Volgens de ziekenhuisrichtlijnen worden daarnaast meerdere maatregelen getroffen om te voorkomen dat patiënten een postoperatieve wondinfectie ontwikkelen. In het algemeen hebben de preventieve maatregelen meerdere doelen. Een van de doelen is het verbeteren van de conditie van de patiënt om hiermee de kans te verkleinen dat deze een postoperatieve wondinfectie ontwikkelt.
        </p>
      </section>
      <section id="doelen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Twee andere belangrijke doelen</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          De omgeving en de patiënt zelf kunnen een bron zijn van micro-organismen die later een postoperatieve wondinfectie kunnen veroorzaken. De te nemen maatregelen moeten zoveel mogelijk voorkomen dat deze micro-organismen uiteindelijk in een wond terechtkomen.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700 font-medium">
          <li>Het voorkomen van besmetting vanuit de patiënt</li>
          <li>Het voorkomen van besmetting vanuit de omgeving</li>
        </ol>
      </section>
    </SummaryLayout>
  )
}

export default Image10PreventieveMaatregelenLijstSummary
