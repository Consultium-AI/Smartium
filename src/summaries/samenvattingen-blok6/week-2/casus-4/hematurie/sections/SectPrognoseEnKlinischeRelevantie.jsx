import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prognose en klinische relevantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Blaaskanker komt vooral voor op oudere leeftijd, met een piek tussen 60 en 75 jaar. De man-vrouwverhouding is ongeveer 3:1. Toch worden vrouwen vaak later gediagnosticeerd, omdat hematurie bij hen sneller wordt aangezien voor een urineweginfectie. Daardoor kan vertraging ontstaan in het diagnostisch proces.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling en follow-up van blaaskanker zijn intensief en vaak langdurig, soms zelfs levenslang. Dat maakt blaaskanker ook een kostbare ziekte in de zorg.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De prognose hangt sterk af van het stadium. Na radicale cystectomie is de 10-jaars overleving ongeveer:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`30% bij pT3bN0M0;`}</Inline></li>
        <li><Inline>{`20% bij pT4aN0;`}</Inline></li>
        <li><Inline>{`10% bij lymfeklieruitzaaiingen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat laat zien hoe belangrijk vroege herkenning en goede stadiëring zijn.`}</Inline></p>
    </div>
  )
}
