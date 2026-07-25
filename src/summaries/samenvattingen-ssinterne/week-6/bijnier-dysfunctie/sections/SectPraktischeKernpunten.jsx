import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Praktische kernpunten`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Cortisol is een essentieel stresshormoon.`}</Inline></li>
        <li><Inline>{`De HPA-as regelt cortisol en bijnierandrogenen via CRH en ACTH.`}</Inline></li>
        <li><Inline>{`Aldosteron wordt vooral gereguleerd via het RAAS.`}</Inline></li>
        <li><Inline>{`Hypercortisolisme heet het syndroom van Cushing.`}</Inline></li>
        <li><Inline>{`De ziekte van Cushing is een ACTH-producerend hypofyse-adenoom.`}</Inline></li>
        <li><Inline>{`Bijnierschorsinsufficiëntie kan primair, secundair of tertiair zijn.`}</Inline></li>
        <li><Inline>{`Primaire insufficiëntie geeft hoge ACTH-spiegels en vaak hyperpigmentatie.`}</Inline></li>
        <li><Inline>{`Hydrocortison is levensreddend bij stress, ziekte en trauma.`}</Inline></li>
      </ul>
    </div>
  )
}
