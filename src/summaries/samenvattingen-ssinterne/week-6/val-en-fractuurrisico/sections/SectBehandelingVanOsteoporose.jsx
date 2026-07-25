import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van osteoporose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het primaire doel van behandeling is het voorkomen van nieuwe fracturen en het voorkomen van verdere verslechtering van de botdichtheid. De eerste stap is een oraal bisfosfonaat, meestal alendroninezuur of risedroninezuur. Daarnaast zorg je voor voldoende calcium en vitamine D.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als orale bisfosfonaten niet kunnen worden gebruikt, bijvoorbeeld bij intolerantie, contra-indicaties of non-compliance, zijn er andere opties, zoals denosumab, zoledronaat, ibandronaat of raloxifeen. Bij zeer hoog risico of bij meerdere fracturen kunnen ook middelen zoals teriparatide of PTH(1-84) aan de orde komen.`}</Inline></p>
    </div>
  )
}
