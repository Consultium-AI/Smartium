import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Shunt`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een shunt komt bloed langs niet-geventileerde alveoli of gaat het bloed buiten de normale longcirculatie om. Er zijn anatomische shunts, zoals intracardiale shunts en extracardiale shunts zoals arterioveneuze malformaties en het hepatopulmonaal syndroom. Er zijn ook fysiologische shunts, bijvoorbeeld bij pneumonie, atelectase of pneumothorax, wanneer alveoli wel worden doorbloed maar niet geventileerd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een shunt reageert nauwelijks op zuurstof.`}</Inline></p>
    </div>
  )
}
