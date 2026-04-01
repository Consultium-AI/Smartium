export default function Sect11DeAtlasLeefomgeving() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De Atlas Leefomgeving</h2>
      <p>
        De Atlas Leefomgeving wordt gebruikt om te kijken naar omgevingsfactoren op een bepaalde plek. Je kunt een locatie
        kiezen die je leuk vindt of waar je woont en daarna bekijken welke factoren daar spelen.
      </p>
      <p>De atlas laat zien dat allerlei factoren mogelijk zijn, zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>geluid;</li>
        <li>luchtverontreiniging;</li>
        <li>schaduwrijke plekken;</li>
        <li>zomerhitte.</li>
      </ul>
      <p>
        Het doel is dus om de leefomgeving zichtbaar te maken en te laten zien welke kenmerken invloed kunnen hebben op hoe
        gezond en prettig een plek is.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Luchtverontreiniging op kaarten</h3>
      <p>
        In de atlas kun je kaarten bekijken voor fijnstof 2022 (PM2,5), fijnstof 2022 (PM10) en stikstofdioxide 2022
        (NO2). Deze kaarten maken zichtbaar hoe luchtverontreiniging verdeeld is over Nederland.
      </p>
      <p>
        De spreiding van luchtverontreiniging volgt de mate van infrastructuur, verstedelijking en deels industrie. Vooral
        stikstofdioxide hangt sterk samen met wegverkeer. Dat is een belangrijk patroon om te onthouden.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandacht-vraag:</strong> Waar hangt stikstofdioxide
          vooral mee samen?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> Vooral met wegverkeer.
        </p>
      </div>
    </div>
  )
}
