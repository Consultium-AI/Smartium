import { Target, Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10PreventieveMaatregelenDoelenSummary = () => {
  const toc = [
    { id: 'maatregelen', title: 'Preventieve maatregelen', icon: Shield },
    { id: 'doelen', title: 'Doelen van de maatregelen', icon: Target },
  ]
  return (
    <SummaryLayout
      title="Preventieve maatregelen – Doelen"
      description="Concrete maatregelen en doelen om patiënten te beschermen tegen postoperatieve wondinfecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image10"
    >
      <section id="maatregelen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Preventieve maatregelen</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
          <li>Handhygiëne</li>
          <li>Isoleren van patiënten</li>
          <li>Dragen van persoonlijke beschermingsmiddelen</li>
          <li>Reinigen en desinfecteren van patiëntenkamers en apparatuur</li>
          <li>Hygiënisch inbrengen van vreemd lichaamsmateriaal (bijv. urinekatheter)</li>
        </ul>
        <p className="text-slate-700">Ziekenhuisrichtlijnen bevatten daarnaast meerdere maatregelen om POWI te voorkomen. Een algemeen doel is het verbeteren van de conditie van de patiënt om de kans op een postoperatieve wondinfectie te verkleinen.</p>
      </section>
      <section id="doelen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Twee andere belangrijke doelen</h2>
        <div className="space-y-3">
          <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-primary-700 text-sm m-0"><strong>Het voorkomen van besmetting vanuit de patiënt</strong></p>
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <p className="text-teal-700 text-sm m-0"><strong>Het voorkomen van besmetting vanuit de omgeving</strong></p>
          </div>
        </div>
        <p className="text-slate-700 mt-4 text-sm">De omgeving en de patiënt zelf kunnen een bron zijn van micro-organismen die later een postoperatieve wondinfectie kunnen veroorzaken. De te nemen maatregelen moeten zoveel mogelijk voorkomen dat deze micro-organismen uiteindelijk in een wond terechtkomen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image10PreventieveMaatregelenDoelenSummary
