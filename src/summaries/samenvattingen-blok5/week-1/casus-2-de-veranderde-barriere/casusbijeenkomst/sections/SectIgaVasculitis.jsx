import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed"><Inline>{`De casus met Bram, een kind met multiple palpabele purpura op de onderbenen en voetruggen, past bij **IgA-vasculitis**. Dit heet ook wel Henoch-Schönlein purpura.`}</Inline></p>
    </div>
  )
}
