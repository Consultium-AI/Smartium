export default function Sect10BehandelingVerworvenHemofilieA() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van verworven hemofilie A</h2>
        <p>De behandeling heeft drie doelen:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>behandelen en voorkomen van bloedingen</li>
          <li>remmereradicatie</li>
          <li>behandelen van de onderliggende ziekte</li>
        </ul>
        <p>Deze patiënten horen behandeld te worden in een hemofiliebehandelcentrum.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Bloeding behandelen</h3>
        <p>Belangrijke aandachtspunten zijn:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>vermijd invasieve procedures zoals extra infusen en katheters</li>
          <li>monitor de patiënt goed</li>
          <li>behandeling is vaak moeilijk en kostbaar, zeker bij oudere patiënten met comorbiditeit</li>
        </ul>
        <p>Mogelijke behandelingen bij actieve bloeding zijn:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>stollingsfactor toediening</li>
          <li>DDAVP</li>
          <li>
            bypassing agents:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>APCC (FEIBA)</li>
              <li>rFVIIa (NovoSeven)</li>
            </ul>
          </li>
          <li>emicizumab</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Remmer behandelen</h3>
        <p>Voor het onderliggende immuunproces worden genoemd:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>prednison</li>
          <li>rituximab</li>
          <li>cyclofosfamide</li>
        </ul>
        <p>De keuze hangt af van de individuele patiënt. In de adviesslide wordt onderscheid gemaakt tussen:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>lage remmertiter en/of kwetsbare patiënt: eerder prednison</li>
          <li>hoge remmertiter en zeer laag FVIII: prednison plus cyclofosfamide</li>
          <li>tweede lijn bij onvoldoende respons of relaps: rituximab</li>
        </ul>
        <p>
          Een casus in deze module laat zien dat rFVIIa een bloeding kan stoppen en dat prednison met cyclofosfamide kan
          leiden tot daling van de remmertiter en stijging van factor VIII.
        </p>
      </div>
    </div>
  )
}
