import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`5. E-scaped / informational medicine: de zieke mens als databron`}</Inline></SubHeading>
      <PBody text={`Sarah Nettleton voegde later een vijfde kosmologie toe: **e-scaped medicine**, ook wel **informational medicine** genoemd. Hier spelen informatie- en communicatietechnologieën een centrale rol. Denk aan internet, algoritmes, digitale protocollen en databanken.`} />
      <PBody text={`Het lichaam wordt in deze benadering gezien als een **informatieverwerkend systeem**. Medische kennis ontstaat steeds meer uit digitale gegevensstromen. De nadruk ligt op **evidence-based medicine**, op het snel vinden en toepassen van betrouwbare informatie, en op het werken met digitale sjablonen en schermen.`} />
      <PBody text={`De patiënt krijgt ook hier een nieuwe rol. Mensen kunnen zelf veel informatie opzoeken en soms uitgroeien tot **expertpatiënten**. Tegelijk kan de overvloed aan informatie ook verwarrend zijn. De individuele patiënt wordt onderdeel van een databank en verschijnt als een bron van informatie voor voorspellingen en risicoprofielen.`} />
      <PBody text={`Deze vorm van geneeskunde bouwt voort op surveillance medicine, maar gaat nog verder in de richting van **digitale data, voorspelling en personalisering**. Dat past goed bij de opkomst van **precision medicine**.`} />
      <PBody text={`**Kern van e-scaped / informational medicine**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lichaam als **databron** en informatieverwerkend systeem;`}</Inline></li>
        <li><Inline>{`nadruk op **big data**, biomarkers en digitale monitoring;`}</Inline></li>
        <li><Inline>{`patiënt als **digitale zorgconsument** of expertpatiënt;`}</Inline></li>
        <li><Inline>{`herkenbaar in predictiemodellen, algoritmen en precisiegeneeskunde.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
