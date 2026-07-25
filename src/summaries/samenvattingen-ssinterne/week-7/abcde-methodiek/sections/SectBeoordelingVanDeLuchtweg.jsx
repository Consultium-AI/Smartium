import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beoordeling van de luchtweg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je beoordeelt de luchtweg door te kijken, luisteren, voelen en zo nodig te monitoren.`}</Inline></p>
      <SubHeading><Inline>{`Kijken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`reageert de patiënt op aanspreken?`}</Inline></li>
        <li><Inline>{`is de patiënt comateus?`}</Inline></li>
        <li><Inline>{`zijn er zichtbare oorzaken van obstructie, zoals:`}</Inline></li>
        <li><Inline>{`trauma`}</Inline></li>
        <li><Inline>{`bloed`}</Inline></li>
        <li><Inline>{`braaksel`}</Inline></li>
        <li><Inline>{`los kunstgebit`}</Inline></li>
        <li><Inline>{`corpus alienum`}</Inline></li>
        <li><Inline>{`zwelling of oedeem`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij verminderd bewustzijn hoort inspectie van de mond- en keelholte altijd bij de beoordeling.`}</Inline></p>
      <SubHeading><Inline>{`Luisteren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Let op geluiden die passen bij luchtwegobstructie:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**stridor**: inspiratoire bijgeluiden door vernauwing van de luchtweg`}</Inline></li>
        <li><Inline>{`**snurken**`}</Inline></li>
        <li><Inline>{`**rochelen**`}</Inline></li>
        <li><Inline>{`**heesheid** of een afwijkende stem`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Voelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Met de handrug kun je luchtverplaatsing bij de mond voelen.`}</Inline></p>
      <SubHeading><Inline>{`Monitoring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Indirecte monitoring van de luchtweg kan met capnografie, maar dat valt buiten de basis van deze methode.`}</Inline></p>
    </div>
  )
}
