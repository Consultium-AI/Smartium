import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Granulomen en ontsteking`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een granuloom ontstaat door een afwijkende immuunreactie. De precieze oorzaak van sarcoïdose is niet bekend, maar er wordt gedacht aan een combinatie van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`omgevingsfactoren`}</Inline></li>
        <li><Inline>{`infectieuze prikkels`}</Inline></li>
        <li><Inline>{`endogene eiwitten`}</Inline></li>
        <li><Inline>{`genetische aanleg`}</Inline></li>
      </ul>
      <PBody text={`Het histologische kenmerk is de **niet-caseating granulomateuze ontsteking**. “Non-caseating” betekent dat er geen kaasachtige necrose in het granuloom zit. Zo’n granuloom bestaat uit dicht opeengepakte **macrofagen**, die vaak samensmelten tot **meerkernige reuscellen**. Daarnaast zie je **CD4+ T-helpercellen**, regulatoire T-cellen, fibroblasten en B-cellen. Dat laat zien dat zowel de aangeboren als de verworven afweer meedoet.`} />
      <SubHeading><Inline>{`Tabel 1. Kenmerken van het granuloom bij sarcoïdose`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Uitleg"], ["Niet-necrotiserend", "Geen weefselafsterving in het granuloom"], ["Macrofagen", "Belangrijkste opbouwende cellen"], ["Meerkernige reuscellen", "Ontstaan door fusie van macrofagen"], ["CD4+ T-helpercellen", "Onderdeel van de immuunreactie"], ["Fibrose", "Kan later ontstaan en klachten geven"]]} />
    </div>
  )
}
