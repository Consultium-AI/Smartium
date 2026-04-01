export default function Sect04HumoraleRegulatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Humorale regulatie</h2>
      <p>Bij humorale regulatie worden specifieke mediatoren vrijgemaakt die op afstand een effect hebben op de vaatwand.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Adrenaline</span> geeft <span className="font-semibold">vasoconstrictie</span> via alfa-adrenerge receptoren.
        </li>
        <li>
          <span className="font-semibold">Histamine</span> geeft <span className="font-semibold">vasodilatatie</span>. Daardoor kan meer bloed, en dus meer immuuncellen, naar een gebied stromen om een {'\u201c'}indringer{'\u201d'} te bestrijden.
        </li>
        <li>
          <span className="font-semibold">Angiotensine II</span> geeft <span className="font-semibold">vasoconstrictie</span>. Daarnaast zorgt het voor vrijmaken van <span className="font-semibold">aldosteron</span>, <span className="font-semibold">vasopressine</span> en activatie van het <span className="font-semibold">sympathisch zenuwstelsel</span>.
        </li>
      </ul>
    </div>
  )
}
