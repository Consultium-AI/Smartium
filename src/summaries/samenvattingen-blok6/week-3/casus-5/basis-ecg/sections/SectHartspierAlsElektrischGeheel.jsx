import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hartspier als elektrisch geheel`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartspiercellen zijn met elkaar verbonden via intercalated discs voor stevigheid en via gap junctions voor elektrische koppeling. Daardoor gedraagt het hart zich als één geheel. Als één cel depolariseert, verspreidt die depolarisatie zich via de gap junctions naar de buurcellen. Zo ontstaat een depolarisatiefront dat over het hart loopt.`}</Inline></p>
    </div>
  )
}
