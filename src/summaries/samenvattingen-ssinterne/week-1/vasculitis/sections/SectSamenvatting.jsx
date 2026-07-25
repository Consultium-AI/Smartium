import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vasculitis is ontsteking van de bloedvatwand en kan ernstige weefselschade geven. Bij kleine-vatenvasculitis denk je aan multiorgaanbetrokkenheid, zoals long-, nier- en KNO-klachten. GPA is een belangrijke ANCA-geassocieerde vasculitis met neusafwijkingen, longafwijkingen en nierbetrokkenheid. EGPA herken je vooral aan astma, eosinofilie en systemische klachten. Behandeling bestaat uit immuunsuppressie, met prednison en afhankelijk van de ernst aanvullende middelen zoals rituximab, Endoxan, azathioprine, methotrexaat of mepolizumab.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Reuscelarteritis is een grote-vatenvasculitis die je snel moet herkennen vanwege het risico op irreversibele blindheid en andere ischemische complicaties. De diagnose steun je op kliniek, BSE/CRP en zo nodig een arteria temporalis-biopt, maar behandeling met hoge dosering prednison start je direct. Daarna bouw je langzaam af en let je op complicaties, relapse en langetermijnrisico’s zoals aneurysmata en osteoporose.`}</Inline></p>
    </div>
  )
}
