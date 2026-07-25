import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casuïstiek: denkstappen bij een comateuze patiënt`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met verlaagd bewustzijn begin je altijd met vragen aan de omgeving. Je wilt weten waar de patiënt is gevonden, hoe het beloop was, of er trauma was, welke ziekten bekend zijn en welke medicatie of middelen worden gebruikt. In een casus met depressie en chronische pijnklachten zijn dat activerende gegevens die kunnen wijzen op een intoxicatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarna stabiliseer je volgens ABCDE. Een snurkende ademhaling betekent dat de luchtweg bedreigd is, omdat de tongbasis naar achteren zakt bij bewusteloosheid. Dan geef je zuurstof, plaats je zo nodig een Mayo-tube en vraag je hulp van anesthesioloog of intensivist.`}</Inline></p>
      <PBody text={`Bij verdere beoordeling let je op circulatie, glucose, pupillen, uitval en reflexen. **Pinpoint pupillen** maken een intoxicatie waarschijnlijker. Bij een opiaatintoxicatie past hypoventilatie met respiratoire acidose, terwijl de saturatie door zuurstof soms nog normaal kan zijn. Een proefbehandeling met **naloxon** kan de diagnose ondersteunen. Naloxon werkt snel intraveneus en moet voorzichtig getitreerd worden: de patiënt hoeft alleen weer zelf te ademen, niet volledig wakker te zijn.`} />
    </div>
  )
}
