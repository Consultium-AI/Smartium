import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek van de man zijn het liesgebied, de genitalia en het rectaal onderzoek belangrijk. Je moet de anatomie kennen, systematisch onderzoeken en afwijkingen kunnen herkennen. De epididymis is de plaats van uitrijping van zaadcellen, de penis bestaat uit twee corpora cavernosa en één corpus spongiosum, en de vesicula seminalis maakt sperma-vloeistof.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In het liesgebied zijn een scrotaalbreuk en een hydrocele communicans belangrijke afwijkingen die passen bij een open verbinding tussen buikholte en scrotum. Een scrotaalbreuk kan beklemd raken en spoedproblemen geven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij onderzoek van de genitalia let je op huid, vorm, glans, meatus en scrotuminhoud. Belangrijke afwijkingen zijn paraphimosis, lichen sclerosus, varicocèle en torsio testis. Vooral paraphimosis en torsio testis zijn spoedsituaties.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het rectaal onderzoek bestaat uit inspectie en toucher. Je onderzoekt de anus, het rectum en de prostaat, in een houding die past bij de patiënt en de situatie. De prostaat kent verschillende zones: het adenoom zit vooral in de transitional zone, terwijl prostaatcarcinoom meestal ontstaat in de peripheral zone. T1 is niet voelbaar, T2 wel voelbaar, T3 groeit buiten de prostaat en T4 is vergevorderd en niet curabel.`}</Inline></p>
    </div>
  )
}
