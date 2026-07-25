import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Medicatie en valrisico`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Medicatie is een belangrijk onderdeel van de valanalyse. Sommige middelen verhogen het valrisico duidelijk. Vooral middelen die het centrale zenuwstelsel beïnvloeden, middelen die orthostatische hypotensie kunnen geven en middelen met anticholinerge eigenschappen zijn relevant. Ook geneesmiddelen met vertraagde afgifte, een nauwe therapeutisch-toxische index of middelen die via CYP450 worden gemetaboliseerd kunnen bijdragen aan bijwerkingen bij ouderen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Medicatie uit de casus en effect op valrisico`}</Inline></SubHeading>
      <DataTable rows={[["Medicament", "Valrisico"], ["Enalapril", "ja"], ["Methotrexaat", "nee"], ["Foliumzuur", "nee"], ["Furosemide", "ja"], ["Ca/VitD", "nee"], ["Temazepam", "ja"], ["Sertraline", "ja"], ["Simvastatine", "nee"], ["Clopidogrel", "nee"], ["Esomeprazol", "nee"], ["Tramadol", "ja"], ["Ibuprofen", "ja"], ["Metformine", "nee"], ["Betahistine", "ja"], ["Timolol oogdruppels", "ja"], ["Kenacort injectie", "nee"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een uitgebreide valanalyse kijk je dus kritisch naar de medicatie en probeer je middelen die orthostase of andere bijwerkingen geven te verminderen of te stoppen als dat kan.`}</Inline></p>
    </div>
  )
}
