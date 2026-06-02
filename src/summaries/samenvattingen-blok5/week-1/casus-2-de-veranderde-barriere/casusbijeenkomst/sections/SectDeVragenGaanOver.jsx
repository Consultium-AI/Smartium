import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De vragen gaan over:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ooit gezwollen gewrichten`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`putjes of kuiltjes in vingernagels of teennagels`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`ooit de diagnose artritis gekregen`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`hielpijn`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`een vinger of teen die helemaal gezwollen en pijnlijk was zonder duidelijke oorzaak`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is de PEST-score handig?
**Kort antwoord:** Omdat je daarmee snel kunt inschatten of psoriasis ook gewrichtsbetrokkenheid heeft.`} />
    </div>
  )
}
