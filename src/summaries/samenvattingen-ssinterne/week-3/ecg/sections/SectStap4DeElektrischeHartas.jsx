import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 4: De elektrische hartas`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De elektrische hartas is de gemiddelde richting van de elektrische activiteit in het frontale vlak. Je bepaalt deze met de afleidingen I en aVF, en soms ook II.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Positieve uitslag in I betekent dat de as naar links wijst.`}</Inline></li>
        <li><Inline>{`Negatieve uitslag in I betekent dat de as naar rechts wijst.`}</Inline></li>
        <li><Inline>{`Positieve uitslag in aVF betekent dat de as naar beneden wijst.`}</Inline></li>
        <li><Inline>{`Negatieve uitslag in aVF betekent dat de as naar boven wijst.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 3. Hartas bepalen`}</Inline></SubHeading>
      <DataTable rows={[["Afleiding I", "Afleiding aVF", "Afleiding II", "Interpretatie"], ["+", "+", "", "Normale as"], ["-", "+", "", "Rechteras"], ["-", "-", "", "Extreme as"], ["+", "-", "+", "Normale as"], ["+", "-", "-", "Linkeras"]]} />
      <p className="leading-relaxed"><Inline>{`De normale hartas ligt tussen -30° en +90°. Tussen +90° en +180° spreek je van een rechteras. Tussen -30° en -90° is er een linkeras. Een extreme as ligt nog verder afwijkend. Als alle afleidingen ongeveer even positief als negatief zijn, spreek je van een onbepaalde as.`}</Inline></p>
    </div>
  )
}
