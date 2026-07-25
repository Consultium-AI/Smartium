import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Start van de behandeling na objectieve diagnose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn twee hoofdopties:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Start met een DOAC**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Soms met en soms zonder voorafgaand LMWH, afhankelijk van het middel.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Start met LMWH en een vitamine K-antagonist**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`LMWH wordt dan 5 tot 7 dagen gegeven en de VKA wordt tegelijk gestart. De LMWH wordt doorgezet totdat de INR twee dagen adequaat is.`}</Inline></p>
    </div>
  )
}
