export default function Sect10Crt() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">CRT: als het hart niet synchroon samentrekt</h2>
      <p>
        Bij <span className="font-semibold">linkerbundeltakblok</span> en hartfalen kan de pompfunctie slecht zijn doordat de linker- en rechterkamer niet tegelijk samenknijpen. Dat heet{' '}
        <span className="font-semibold">mechanische dyssynchronie</span>.
      </p>
      <p>
        De oplossing is <span className="font-semibold">CRT (Cardiac Resynchronization Therapy)</span>. Dit is een biventriculaire pacemaker met <span className="font-semibold">3 draden</span>: in het rechteratrium, de rechterkamer en via de{' '}
        <span className="font-semibold">sinus coronarius</span> naar de linker ventrikel. Het doel is om beide kamers weer tegelijk te laten samentrekken, zodat de pompfunctie verbetert.
      </p>
      <p>
        Vaak wordt dit gecombineerd met een ICD-functie: <span className="font-semibold">CRT-D</span>.
      </p>
      <p>
        <span className="font-semibold">Aandacht-vraag:</span> Waarom combineer je CRT vaak met een defibrillator?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> Omdat patiënten met een lage LVEF ook risico lopen op VT/VF.
      </p>
    </div>
  )
}
