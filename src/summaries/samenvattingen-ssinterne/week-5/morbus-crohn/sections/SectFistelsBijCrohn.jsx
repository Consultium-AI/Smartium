import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fistels bij Crohn`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Perianale fistels zijn een belangrijke complicatie van Crohn. Ze hebben vaak grote impact op het dagelijks leven. Een perianale fistel is niet per definitie complex; er bestaan ook simpele fistels.`}</Inline></p>
      <PBody text={`Bij een simpele fistel kan volgens de richtlijn een seton worden geplaatst. Als een patiënt dat weigert, kan de medicamenteuze behandeling worden geoptimaliseerd. In de casus werd naast anti-TNF ook **ciprofloxacine** gegeven. De combinatie van anti-TNF met ciproxin werkt beter dan anti-TNF alleen bij perianale fistels.`} />
      <SubHeading><Inline>{`Tabel 2. Fistels bij Crohn`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Kern"], ["Beeldvorming", "MRI van het rectum om simpele en complexe fistels te onderscheiden"], ["Chirurgische optie", "Seton bij een simpele fistel"], ["Medicamenteuze aanvulling", "Ciproxin naast anti-TNF"], ["Belangrijk effect", "Betere genezing dan anti-TNF alleen"]]} />
    </div>
  )
}
