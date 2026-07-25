import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hemostase: het stoppen van een bloeding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hemostase betekent bloedstolling. Het is het proces dat ervoor zorgt dat een bloeding stopt zodra een bloedvat beschadigd raakt. Dat is belangrijk, want zonder hemostase zou zelfs een kleine verwonding blijven bloeden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij hemostase werken meerdere onderdelen samen. Denk aan de vaatwand, trombocyten, stollingsfactoren, de lever, vitamine K, von Willebrand factor en fibrinogeen. Al deze factoren dragen op hun eigen manier bij aan een goede balans tussen bloeden en stollen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is hemostase zo belangrijk?
**Mini-antwoord:** omdat het bloedverlies na vaatbeschadiging beperkt en een bloeding stopt.`} />
      <SubHeading><Inline>{`Eerste reactie van het bloedvat`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wanneer een bloedvat beschadigd raakt, trekt de vaatwand samen. Dit heet vasoconstrictie. Hierbij komt endotheline vrij, waardoor de gladde spiercellen in de vaatwand samentrekken. Het gevolg is dat er minder bloed uit het vat verloren gaat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het endotheel, de cellaag die de binnenkant van de vaatwand vormt, speelt hierbij een centrale rol. In rust werkt het endotheel vooral antistollend. Het vormt dan een barrière tussen de bloedbaan en het subendotheel en geeft t-PA af. Na beschadiging verandert die functie: het endotheel wordt dan stollingsbevorderend en geeft onder andere von Willebrand factor en factor VIII vrij.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Functie van endotheel in rust en na beschadiging`}</Inline></SubHeading>
      <DataTable rows={[["Endotheel in rust", "Endotheel na beschadiging"], ["Antistollend", "Stollingsbevorderend"], ["Vrijkomen van t-PA", "Vrijkomen van von Willebrand factor"], ["Barrière tussen bloedbaan en subendotheel", "Vrijkomen van factor VIII"]]} />
    </div>
  )
}
