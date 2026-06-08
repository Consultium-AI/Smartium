export default function Sect05SelectieVoorLevertransplantatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Selectie voor levertransplantatie</h2>
      <p>
        Niet iedere patiënt met ernstige leverziekte komt automatisch in aanmerking. De selectie draait om drie kernvragen:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Is transplantatie nodig?</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Voldoet de patiënt aan de selectiecriteria?</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Is er een goede kans op overleving van de procedure en op langere termijn?</strong>
        </li>
      </ol>
      <p>
        Daarbij wordt ook gekeken naar mogelijke <strong className="text-slate-900 dark:text-slate-100">futility</strong>: als de kans op zinvol voordeel te klein is, wordt transplantatie niet gedaan.
      </p>
    </div>
  )
}
