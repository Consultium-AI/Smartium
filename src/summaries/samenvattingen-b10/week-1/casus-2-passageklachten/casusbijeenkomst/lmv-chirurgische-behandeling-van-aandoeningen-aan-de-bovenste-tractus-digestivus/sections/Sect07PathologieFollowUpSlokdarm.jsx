export default function Sect07PathologieFollowUpSlokdarm() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Pathologie en follow-up na slokdarmresectie</h2>
      <p>Na de operatie wordt het resectiepreparaat door de patholoog onderzocht. Er wordt gekeken naar:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          of de tumor radicaal is verwijderd (<strong className="text-slate-900 dark:text-slate-100">R0</strong>, ongeveer
          95%);
        </li>
        <li>welk type tumor het is;</li>
        <li>of er lymfeklieruitzaaiingen zijn;</li>
        <li>of er reactie op de neoadjuvante behandeling is geweest.</li>
      </ul>
      <p>
        Een <strong className="text-slate-900 dark:text-slate-100">pathologisch complete respons (pCR)</strong> betekent
        dat er geen vitale tumor meer in het resectiepreparaat zit.
      </p>
      <p>
        Niet elke patiënt met een goede respons op neoadjuvante behandeling hoeft automatisch geopereerd te worden. In de SANO-aanpak wordt gekeken naar patiënten met een klinisch complete respons.         Dan kan <strong className="text-slate-900 dark:text-slate-100">actieve surveillance</strong> worden toegepast
        met gastroscopie en PET-CT, en pas geopereerd worden als opnieuw kanker wordt vastgesteld. In die studie was er
        geen verschil in <strong className="text-slate-900 dark:text-slate-100">2-jaars</strong> overleving, complicaties of mortaliteit tussen actieve surveillance en standaard chirurgie.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="m-0 text-slate-800 dark:text-amber-100">
          <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> Wat is het verschil tussen pCR
          en klinische complete respons?
        </p>
        <p className="m-0 text-slate-800 dark:text-amber-100">
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> pCR is de pathologische uitslag na
          operatie; klinische complete respons is wat je vooraf via onderzoek en scopie denkt te zien.
        </p>
      </div>
    </div>
  )
}
