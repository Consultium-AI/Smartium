import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus: acute nierschade bij een vrouw met maligniteitsvoorgeschiedenis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een 68-jarige vrouw presenteert zich met acuut nierfunctieverlies. Ze heeft geen pijn, maar wel een voorgeschiedenis van gynaecologische maligniteit en de urineproductie is afgenomen. In zo’n situatie is een echo logisch om postrenale obstructie uit te sluiten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Waarom juist hier? Omdat een voorgeschiedenis van gynaecologische maligniteit het risico verhoogt op uretercompressie door tumorrecidief of fibrose. Ureters zijn de urineleiders die urine van de nier naar de blaas vervoeren. Als die worden dichtgedrukt, kan urine niet goed weg en ontstaat hydronefrose.`}</Inline></p>
      <SubHeading><Inline>{`Wat verwacht je op de echo bij postrenale obstructie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een obstructie verwacht je meestal:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verwijding van het pyelum en de calices;`}</Inline></li>
        <li><Inline>{`mogelijk bilaterale hydronefrose als beide ureters zijn afgesloten;`}</Inline></li>
        <li><Inline>{`een overvolle blaas bij een lagere obstructie;`}</Inline></li>
        <li><Inline>{`vergrote nieren bij acute obstructie.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 4. Echo-bevindingen bij postrenale obstructie`}</Inline></SubHeading>
      <DataTable rows={[["Bevinding", "Betekenis"], ["Verwijd pyelum en calices", "Past bij hydronefrose"], ["Bilaterale hydronefrose", "Obstructie van beide ureters mogelijk"], ["Overvolle blaas", "Kan wijzen op lagere obstructie"], ["Vergrote nieren", "Kan passen bij acute obstructie"]]} />
    </div>
  )
}
