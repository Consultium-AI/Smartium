export default function Sect12ManagementVeiligheid() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Management & veiligheid</h2>
      <p>Er zijn een paar levensreddende regels die je niet moet vergeten:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <span className="font-semibold">Behandel de patiënt, niet de monitor.</span>
        </li>
        <li>
          <span className="font-semibold">Breed complex = VT totdat het tegendeel bewezen is.</span>
        </li>
        <li>
          <span className="font-semibold">Adenosine is veilig én diagnostisch</span> bij smalcomplex tachycardie.
        </li>
        <li>
          <span className="font-semibold">Pas op met pre-excitatie/WPW.</span>
        </li>
      </ol>
      <p>Belangrijk is ook het verschil tussen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">cardioversie</span>: gesynchroniseerd, bij een patiënt met pols en instabiliteit
        </li>
        <li>
          <span className="font-semibold">defibrillatie</span>: niet-gesynchroniseerd, bij VF of pulseloze VT
        </li>
      </ul>
      <p>
        Bij instabiliteit wacht je niet op medicatie. Dan geldt: <span className="font-semibold">electricity first</span>.
      </p>
    </div>
  )
}
