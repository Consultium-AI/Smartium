export default function Sect03Voorstadia() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Voorstadia van darmkanker: de basis van het ziekteproces
      </h2>
      <p>
        Darmkanker kan ontstaan uit normale darmepitheelcellen die eerst genetische veranderingen doormaken. Er zijn in
        deze module twee belangrijke ontwikkelingsroutes:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de adenoom-carcinoomsequentie;</li>
        <li>de serrated pathway.</li>
      </ul>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">1. De adenoom-carcinoomsequentie</h3>
        <p className="mt-4">
          Ongeveer 70% van alle darmkankers ontstaat volgens dit klassieke model. Het begint met inactivatie van het
          APC-gen. Daardoor kan een adenoom ontstaan. Een adenoom is een goedaardige poliep, maar wel een poliep die later
          kan doorgroeien naar kanker.
        </p>
        <p className="mt-4">De belangrijkste gedachte is dus:</p>
        <p className="mt-2">normaal slijmvlies → mutatie → adenoom → carcinoom</p>
        <p className="mt-4">
          Door adenomen op te sporen en te verwijderen, verlaag je de kans dat darmkanker ontstaat.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">2. De serrated pathway</h3>
        <p className="mt-4">
          De serrated pathway is een alternatieve route en is verantwoordelijk voor ongeveer 15–30% van de darmkankers.
          Deze route begint met BRAF- of KRAS-mutaties in het epitheel. Daarna ontstaan serrated poliepen, zoals:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>hyperplastische poliepen,</li>
          <li>sessiele serrated laesies,</li>
          <li>traditionele serrated adenomen.</li>
        </ul>
        <p className="mt-4">Ook deze route kan dus uiteindelijk tot darmkanker leiden.</p>
      </div>
    </div>
  )
}
