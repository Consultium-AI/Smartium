import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leefregels, zelfzorg en monitoring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Naast medicatie is zelfzorg heel belangrijk. Patiënten kunnen veel zelf doen om klachten te verminderen en ziekenhuisopnames te voorkomen.`}</Inline></p>
      <SubHeading><Inline>{`Leefregels`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Belangrijke leefregels zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`zout beperken tot maximaal 5 gram per dag;`}</Inline></li>
        <li><Inline>{`bewerkte voedingsmiddelen en extra zout vermijden;`}</Inline></li>
        <li><Inline>{`vochtbeperking alleen bij instabiele patiënten of bij vochtretentie, meestal 1,5–2 liter per dag;`}</Inline></li>
        <li><Inline>{`dagelijks wegen, liefst ’s ochtends;`}</Inline></li>
        <li><Inline>{`matig bewegen, bijvoorbeeld wandelen of fietsen;`}</Inline></li>
        <li><Inline>{`stoppen met roken;`}</Inline></li>
        <li><Inline>{`alcohol zoveel mogelijk beperken.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een gewichtstoename van meer dan 2 kg in 2–3 dagen kan wijzen op vochtretentie.`}</Inline></p>
      <SubHeading><Inline>{`Monitoring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de beginfase controleer je vaker, meestal elke 1–2 weken na starten of aanpassen van medicatie. Dan let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`symptomen van verslechtering;`}</Inline></li>
        <li><Inline>{`nierfunctie en elektrolyten;`}</Inline></li>
        <li><Inline>{`bloeddruk;`}</Inline></li>
        <li><Inline>{`gewicht.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij stabiele patiënten kunnen controles afnemen tot elke 3–6 maanden. Dagelijks wegen blijft wel belangrijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De hartfalenverpleegkundige of verpleegkundig specialist speelt hierbij een grote rol. Die bewaakt symptomen, geeft voorlichting, ondersteunt therapietrouw en is vaak het eerste aanspreekpunt voor de patiënt.`}</Inline></p>
      <SubHeading><Inline>{`Telemonitoring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Telemonitoring helpt om verslechtering vroeg te herkennen. Patiënten kunnen thuis gewicht, bloeddruk en zuurstofsaturatie meten en doorgeven. Dat maakt snelle reactie mogelijk en kan ziekenhuisopnames verminderen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er zijn non-invasieve vormen, zoals slimme weegschalen, bloeddrukmeters, pulse-oximeters en apps. Er zijn ook invasieve vormen, zoals sensoren of informatie vanuit pacemakers en ICD’s. Telemonitoring ondersteunt ook zelfzorg en therapietrouw.`}</Inline></p>
    </div>
  )
}
