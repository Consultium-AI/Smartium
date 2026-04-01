export default function Sect04Standaardopnames() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Standaardopnames</h2>
      <p>Bij standaard mammografie worden altijd twee opnames van elke borst gemaakt:</p>
      <div className="space-y-4">
        <div>
          <p>Mediolaterale oblique (MLO)-opname</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>laat veel borstweefsel zien;</li>
            <li>maakt ook de okseluitloper zichtbaar;</li>
            <li>de patiënte staat schuin, de arm is omhoog, en de borst wordt schuin gecomprimeerd.</li>
          </ul>
        </div>
        <div>
          <p>Cranio-caudale (CC)-opname</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>vult de MLO-opname aan;</li>
            <li>laat vooral het mediale deel van de borst goed zien;</li>
            <li>de patiënte staat recht voor het apparaat en de borst wordt horizontaal gecomprimeerd.</li>
          </ul>
        </div>
      </div>
      <p>
        De tepels moeten vrij geprojecteerd zijn en in het midden liggen. De MLO- en CC-opname samen geven dus een
        completer beeld dan één opname alleen.
      </p>
    </div>
  )
}
