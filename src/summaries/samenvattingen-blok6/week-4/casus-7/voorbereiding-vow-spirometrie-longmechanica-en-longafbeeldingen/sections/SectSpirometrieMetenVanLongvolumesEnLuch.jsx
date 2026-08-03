import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Spirometrie: meten van longvolumes en luchtstromen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Spirometrie is een basis longfunctieonderzoek waarmee stoornissen in ventilatie kunnen worden opgespoord. Daarbij meet je longvolumes en luchtstromen tijdens in- en uitademing. Dat kan onder rustige omstandigheden, maar ook geforceerd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een rustige, langzame meting krijg je informatie over volumes zoals het teugvolume, de vitale capaciteit en de inspiratoire en expiratoire reservevolumes. Bij een geforceerde meting krijg je vooral informatie over de dynamische luchtstroom en over mogelijke obstructie.`}</Inline></p>
      <SubHeading><Inline>{`Van klassieke spirometer naar digitale spirometrie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vroeger werd een spirometer vaak voorgesteld als een omgekeerde klok in een bak met water. Als iemand ademde, bewoog die klok op en neer. Die beweging werd via een pen op een draaiende trommel geregistreerd. De grootte van de beweging kwam overeen met het luchtvolume.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Moderne spirometers zijn digitale elektronische apparaten. Ze gebruiken flow-sensoren, zoals een turbine, pneumotachograaf of ultrasone sensor. Daarmee meten ze de luchtstroomsnelheid en berekenen daaruit het volume.`}</Inline></p>
      <SubHeading><Inline>{`Spirogram en flow-volumecurve`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De gemeten waarden kunnen op twee manieren worden weergegeven:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`in een spirogram: volume tegen de tijd;`}</Inline></li>
        <li><Inline>{`in een flow-volumecurve: flow tegen het uitgeademde volume.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Beide vormen horen bij elkaar en zijn van elkaar af te leiden. De flow-volumecurve is vooral handig om patronen van obstructie te herkennen.`}</Inline></p>
    </div>
  )
}
