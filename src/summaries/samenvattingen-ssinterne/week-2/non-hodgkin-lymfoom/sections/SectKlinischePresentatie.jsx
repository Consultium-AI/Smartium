import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische presentatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een non-Hodgkin lymfoom kan zich op verschillende manieren presenteren. Vaak zijn er vergrote lymfeklieren die meestal niet pijnlijk zijn. Daarnaast kunnen er algemene klachten zijn, zoals vermoeidheid, nachtzweten en onbedoeld gewichtsverlies. Zulke klachten passen bij een systemische ziekte en zijn klinisch relevant.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met deze klachten denk je dus niet alleen aan een lokale oorzaak, maar ook aan een lymfoom. De combinatie van niet-pijnlijke lymfeklierzwellingen en zogenaamde B-symptomen, zoals nachtzweten en gewichtsverlies, maakt de verdenking op een lymfoom sterker.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom zijn niet-pijnlijke lymfeklieren belangrijk?
**Mini-antwoord:** omdat dit past bij een lymfoom en minder bij een acute ontsteking.`} />
    </div>
  )
}
