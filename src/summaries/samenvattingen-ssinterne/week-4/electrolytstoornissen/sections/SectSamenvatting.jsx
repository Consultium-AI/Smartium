import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hyponatriëmie is vooral een stoornis van de waterbalans: er is relatief te veel water ten opzichte van natrium. De belangrijkste klinische indeling is acuut versus chronisch, omdat snelle correctie bij chronische hyponatriëmie gevaarlijk is. Eerst moet je bepalen of het om echte hypotone hyponatriëmie gaat, of juist om hyperglycemie-geïnduceerde hyponatriëmie of pseudohyponatriëmie. Daarna denk je systematisch in volume-status en ADH-activiteit. SIADH is een belangrijke euvolemische oorzaak en wordt gediagnosticeerd met onder andere lage serum-osmolaliteit, hoge urine-osmolaliteit, urine-natrium > 40 mmol/l en normale schildklier- en bijnierfunctie. Behandeling hangt af van de situatie: hypertoon zout bij acute symptomatische hyponatriëmie, waterrestrictie bij SIADH en een langzame correctie bij chronische hyponatriëmie.`}</Inline></p>
    </div>
  )
}
