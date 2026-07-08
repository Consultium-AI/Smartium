import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Neonatale screening: waarom de hielprik zo belangrijk is`}</Inline></SubHeading>
      <PBody text={`De hielprikscreening in Nederland is bedoeld om ernstige aandoeningen vroeg op te sporen, zodat behandeling op tijd kan starten. De organisatie ligt bij het **RIVM**.`} />
      <p className="leading-relaxed"><Inline>{`De screening is in de loop van de tijd uitgebreid. Oorspronkelijk draaide het vooral om aandoeningen met een duidelijke ontwikkelingsbeperking, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**PKU**: met dieetbehandeling kan een normale intelligentie worden bereikt;`}</Inline></li>
        <li><Inline>{`**congenitale hypothyreoïdie**: behandeling met schildklierhormoon voorkomt ontwikkelingsproblemen;`}</Inline></li>
        <li><Inline>{`later kwamen ook andere ernstige aandoeningen erbij, zoals **adrenogenitaal syndroom** en screening op **doofheid**.`}</Inline></li>
      </ul>
      <PBody text={`In 2007 volgde een grote uitbreiding. In 2017 werd opnieuw besloten de screening gefaseerd uit te breiden. Inmiddels wordt op **25 aandoeningen** gescreend.`} />
    </div>
  )
}
