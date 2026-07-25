import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ritme- en geleidingsstoornissen herken je door goed te kijken naar frequentie, regelmaat, QRS-breedte en de relatie tussen P-toppen en QRS-complexen. De belangrijkste mechanismen zijn automaticiteit, nadepolarisatie en vooral re-entry. Ventriculaire tachycardie is een breedcomplextachycardie en kan snel gevaarlijk worden. AV-blokken worden ingedeeld van 1e graads tot 3e graads, waarbij de ernst toeneemt naarmate de geleiding slechter wordt. Supraventriculaire tachycardieën ontstaan boven de ventrikels en omvatten onder andere AVNRT, AVRT, atriumflutter en atriumfibrilleren. Atriumfibrilleren is de meest voorkomende ritmestoornis en geeft vooral risico op CVA door stolselvorming in het linkerhartoortje. De behandeling hangt af van het ritme en de ernst, en kan bestaan uit medicatie, cardioversie, pacemaker, defibrillatie of ablatie.`}</Inline></p>
    </div>
  )
}
