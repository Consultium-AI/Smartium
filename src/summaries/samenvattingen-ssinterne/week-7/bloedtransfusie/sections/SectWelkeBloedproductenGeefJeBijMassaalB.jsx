import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke bloedproducten geef je bij massaal bloedverlies?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij groot bloedverlies transfundeer je in principe:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`erytrocyten;`}</Inline></li>
        <li><Inline>{`plasma;`}</Inline></li>
        <li><Inline>{`trombocyten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Leucocyten worden niet getransfundeerd. Dat kan ernstige immunologische reacties geven en heeft bovendien geen rol bij stolling of zuurstoftransport.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Erytrocyten zijn nodig om het zuurstoftransport te herstellen. Plasma is nodig om stollingsfactoren aan te vullen. Trombocyten zijn nodig om de primaire hemostase te ondersteunen.`}</Inline></p>
    </div>
  )
}
