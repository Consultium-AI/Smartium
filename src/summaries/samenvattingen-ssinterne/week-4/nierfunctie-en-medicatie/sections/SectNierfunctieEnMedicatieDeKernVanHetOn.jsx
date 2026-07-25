import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nierfunctie en medicatie: de kern van het onderwerp`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze stof laat zien dat nierfunctie en medicatie elkaar sterk beïnvloeden. Aan de ene kant kan medicatie zelf nierfunctiestoornissen veroorzaken. Aan de andere kant kan een verminderde nierfunctie ervoor zorgen dat geneesmiddelen minder goed worden uitgescheiden, waardoor ze zich in het lichaam opstapelen. Dat kan leiden tot bijwerkingen of toxiciteit. Soms werkt een middel juist minder goed als de nierfunctie slecht is, bijvoorbeeld omdat het niet meer voldoende in de urine terechtkomt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De belangrijkste les is dus: bij nierfunctiestoornissen moet je altijd nadenken over de keuze van het middel, de dosering en de kans op interacties.`}</Inline></p>
    </div>
  )
}
