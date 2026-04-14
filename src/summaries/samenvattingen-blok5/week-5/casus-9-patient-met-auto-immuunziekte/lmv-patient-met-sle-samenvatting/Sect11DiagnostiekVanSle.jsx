export default function Sect11DiagnostiekVanSle() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek van SLE</h2>
      <p>
        De diagnose SLE wordt niet gesteld op basis van één enkele test. Het is een combinatiediagnose, waarbij zowel
        klinische als immunologische criteria nodig zijn.
      </p>
      <p>In deze module worden twee classificatiesystemen getoond.</p>
      <p>
        <span className="font-medium text-slate-900 dark:text-slate-100">Oudere benadering: SLICC-criteria</span>
      </p>
      <p>Bij de SLICC-benadering geldt dat er sprake moet zijn van:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>minstens 4 criteria</li>
        <li>met ten minste 1 klinisch criterium</li>
        <li>en ten minste 1 laboratoriumcriterium</li>
      </ul>
      <p>Er is ook nog een tweede mogelijkheid:</p>
      <p>biopt-bewezen lupus nefritis in combinatie met positieve ANA of anti-DNA</p>
      <p>Voorbeelden van klinische criteria zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>acute cutane lupus</li>
        <li>chronische cutane lupus</li>
        <li>orale of nasale ulcera</li>
        <li>niet-littekengerelateerde alopecia</li>
        <li>artritis</li>
        <li>serositis</li>
        <li>renale betrokkenheid</li>
        <li>neurologische betrokkenheid</li>
        <li>hemolytische anemie</li>
        <li>leukopenie</li>
        <li>trombocytopenie</li>
      </ul>
      <p>Voorbeelden van immunologische criteria zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ANA</li>
        <li>anti-DNA</li>
        <li>anti-Sm</li>
        <li>antifosfolipide antistoffen</li>
        <li>laag complement</li>
        <li>directe Coombs-test</li>
      </ul>
      <p>
        <span className="font-medium text-slate-900 dark:text-slate-100">Nieuwere benadering: puntsysteem</span>
      </p>
      <p>
        Daarnaast wordt een classificatiesysteem getoond waarbij ANA als entry criterion dient. Dat betekent dat je pas
        verder kunt classificeren als ANA positief is. Daarna worden klinische en immunologische criteria opgeteld in
        punten. Voor classificatie is nodig:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ten minste één klinisch criterium</li>
        <li>en 10 punten of meer</li>
      </ul>
      <p>
        Belangrijke gedachte hierachter is dat de diagnose niet berust op één losse bevinding, maar op het totaalbeeld.
      </p>
    </div>
  )
}
