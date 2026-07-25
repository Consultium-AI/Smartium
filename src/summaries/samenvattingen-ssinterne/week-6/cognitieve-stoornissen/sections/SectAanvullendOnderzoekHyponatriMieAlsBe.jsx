import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aanvullend onderzoek: hyponatriëmie als belangrijke aanwijzing`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het laboratoriumonderzoek laat meerdere afwijkingen zien, maar de meest opvallende is de natriumwaarde van 125 mmol/l: een diepe hyponatriëmie. Daarnaast zijn er onder meer macrocytose, trombocytopenie, lage ureumwaarde en afwijkende leverenzymen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Om de hyponatriëmie goed te kunnen duiden, zijn extra bepalingen nodig:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`urine-natrium;`}</Inline></li>
        <li><Inline>{`urine-osmolaliteit;`}</Inline></li>
        <li><Inline>{`serum-osmolaliteit.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast kunnen ook TSH/fT4, ammoniak, vitamine B1, vitamine B12 en foliumzuur van belang zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De uitslagen laten zien:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`urine-natrium laag;`}</Inline></li>
        <li><Inline>{`urine-osmolaliteit sterk verlaagd;`}</Inline></li>
        <li><Inline>{`serum-osmolaliteit verlaagd.`}</Inline></li>
      </ul>
      <PBody text={`Dat past bij een **hypotone hyponatriëmie**. Door de lage urine-osmolaliteit denk je aan een situatie waarin weinig osmolen worden ingenomen, zoals bij **tea-and-toast hyponatriëmie** of **bierdrinkershyponatriëmie**. Bij te weinig osmolen kan het lichaam het gedronken water niet goed uitscheiden, waardoor water wordt vastgehouden.`} />
    </div>
  )
}
