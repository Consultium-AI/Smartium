import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Longtransplantatie is een levensverlengende behandeling voor patiënten met een ernstige, irreversibele longziekte die ondanks maximale behandeling verder achteruitgaat. Belangrijke indicaties zijn onder andere longemfyseem, longfibrose, pulmonale arteriële hypertensie en cystische fibrose. Astma is in de regel geen indicatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een patiënt komt pas in aanmerking als er een sluitende diagnose is, de ziekte ondanks maximale behandeling progressief blijft, de conditie nog voldoende is en er geen absolute contra-indicaties zijn. Absolute contra-indicaties zijn bijvoorbeeld actief roken, harddrugsgebruik, therapieontrouw en ernstig nierfalen. Na transplantatie is afstoting een belangrijk risico, waardoor levenslange afweerremming nodig is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Na transplantatie zijn complicaties mogelijk, zoals infecties, nierfunctiestoornissen, vaatlijden, nabloeding en problemen met de anastomose. De prognose is verbeterd, maar CLAD en sepsis blijven belangrijke oorzaken van overlijden. Door de schaarste aan donorlongen worden ook nieuwe technieken zoals EVLP gebruikt om marginale donorlongen beter te beoordelen en soms toch geschikt te maken.`}</Inline></p>
    </div>
  )
}
