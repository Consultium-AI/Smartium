import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijke kernpunten`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Crohn is een chronische ontstekingsziekte van het maag-darmkanaal.`}</Inline></li>
        <li><Inline>{`Klachten zijn vaak buikpijn, diarree, gewichtsverlies en vermoeidheid.`}</Inline></li>
        <li><Inline>{`Diagnostiek bestaat uit anamnese, laboratoriumonderzoek, fecaal calprotectine, beeldvorming en ileocoloscopie met biopten.`}</Inline></li>
        <li><Inline>{`Fecaal calprotectine helpt om IBD te onderscheiden van IBS.`}</Inline></li>
        <li><Inline>{`Bij milde tot matige ileocaecale Crohn is budesonide geschikt voor inductie.`}</Inline></li>
        <li><Inline>{`Azathioprine is een onderhoudsbehandeling.`}</Inline></li>
        <li><Inline>{`Anti-TNF-middelen kunnen nodig zijn bij ernstiger ziekte of fistels.`}</Inline></li>
        <li><Inline>{`Perianale fistels kunnen behandeld worden met een combinatie van anti-TNF en ciproxin.`}</Inline></li>
        <li><Inline>{`Crohn kan leiden tot stenosen, fistels en extra-intestinale manifestaties zoals uveitis en perifere artritis.`}</Inline></li>
      </ul>
    </div>
  )
}
