import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aanvullend onderzoek bij de vrouw`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Aanvullend onderzoek bij de vrouw is vooral gericht op twee vragen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`is er een eisprong?`}</Inline></li>
        <li><Inline>{`is er tubapathologie, dus afwijking van de eileiders?`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Ovulatie aantonen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een regelmatige cyclus van 21 tot 35 dagen is vrijwel altijd ovulatoir. Daarom is ovulatiedetectie meestal niet nodig binnen het oriënterend fertiliteitsonderzoek.`}</Inline></p>
      <PBody text={`Als je de eisprong toch wilt aantonen, kan dat met progesteronbepaling. Dat prik je **midluteaal**, omdat progesteron na de ovulatie stijgt en dan zijn piek bereikt.`} />
      <p className="leading-relaxed"><Inline>{`Bij een onregelmatige cyclus, of als progesteron herhaaldelijk onvoldoende stijgt, kun je cyclusmonitoring met echografie doen. Dan volg je de groei van de follikels en de dikte van het endometrium. Op basis daarvan kun je alsnog een midluteale progesteronbepaling doen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom prik je progesteron midluteaal?
**Mini-antwoord:** Omdat progesteron na de ovulatie stijgt en midluteaal het hoogst is.`} />
      <SubHeading><Inline>{`Tubapathologie aantonen of uitsluiten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tubapathologie kan ontstaan na:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een doorgemaakte soa;`}</Inline></li>
        <li><Inline>{`PID;`}</Inline></li>
        <li><Inline>{`chirurgie in het kleine bekken;`}</Inline></li>
        <li><Inline>{`appendicitis.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een Chlamydia antistoftiter in serum wordt gebruikt om patiënten met een hoog of laag risico op tubapathologie in te schatten. De test heeft een sensitiviteit van 66% en een specificiteit van 70% voor bilaterale tubapathologie. Een positieve uitslag betekent dat aanvullende tubadiagnostiek nodig is. Ook als er uiteindelijk geen tubapathologie wordt aangetoond, wijst een positieve CAT toch op een verlaagde kans op zwangerschap.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Invasieve diagnostiek wordt alleen gedaan bij een hoog risico op tubapathologie, bijvoorbeeld bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een positieve CAT;`}</Inline></li>
        <li><Inline>{`een voorgeschiedenis met soa of PID;`}</Inline></li>
        <li><Inline>{`chirurgie in het kleine bekken.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De meest gebruikte onderzoeken zijn hysterosalpingografie en diagnostische laparoscopie met tubatest.`}</Inline></p>
      <SubHeading><Inline>{`Hysterosalpingografie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een hysterosalpingografie wordt de baarmoeder en de eileiders zichtbaar gemaakt met contrastvloeistof en röntgenfoto’s. Hiermee kun je zien of de eileiders doorgankelijk zijn en kun je ook afwijkingen van de baarmoederholte opsporen.`}</Inline></p>
      <SubHeading><Inline>{`Diagnostische laparoscopie met tubatest`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een diagnostische laparoscopie kijk je met een kijkoperatie in de buik naar de genitalia interna. De doorgankelijkheid van de eileiders wordt getest door methyleenblauw door te spuiten. Dit wordt gezien als de gouden standaard voor het aantonen of uitsluiten van tubapathologie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het voordeel van laparoscopie is dat kleine afwijkingen, zoals milde endometriose, direct behandeld kunnen worden. Ook kun je andere afwijkingen in de buik zien. Bij ernstige endometriose, gecompliceerde buikoperaties, intra-abdominale ontstekingen of echografisch zichtbare hydrosalpingen wordt direct voor laparoscopie gekozen.`}</Inline></p>
      <PBody text={`Een bekende afwijking die hierbij genoemd wordt is **Fitz-Hugh-Curtis**, verklevingen rond de lever die veroorzaakt worden door chlamydia.`} />
    </div>
  )
}
