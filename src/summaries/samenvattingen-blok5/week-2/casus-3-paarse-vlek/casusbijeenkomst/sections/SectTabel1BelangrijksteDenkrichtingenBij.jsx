import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 1. Belangrijkste denkrichtingen bij paarse huidafwijkingen`}</Inline></SubHeading>
      <DataTable rows={[["Mogelijke oorzaak", "Waarom denk je eraan?", "Wat past ertegen of wat moet je uitvragen?"], ["---", "---", "---"], ["Vasculitis", "Niet-wegdrukbare purpura, buikpijn, gewrichtsklachten, mogelijk koorts", "Vraag naar nierklachten, neurologische klachten, infectie vooraf"], ["Bloedingsneiging / stollingsstoornis", "Blauwe plekken, lang nabloeden, slijmvliesbloedingen, paarse verkleuring na trauma", "Vraag naar familieanamnese, medicatie, spontane bloedingen"], ["Lokaal trauma", "Verkleurde zwelling na stoten of sporten", "Past minder goed als er ook elders afwijkingen zijn"], ["Infectieuze oorzaak", "Koorts, ziek zijn, snelle achteruitgang", "Bij afwezigheid hiervan minder waarschijnlijk"]]} />
      <p className="leading-relaxed"><Inline>{`Bij casus 1 ligt de nadruk op vasculitis. Bij casus 2 moet je juist actief een bloedingsprobleem overwegen en vasculitis alleen uitsluiten als dat nodig is.`}</Inline></p>
    </div>
  )
}
