import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek bij hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Lichamelijk onderzoek helpt om tekenen van stuwing en verminderde doorbloeding op te sporen. In de praktijk is dat soms lastig, maar het blijft belangrijk.`}</Inline></p>
    </div>
  )
}
