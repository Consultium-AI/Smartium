import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 4: de elektrische hartas`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De elektrische hartas is de richting van de gemiddelde elektrische vector van het hart in het frontale vlak. Je bepaalt die met behulp van de afleidingen I en aVF, en zo nodig II.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De normale hartas ligt tussen -30° en +90°.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Normale as**: 0° tot +90° of -30° tot 0°`}</Inline></li>
        <li><Inline>{`**Rechteras**: +90° tot +180°`}</Inline></li>
        <li><Inline>{`**Linkeras**: -30° tot -90°`}</Inline></li>
        <li><Inline>{`**Extreme as**: -90° tot +180°`}</Inline></li>
        <li><Inline>{`**Onbepaalde as**: als alle afleidingen ongeveer even positief als negatief zijn`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De snelle methode is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`I positief = as naar links`}</Inline></li>
        <li><Inline>{`I negatief = as naar rechts`}</Inline></li>
        <li><Inline>{`aVF positief = as naar beneden`}</Inline></li>
        <li><Inline>{`aVF negatief = as naar boven`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als I positief en aVF negatief zijn, kijk je naar II om te onderscheiden tussen normale as en linkeras.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Snelle bepaling van de hartas`}</Inline></SubHeading>
      <DataTable rows={[["I", "aVF", "II", "Hartas"], ["+", "+", "-", "Normale as"], ["-", "+", "-", "Rechteras"], ["-", "-", "-", "Extreme as"], ["+", "-", "+", "Normale as"], ["+", "-", "-", "Linkeras"]]} />
    </div>
  )
}
