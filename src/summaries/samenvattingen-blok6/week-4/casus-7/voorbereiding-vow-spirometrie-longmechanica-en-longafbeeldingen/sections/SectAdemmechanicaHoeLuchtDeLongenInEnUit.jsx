import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ademmechanica: hoe lucht de longen in en uit gaat`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De longen staan niet direct vast aan de borstkas. Tussen beide zit de intrapleurale ruimte, een heel dunne ruimte tussen het viscerale en pariëtale pleura, gevuld met een kleine hoeveelheid pleuravocht. Omdat long en borstkas als het ware in tegengestelde richting aan elkaar trekken, is de intrapleurale druk lager dan de barometrische druk. Je kunt dit zien als een soort relatief vacuüm.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De rustademhaling is vooral een passief proces. De luchtstroom ontstaat door drukverschillen: lucht beweegt altijd van een hogere naar een lagere druk. De veranderingen in thoracaal volume en intrathoracale druk bepalen dus of lucht naar binnen of naar buiten stroomt.`}</Inline></p>
      <SubHeading><Inline>{`Inspiratie en expiratie in rust`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij inspiratie is de ademhaling actief. De belangrijkste spieren zijn het diafragma en de externe intercostale spieren.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Het diafragma trekt samen en zakt naar beneden, waardoor de thoracale holte groter wordt.`}</Inline></li>
        <li><Inline>{`De externe intercostale spieren trekken de ribben omhoog en naar buiten, waardoor de borstkas verder uitzet.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Door die volumetoename daalt de intrapleurale druk nog verder. Daardoor wordt de alveolaire druk lager dan de atmosferische druk en stroomt lucht de longen in.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij expiratie in rust is het omgekeerde het geval. Dan ontspant het diafragma en ontspannen de externe intercostale spieren. De longen en borstkas veren terug door hun elastische eigenschappen. Daardoor neemt het thoracale volume af, stijgt de alveolaire druk boven de atmosferische druk en stroomt lucht passief naar buiten.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom stroomt lucht eigenlijk de longen in?
**Mini-antwoord:** omdat de druk in de alveoli lager wordt dan de druk buiten het lichaam.`} />
      <SubHeading><Inline>{`Geforceerde expiratie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij inspanning, hoesten of een geforceerde uitademing is expiratie niet meer passief. Dan worden de expiratoire spieren actief gebruikt:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de buikspieren, zoals m. rectus abdominis en de schuine buikspieren, verhogen de intra-abdominale druk en duwen het diafragma omhoog;`}</Inline></li>
        <li><Inline>{`de interne intercostale spieren trekken de ribben naar beneden en naar binnen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hierdoor daalt het thoracale volume sneller en sterker. De intrapleurale en alveolaire druk kunnen dan duidelijk boven de atmosferische druk uitkomen, waardoor een krachtige luchtstroom ontstaat. Dat is belangrijk bij bijvoorbeeld hoesten en bij spirometrie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij zeer geforceerde uitademing kan de intrathoracale druk zelfs positief worden. Dan kunnen de luchtwegen samengedrukt raken: dit heet dynamische luchtwegcompressie. Daardoor wordt de maximale uitademingssnelheid begrensd en dat zie je terug in de flow-volumecurve.`}</Inline></p>
    </div>
  )
}
