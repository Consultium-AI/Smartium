export default function Sect06AdvancedPoliepen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Advanced adenoom en advanced geserreerde poliep
      </h2>
      <p>
        Binnen de screening zijn er begrippen die extra belangrijk zijn, omdat ze wijzen op een verhoogd risico op
        darmkanker.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Advanced adenoom</h3>
        <p className="mt-4">Een advanced adenoom is een adenoom dat:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>≥ 10 mm is, en/of</li>
          <li>hooggradige dysplasie heeft, en/of</li>
          <li>meer dan 25% villieuze component heeft.</li>
        </ul>
        <p className="mt-4">Dus als één van deze kenmerken aanwezig is, spreek je van een advanced adenoom.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Advanced geserreerde poliep</h3>
        <p className="mt-4">Een advanced geserreerde poliep is een geserreerde poliep die:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>een traditioneel geserreerde poliep is, of</li>
          <li>een sessiel geserreerde poliep met dysplasie is, of</li>
          <li>≥ 10 mm is.</li>
        </ul>
        <p className="mt-4">
          Deze kenmerken worden bepaald door de patholoog, terwijl de diameter wordt bepaald door de endoscopist.
        </p>
      </div>
    </div>
  )
}
