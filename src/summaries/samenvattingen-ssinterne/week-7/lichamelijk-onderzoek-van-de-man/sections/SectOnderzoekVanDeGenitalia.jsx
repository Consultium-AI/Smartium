import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Onderzoek van de genitalia`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het onderzoek van de genitalia kan liggend of staand worden gedaan, maar de liggende houding heeft vaak de voorkeur. Dat is prettiger bij pijn, bijvoorbeeld bij een torsio testis of epididymitis, en de patiënt kan dan ook vasovagaal worden. Draag altijd handschoenen.`}</Inline></p>
      <SubHeading><Inline>{`Inspectie van penis en scrotum`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij inspectie kijk je eerst naar de penis. Let op huidafwijkingen en vormafwijkingen. Trek, als dat mogelijk is, het preputium terug. Inspecteer altijd de glans penis en het ostium urethrae op roodheid, afscheiding, epispadie of hypospadie. Kijk ook naar de huid aan voor- en achterzijde op roodheid, schilfering of fistelopeningen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarna onderzoek je het scrotum. Om de scrotuminhoud goed te kunnen beoordelen bij een liggende patiënt, breng je een hand onder het scrotum zodat het hele scrotum op de hand rust. Vervolgens palpeer je tussen de vingertoppen van beide handen de testis, epididymis en funiculus. Vergelijk links en rechts. Wees voorzichtig, want deze structuren kunnen ook normaal gevoelig zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de testis moeilijk te voelen is door vochtophoping, kun je diafanie gebruiken. In een donkere kamer houd je een fel lampje achter het scrotum. Helder vocht, zoals bij een hydrocele, laat het licht gelijkmatig door. Pus, bloed of weefsel doen dat niet.`}</Inline></p>
      <SubHeading><Inline>{`Veelvoorkomende afwijkingen van de genitalia`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een paraphimosis is een spoedsituatie. Hierbij is een vernauwde voorhuid over de glans penis geschoven en kan deze niet meer worden teruggeschoven. De voorhuid zwelt op als een soort “Spaanse kraag”. Als dit blijft bestaan, kan de glans penis necrotisch worden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Lichen sclerosus van het preputium herken je aan velden van ontsteking en sclerose: rood en wit verkleurd weefsel. Daardoor kan de voorhuid vernauwen en niet meer over de glans penis schuiven; er ontstaat dan een fimosis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een varicocèle is een ophoping van verwijde aderen in het scrotum. Dit ontstaat door insufficiënte kleppen in de vena spermatica, waardoor veneus bloed terugstroomt. Het beeld is vaak duidelijker in staande houding. Een varicocèle kan leiden tot vertraagde groei van de testis en verminderde testisfunctie en komt vaker voor bij mannen met vruchtbaarheidsproblemen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een torsio testis ontstaat wanneer de testis om zijn eigen funiculus draait en zo de bloedvoorziening afknelt. Dit geeft acute scrotale pijn. De patiënt wordt vaak wakker met heftige pijn in de lies, misselijkheid en braken. Bij onderzoek is de testis zeer pijnlijk, verdikt en hoog in het scrotum gelegen. Dit is een spoedsituatie, omdat de testis binnen enkele uren kan afsterven.`}</Inline></p>
    </div>
  )
}
