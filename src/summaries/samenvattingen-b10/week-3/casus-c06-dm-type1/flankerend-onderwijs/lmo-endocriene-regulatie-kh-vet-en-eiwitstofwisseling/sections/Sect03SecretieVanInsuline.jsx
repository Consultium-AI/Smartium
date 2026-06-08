export default function Sect03SecretieVanInsuline() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Secretie van insuline</h2>
      <p>
        Insuline wordt uitgescheiden door de <strong className="text-slate-900 dark:text-slate-100">β-cellen</strong> van de pancreas. De belangrijkste prikkel voor insulinesecretie is een <strong className="text-slate-900 dark:text-slate-100">verhoogde glucoseconcentratie</strong> in het bloed.
      </p>
      <p>
        Glucose komt de β-cel binnen via <strong className="text-slate-900 dark:text-slate-100">GLUT2</strong>. Daarna wordt glucose in de <strong className="text-slate-900 dark:text-slate-100">aerobe glycolyse</strong> gebruikt om ATP te maken. Door die stijging van ATP sluit een <strong className="text-slate-900 dark:text-slate-100">ATP-afhankelijk kaliumkanaal</strong>. Normaal laat dit kanaal kaliumionen naar buiten stromen en helpt het zo het negatieve membraanpotentiaal in stand te houden. Als het kanaal sluit, wordt het membraan minder negatief en ontstaat <strong className="text-slate-900 dark:text-slate-100">depolarisatie</strong>. Daardoor gaat een <strong className="text-slate-900 dark:text-slate-100">spanningsgevoelig calciumkanaal</strong> open. Calcium stroomt de cel in, en die toename van intracellulair calcium zorgt ervoor dat insuline uit de secretoire granules wordt vrijgegeven.
      </p>
      <p>
        Een belangrijk punt is dus: <strong className="text-slate-900 dark:text-slate-100">glucose zorgt indirect voor insuline-afgifte via ATP, depolarisatie en calciuminstroom</strong>.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <h3 className="text-base font-semibold text-amber-900 dark:text-amber-100 m-0">Aandachtsvraag</h3>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Waarom is calcium zo belangrijk voor de insulinesecretie?</strong>
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          Calcium is het signaal dat de granules in de β-cel laat versmelten met het celmembraan, zodat insuline naar buiten kan worden afgegeven.
        </p>
      </div>
      <p>
        Naast glucose kunnen ook andere signalen de insulinesecretie versterken. <strong className="text-slate-900 dark:text-slate-100">CCK</strong> en <strong className="text-slate-900 dark:text-slate-100">acetylcholine</strong> doen dit via <strong className="text-slate-900 dark:text-slate-100">Gq-gekoppelde receptoren</strong>. Daardoor stijgt de intracellulaire calciumconcentratie verder en worden eiwitkinasen geactiveerd, wat de secretie van insuline stimuleert. Ook <strong className="text-slate-900 dark:text-slate-100">glucagonreceptoren</strong> en <strong className="text-slate-900 dark:text-slate-100">β-adrenerge receptoren</strong> zijn <strong className="text-slate-900 dark:text-slate-100">Gs-gekoppeld</strong> en kunnen insulinesecretie stimuleren via eiwitkinasen.
      </p>
      <p>
        Daartegenover staan receptoren die de secretie remmen. <strong className="text-slate-900 dark:text-slate-100">Somatostatine-, galanine- en α-adrenerge receptoren</strong> zijn <strong className="text-slate-900 dark:text-slate-100">Gi-gekoppeld</strong> en remmen eiwitkinasen. Daardoor neemt de insulinesecretie af.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Regulatie van insulinesecretie in de β-cel</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Stimulus/receptor</th>
              <th className="px-4 py-3 font-semibold">Effect op insuline</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Glucose via GLUT2</td>
              <td className="px-4 py-3 align-top">Stimuleert</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">CCK en acetylcholine via Gq</td>
              <td className="px-4 py-3 align-top">Stimuleert</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Glucagon en β-adrenerge receptoren via Gs</td>
              <td className="px-4 py-3 align-top">Stimuleert</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Somatostatine, galanine en α-adrenerge receptoren via Gi</td>
              <td className="px-4 py-3 align-top">Remmen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Insuline wordt ook gebruikt in de behandeling van <strong className="text-slate-900 dark:text-slate-100">type 2 diabetes</strong>. Sulfonylureumderivaten binden aan het ATP-afhankelijke kaliumkanaal en zorgen ervoor dat dit kanaal sluit. Daardoor wordt de β-cel makkelijker gedepolariseerd en komt insuline vrij. Bij <strong className="text-slate-900 dark:text-slate-100">type 1 diabetes</strong> werken deze middelen niet, omdat daar te weinig of geen functionerende β-cellen aanwezig zijn om insuline af te geven.
      </p>
    </div>
  )
}
