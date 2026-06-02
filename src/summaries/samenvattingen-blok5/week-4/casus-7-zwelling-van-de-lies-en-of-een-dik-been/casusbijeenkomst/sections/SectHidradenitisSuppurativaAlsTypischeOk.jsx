import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Hidradenitis suppurativa als typische okselaandoening`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hidradenitis suppurativa is een chronische aandoening die vaak in de oksels voorkomt. Het beloop is recidiverend. Je ziet inflammatoire noduli en soms comedonen. Een roker heeft een verhoogde kans. De laesie kan pijnlijk zijn en terugkomen op dezelfde of andere plekken.`}</Inline></p>
    </div>
  )
}
