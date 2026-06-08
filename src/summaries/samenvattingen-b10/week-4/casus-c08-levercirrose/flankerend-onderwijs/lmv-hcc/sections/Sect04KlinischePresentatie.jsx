export default function Sect04KlinischePresentatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klinische presentatie</h3>
      <p>
        HCC presenteert zich vaak atypisch. Dat betekent dat de klachten niet specifiek zijn en dat de tumor soms pas laat wordt ontdekt. Veel patiënten zijn asymptomatisch. Andere mogelijke presentaties zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>decompensatie van leverziekte;</li>
        <li>paraneoplastische syndromen, zoals hypoglykemie, hypercalciëmie of diarree;</li>
        <li>leverabces;</li>
        <li>obstructieve icterus;</li>
        <li>koorts.</li>
      </ul>
      <p>
        Extrahepatische metastasen zijn bij diagnose aanwezig in 10 tot 15% van de gevallen. Dit komt vaker voor bij gevorderde primaire tumoren, bijvoorbeeld bij tumoren groter dan 5 cm of bij vasculaire invasie. De meest voorkomende metastaseplaatsen zijn de longen, intra-abdominale lymfeklieren, botten, bijnieren en hersenen.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> waarom is HCC zo lastig vroeg te herkennen?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> omdat de klachten vaak vaag of afwezig zijn en de presentatie dus niet specifiek is.
        </p>
      </div>
    </div>
  )
}
