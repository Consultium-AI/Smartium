export default function Sect09KeuzeVanBehandelingEVAROfOpen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Keuze van behandeling: EVAR of open chirurgie</h2>
      <p>
        Afhankelijk van de anatomie en patiëntfactoren wordt gekozen voor endovasculaire benadering (EVAR) of open chirurgische reconstructie. Deze beslissing wordt idealiter genomen in een multidisciplinair team.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 4. Behandelopties bij AAA</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Behandeling</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Methode</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voordelen</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Nadelen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Open chirurgische reparatie</td>
                <td className="px-4 py-3 align-top">Het aangetaste deel van de aorta wordt verwijderd en vervangen door een synthetische graft.</td>
                <td className="px-4 py-3 align-top">Langdurig resultaat, zeer lage kans op herhaling.</td>
                <td className="px-4 py-3 align-top">Grote operatie, langere hersteltijd, hogere vroege mortaliteit dan endovasculair bij geselecteerde situaties.</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium align-top">EVAR</td>
                <td className="px-4 py-3 align-top">Via de a. femoralis communis wordt een stent-graft in de aorta geplaatst, waardoor het aneurysma wordt “uitgeschakeld” van de bloedstroom.</td>
                <td className="px-4 py-3 align-top">Minimale invasieve procedure, kortere ziekenhuisopname, lager perioperatief risico bij bepaalde patiënten.</td>
                <td className="px-4 py-3 align-top">Regelmatige follow-up nodig vanwege risico op endoleak, mogelijk later aanvullende procedures, niet altijd mogelijk bij anatomisch complexe aneurysmata.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Een AAA van 5,5 cm hoeft niet bij iedereen automatisch op dezelfde manier behandeld te worden; de keuze hangt af van het operatierisico van de patiënt en van de anatomische geschiktheid voor de gekozen techniek.
      </p>
    </div>
  )
}
