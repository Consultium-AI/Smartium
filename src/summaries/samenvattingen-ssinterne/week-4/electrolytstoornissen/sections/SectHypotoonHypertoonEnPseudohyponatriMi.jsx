import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypotoon, hypertoon en pseudohyponatriëmie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet elke lage natriumwaarde betekent hetzelfde. Daarom moet je eerst bepalen of er sprake is van een hypotone hyponatriëmie.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Hyperglycemie-geïnduceerde hyponatriëmie** is een hypertone vorm van hyponatriëmie.`}</Inline></li>
        <li><Inline>{`**Pseudohyponatriëmie** is een schijnbaar laag natrium door een meetprobleem.`}</Inline></li>
        <li><Inline>{`**Hypotone hyponatriëmie** is de echte, klassieke vorm.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij hyperglycemie trekt glucose water uit de cellen naar het extracellulaire compartiment. Daardoor daalt het serum-natrium. Globaal daalt het serum-natrium met ongeveer 3 mmol/l per 10 mmol/l stijging van de serumglucose. Dit is een hypertone vorm van hyponatriëmie en geeft daarom géén risico op hersenoedeem.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Pseudohyponatriëmie ontstaat wanneer het plasma relatief veel vaste bestanddelen bevat, bijvoorbeeld bij verhoogde triglyceriden of eiwitten. Dan lijkt het natrium laag, terwijl dat in werkelijkheid niet zo is. Dit kun je aantonen met een bloedgasmeting of door serum-osmolaliteit te bepalen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Drie belangrijke vormen van hyponatriëmie`}</Inline></SubHeading>
      <DataTable rows={[["Vorm", "Serum-osmolaliteit", "Kernmechanisme", "Belangrijk klinisch punt"], ["Hypotone hyponatriëmie", "laag", "echt teveel water t.o.v. natrium", "meest voorkomend"], ["Hypertone hyponatriëmie", "hoog", "waterverplaatsing door glucose", "geen risico op hersenoedeem"], ["Pseudohyponatriëmie", "normaal", "meetartefact", "geen echte hyponatriëmie"]]} />
    </div>
  )
}
