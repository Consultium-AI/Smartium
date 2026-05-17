import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Diabetische voet: een combinatieprobleem`}</Inline></h3>
      <p><Inline>{`De diabetische voet is een belangrijke ernstige complicatie. Deze valt meestal onder zowel microvasculaire als macrovasculaire problemen. Neuropathie zorgt ervoor dat kleine wondjes of drukplekken niet goed gevoeld worden. Daardoor kan iemand bijvoorbeeld te lang met een steentje in de schoen rondlopen en zo een ulcus ontwikkelen. Door macrovasculair lijden, dus perifeer vaatlijden, is de bloedvoorziening verstoord en kan wondgenezing niet optimaal verlopen.`}</Inline></p>
      <p><Inline>{`Daarom is het belangrijk om de pulsaties van de voet te controleren, zeker bij wondjes aan de tenen of andere klachten die passen bij perifeer vaatlijden.`}</Inline></p>
    </div>
  )
}
