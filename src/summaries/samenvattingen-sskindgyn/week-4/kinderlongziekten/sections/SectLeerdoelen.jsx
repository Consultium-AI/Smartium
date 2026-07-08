import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de ademhaling van een kind beschrijven en de mate van dyspnoe herkennen, beschrijven en interpreteren;`}</Inline></li>
        <li><Inline>{`vitale parameters van kinderen van 0 tot 16 jaar interpreteren;`}</Inline></li>
        <li><Inline>{`alarmsymptomen van een acuut benauwd kind benoemen;`}</Inline></li>
        <li><Inline>{`bijgeluiden bij auscultatie van de longen herkennen en interpreteren, zoals crepitaties, rhonchi en wheezing;`}</Inline></li>
        <li><Inline>{`een inspiratoire stridor onderscheiden van een expiratoire stridor;`}</Inline></li>
        <li><Inline>{`onderscheid maken tussen een hoge en lage luchtwegobstructie;`}</Inline></li>
        <li><Inline>{`de Westley-Croup-score benoemen en toepassen;`}</Inline></li>
        <li><Inline>{`een differentiaaldiagnose opstellen bij een benauwd kind;`}</Inline></li>
        <li><Inline>{`de symptomen, lichamelijke afwijkingen, etiologie, diagnostiek en behandeling van astma, bronchiolitis en laryngitis subglottica benoemen;`}</Inline></li>
        <li><Inline>{`basale kennis van inhalatietherapie benoemen.`}</Inline></li>
      </ul>
    </div>
  )
}
