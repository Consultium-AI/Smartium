import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Eliminatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nierfunctie ontwikkelt zich in de eerste maanden van het leven geleidelijk naar de volwassen waarde. De glomerulaire filtratiesnelheid hangt bij pasgeborenen ook af van de zwangerschapsduur. Daarom worden veel antibiotica bij jonge kinderen anders gedoseerd dan bij oudere kinderen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij sommige middelen blijft de keerdosis gelijk, maar neemt de doseerfrequentie toe met de leeftijd. Dat past bij de rijping van de nierfunctie.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Voorbeeld van leeftijdsafhankelijke flucloxacillinedosering`}</Inline></SubHeading>
      <DataTable rows={[["Leeftijd", "Geboortegewicht", "Dosering"], ["< 1 week", "< 2 kg", "50 mg/kg/dag in 2 doses"], ["< 1 week", "> 2 kg", "75 mg/kg/dag in 3 doses"], ["1-4 weken", "< 2 kg", "75 mg/kg/dag in 3 doses"], ["1-4 weken", "> 2 kg", "100 mg/kg/dag in 4 doses"], ["> 4 weken", "n.v.t.", "100 mg/kg/dag in 4 doses"]]} />
    </div>
  )
}
