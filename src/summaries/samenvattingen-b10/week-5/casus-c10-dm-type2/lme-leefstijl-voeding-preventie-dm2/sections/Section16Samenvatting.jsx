import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Samenvatting`}</Inline></h3>
      <p><Inline>{`Leefstijl speelt een grote rol in zowel de preventie als de behandeling van diabetes type 2.`}</Inline></p>
      <p><Inline>{`Gezonde voedingspatronen zoals het Mediterrane dieet, een onbewerkt voedingspatroon en in bepaalde situaties een zeer laag calorie- of koolhydraatbeperkt dieet kunnen gunstig zijn.`}</Inline></p>
      <p><Inline>{`Voor duurzame verandering zijn haalbare stappen, goede begeleiding en langdurige follow-up essentieel.`}</Inline></p>
    </div>
  )
}
