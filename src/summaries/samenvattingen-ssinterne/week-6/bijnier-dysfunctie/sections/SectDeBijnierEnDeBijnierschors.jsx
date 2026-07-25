import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De bijnier en de bijnierschors`}</Inline></SubHeading>
      <PBody text={`De bijnier ligt retroperitoneaal, dus achter het buikvlies, midden in het vetweefsel. De bijnier bestaat uit een buitenste laag, de **bijnierschors**, en een binnenste deel, het **bijniermerg**. De schors is geel door de aanwezigheid van lipiden; het merg is roodbruin. De bijnierschors is functioneel verdeeld in drie zones, en elke zone maakt andere hormonen.`} />
      <SubHeading><Inline>{`Functionele zonering van de bijnierschors`}</Inline></SubHeading>
      <DataTable rows={[["Zone", "Belangrijkste producten", "Bijzonderheden"], ["Zona glomerulosa", "Aldosteron", "Onderdeel van de zouthuishouding"], ["Zona fasciculata", "Cortisol", "Grootste zone; onder invloed van ACTH"], ["Zona reticularis", "Bijnierandrogenen", "Onder invloed van ACTH; precursoren voor androgenen elders in het lichaam"]]} />
      <p className="leading-relaxed"><Inline>{`De verschillende zones maken verschillende hormonen doordat ze niet allemaal dezelfde enzymen bezitten. Daardoor loopt de steroïdsynthese per zone anders.`}</Inline></p>
      <SubHeading><Inline>{`Steroïdogenese in de bijnier`}</Inline></SubHeading>
      <PBody text={`Cholesterol is de uitgangsstof voor alle steroïdhormonen. Via een reeks omzettingen ontstaan uiteindelijk mineralocorticoïden, glucocorticoïden en androgenen. In de glomerulosa loopt de route vooral richting **aldosteron**, in de fasciculata richting **cortisol**, en in de reticularis richting **DHEA** en andere androgenen.`} />
      <DataTable rows={[["Hoofdroute", "Eindproduct"], ["Mineralocorticoïdenroute", "Aldosteron"], ["Glucocorticoïdenroute", "Cortisol"], ["Androgenenroute", "DHEA, androsteendion, testosteron, oestradiol"]]} />
    </div>
  )
}
