export default function Sect09MatchingEnHLATypering() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Matching en HLA-typering</h2>
      <p>Het streven bij transplantatie is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ABO-compatibiliteit</li>
        <li>MHC/HLA-compatibiliteit</li>
      </ul>
      <p>
        Daarnaast wil je een negatieve kruisproef en een optimale HLA-match. HLA-typering kan op twee manieren gebeuren:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Serologisch: fenotypering met een panel van goed gedefinieerde HLA-antistoffen</li>
        <li>Moleculair: PCR-amplificatie met sequentie-specifieke primers of DNA-sequencing</li>
      </ul>
    </div>
  )
}
