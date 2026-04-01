export default function Sect11ZorgGeorganiseerd() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe is de zorg georganiseerd?</h2>
      <p>
        De zorg voor kinderen met kanker is sterk gecentraliseerd. Dat betekent dat de behandeling niet verspreid is over veel
        ziekenhuizen, maar geconcentreerd is op een beperkt aantal gespecialiseerde plekken.
      </p>
      <p>
        Rond 2000 besloten de afdelingshoofden van zeven kinderoncologische afdelingen om de zorg te centraliseren op één
        plek. Uiteindelijk werd gekozen voor Utrecht. In 2018 ging het Prinses Máxima Centrum open.
      </p>
      <p>
        Tegelijkertijd bestaan er ook shared care centra. Dit zijn centra dichter bij huis waar een deel van de zorg kan
        worden geboden. De centrale specialistische zorg en de zorg dicht bij huis werken dus samen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom centraliseren?</h3>
      <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">Voordelen</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Alle kennis is op één plek aanwezig.</li>
        <li>Artsen zijn superspecialistisch.</li>
        <li>Zeldzame complicaties worden sneller herkend.</li>
        <li>Er is beter onderzoek mogelijk met schaars onderzoeksmateriaal.</li>
      </ul>
      <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">Nadelen</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Ouders en kinderen moeten verder reizen.</li>
        <li>Andere ziekenhuizen verliezen kennis en ervaring.</li>
        <li>In andere ziekenhuizen is minder blootstelling in de opleiding.</li>
        <li>Voor een second opinion is bijna altijd een buitenlands centrum nodig.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Voor- en nadelen van centralisatie van zorg
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voordelen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Nadelen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Alle kennis op één plek</td>
              <td className="px-4 py-3 align-top">Grotere reisafstand</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Superspecialisatie</td>
              <td className="px-4 py-3 align-top">Verlies van kennis elders</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Snelle herkenning van zeldzame complicaties</td>
              <td className="px-4 py-3 align-top">Minder opleidingservaring in andere ziekenhuizen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Beter onderzoek met schaars materiaal</td>
              <td className="px-4 py-3 align-top">Second opinion vaak in het buitenland</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De kernboodschap is dat centralisatie veel voordelen heeft, maar niet zonder goede shared care kan. Die combinatie
        maakt het mogelijk dat kinderen de gespecialiseerde behandeling krijgen en toch zorg dicht bij huis behouden.
      </p>
    </div>
  )
}
