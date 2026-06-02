import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Klinische redenering bij een rood en gezwollen oksel`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een rood, warm, gezwollen en pijnlijk gebied in de oksel denk je eerst aan een huidinfectie. De vraag is dan: is het een oppervlakkige huidinfectie zoals erysipelas of cellulitis, of zit er iets anders onder, zoals een ontstoken lymfeklier, een abces of een chronisch lymfoedeem?`}</Inline></p>
    </div>
  )
}
