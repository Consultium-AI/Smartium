import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke screeningsmethoden zijn er?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn drie hoofdgroepen screeningsmethoden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Ontlastingstesten**`}</Inline></li>
        <li><Inline>{`gFOBT`}</Inline></li>
        <li><Inline>{`FIT`}</Inline></li>
        <li><Inline>{`DNA-test`}</Inline></li>
        <li><Inline>{`**Scopieën**`}</Inline></li>
        <li><Inline>{`sigmoidoscopie`}</Inline></li>
        <li><Inline>{`coloscopie`}</Inline></li>
        <li><Inline>{`**CT-colonografie**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Ontlastingstesten`}</Inline></SubHeading>
      <PBody text={`De **gFOBT** en de **FIT** detecteren beide bloed in de ontlasting. Het verschil is dat:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gFOBT de **haemgroep** van hemoglobine detecteert;`}</Inline></li>
        <li><Inline>{`FIT het **globinegedeelte** detecteert.`}</Inline></li>
      </ul>
      <PBody text={`Daardoor is de **FIT gevoeliger** dan de gFOBT voor humaan bloed. Wereldwijd wordt de gFOBT daarom steeds vaker vervangen door de FIT.`} />
      <PBody text={`Bij een **positieve ontlastingstest** volgt altijd een **coloscopie**.`} />
      <PBody text={`Er bestaat ook een **DNA-ontlastingstest**, maar die is duur en doet het op dit moment niet beter dan de FIT. Daarom heeft deze test geen plaats in het Nederlandse bevolkingsonderzoek.`} />
      <SubHeading><Inline>{`Scopieën`}</Inline></SubHeading>
      <PBody text={`De beste test om darmkanker en advanced adenomen op te sporen is de **coloscopie**. Daarbij wordt de hele darm bekeken en kunnen biopten worden afgenomen.`} />
      <PBody text={`Een **sigmoidoscopie** kijkt alleen naar het linkerdeel van het colon. Omdat de meeste darmkankers zich in het linkzijdige colon bevinden, kan dit ook een bruikbare screeningsmethode zijn. Het onderzoek en de voorbereiding worden minder belastend ervaren dan bij een volledige coloscopie.`} />
      <SubHeading><Inline>{`CT-colonografie`}</Inline></SubHeading>
      <PBody text={`Een **CT-colonografie** is een CT-scan van het colon. Daarmee kun je poliepen of darmkanker opsporen, maar:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`je kunt geen onderscheid maken tussen hyperplastische en adenomateuze poliepen;`}</Inline></li>
        <li><Inline>{`bij poliepen kleiner dan **6 mm** neemt de nauwkeurigheid af.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 4. Overzicht screeningsmethoden`}</Inline></SubHeading>
      <DataTable rows={[["Methode", "Belangrijk kenmerk"], ["gFOBT", "Detecteert bloed in ontlasting"], ["FIT", "Detecteert bloed in ontlasting, gevoeliger dan gFOBT"], ["DNA-test", "Geen plaats in huidig Nederlands bevolkingsonderzoek"], ["Sigmoidoscopie", "Bekijkt alleen linkerdeel colon"], ["Coloscopie", "Bekijkt hele darm, beste test"], ["CT-colonografie", "Minder geschikt voor kleine poliepen en typeonderscheid"]]} />
    </div>
  )
}
