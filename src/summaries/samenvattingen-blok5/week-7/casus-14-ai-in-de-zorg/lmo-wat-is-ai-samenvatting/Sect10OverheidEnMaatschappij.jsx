export default function Sect10OverheidEnMaatschappij() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">AI, overheid en maatschappij</h2>
      <p>In de publieke sector biedt AI kansen, maar ook serieuze risico’s.</p>
      <p>
        Geautomatiseerde systemen kunnen handig zijn, bijvoorbeeld bij het berekenen van toeslagen. Maar de stof benadrukt
        ook de zwakke plek: als beleid of data niet kloppen, kan een volledig geautomatiseerd proces mensen hard raken. De
        toeslagenaffaire is hier het duidelijke waarschuwingsvoorbeeld.
      </p>
      <p>Daarom zijn een paar principes cruciaal:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>data moeten representatief zijn</li>
        <li>data moeten voor het juiste doel worden gebruikt</li>
        <li>systemen moeten transparant blijven</li>
        <li>je moet kritisch blijven op fouten en discriminatie</li>
        <li>menselijke controle blijft belangrijk</li>
      </ul>
      <p>Bij AI-geletterdheid hoort dus ook leren letten op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>privacy</li>
        <li>bias / vooroordelen</li>
        <li>onnauwkeurigheden</li>
        <li>transparantie</li>
      </ul>
      <p className="whitespace-pre-line">
        {`De cursus gebruikt hiervoor het handige ezelsbruggetje 
FACT
:`}
      </p>
      <ul className="list-none pl-0 space-y-1">
        <li className="whitespace-pre-line">
          {`F
airness`}
        </li>
        <li className="whitespace-pre-line">
          {`A
ccuracy`}
        </li>
        <li className="whitespace-pre-line">
          {`C
onfidentiality`}
        </li>
        <li className="whitespace-pre-line">
          {`T
ransparency`}
        </li>
      </ul>
    </div>
  )
}
