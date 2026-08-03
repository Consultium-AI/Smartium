import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Recidief en preventie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een primaire spontane pneumothorax is de kans op recidief ongeveer 25%. Daarom kan een pleurodese worden overwogen. Dat kan chemisch met steriele talkslurry via een drain. Omdat dit pijnlijk kan zijn, gebeurt het vaak onder anesthesie met een epiduraalkatheter. Daarmee daalt de recidiefkans tot ongeveer 7%.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een thoraxchirurg kan dit ook via VATS doen, met pleurabrasie en chemische pleurodese. Dan daalt de recidiefkans nog verder, tot ongeveer 1%.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een secundaire spontane pneumothorax is de recidiefkans meestal groter dan 50%. Daarom moeten de mogelijkheden en de gevolgen van behandeling goed met de patiënt worden besproken. De keuze hangt af van de conditie van de patiënt, de onderliggende ziekte en de persoonlijke wensen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Sommige beroepen en situaties maken een recidief extra ongunstig, zoals bij commerciële piloten of mensen die ver weg willen reizen. Dan wordt vaker gekozen voor een ingreep om de kans op herhaling te verkleinen.`}</Inline></p>
    </div>
  )
}
