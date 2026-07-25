import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prognose: MELD en Child-Pugh-Turcotte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De prognose van levercirrose wordt onder andere bepaald met de MELD-score en de Child-Pugh-Turcotte-score.`}</Inline></p>
      <SubHeading><Inline>{`MELD-score`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De MELD-score gebruikt bilirubine, creatinine en INR. Hoe hoger de score, hoe slechter de prognose en hoe groter de urgentie voor transplantatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij deze patiënt is de MELD-score 38.`}</Inline></p>
      <SubHeading><Inline>{`Child-Pugh-Turcotte-score`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De Child-Pugh-Turcotte-score beoordeelt de ernst van leverziekte op basis van kliniek en laboratoriumwaarden. Bij deze patiënt is de score 11.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 7. Prognose bij deze patiënt`}</Inline></SubHeading>
      <DataTable rows={[["Maatstaf", "Uitslag"], ["MELD-score", "38"], ["Child-Pugh-Turcotte-score", "11"], ["Kans op overlijden binnen 3 maanden", "53%"], ["Kans op overleving na 1 jaar", "45%"]]} />
      <p className="leading-relaxed"><Inline>{`Bij uitblijven van snelle verbetering is de patiënt een goede kandidaat voor levertransplantatie.`}</Inline></p>
    </div>
  )
}
