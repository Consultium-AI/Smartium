import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Röntgenfoto’s: de basis van medische beeldvorming`}</Inline></SubHeading>
      <PBody text={`Röntgenfoto’s vormen de oudste en nog steeds veelgebruikte vorm van medische beeldvorming. De techniek is vernoemd naar **Wilhelm Conrad Röntgen**, die de röntgenstraling in **1895** ontdekte. In **1901** kreeg hij hiervoor de eerste Nobelprijs voor Natuurkunde.`} />
    </div>
  )
}
