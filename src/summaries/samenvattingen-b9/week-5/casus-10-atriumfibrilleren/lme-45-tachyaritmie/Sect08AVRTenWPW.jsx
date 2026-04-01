export default function Sect08AVRTenWPW() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">AVRT en WPW</h2>
      <p>
        <span className="font-semibold">AVRT</span> lijkt klinisch vaak op AVNRT, maar het mechanisme is anders. Er is een <span className="font-semibold">extra verbinding</span> tussen boezem en kamer naast de AV-knoop: de{' '}
        <span className="font-semibold">Bundel van Kent</span>.
      </p>
      <p>
        Bij AVRT loopt de prikkel via de ene weg naar de ventrikels en via de andere weg terug naar de atria. Dat geeft een <span className="font-semibold">macro re-entry circuit</span>.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Twee varianten</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Orthodromisch:</span> de prikkel gaat omlaag via de AV-knoop en terug omhoog via de extra bundel. Dit geeft meestal een <span className="font-semibold">smal QRS-complex</span>.
        </li>
        <li>
          <span className="font-semibold">Antidromisch:</span> de prikkel gaat omlaag via de extra bundel en terug omhoog via de AV-knoop. Dit geeft een <span className="font-semibold">breed QRS-complex</span> en kan lijken op VT.
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">WPW en pre-excitatie</h3>
      <p>
        Je spreekt pas van het <span className="font-semibold">WPW-syndroom</span> als er klachten zijn én afwijkingen op het rust-ECG. Dit fenomeen heet <span className="font-semibold">pre-excitatie</span>: de ventrikels worden te vroeg geprikkeld via de snelle bundel.
      </p>
      <p>ECG-kenmerken in sinusritme:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">korte PQ-tijd</span> {'<'} 120 ms
        </li>
        <li>
          <span className="font-semibold">delta-golf</span>
        </li>
        <li>
          <span className="font-semibold">verbreed QRS</span>
        </li>
      </ul>
      <p>
        Sommige bundels zijn <span className="font-semibold">concealed</span>: zij geleiden alleen retrograde en zijn daarom niet zichtbaar op het sinus-ECG, maar kunnen wel tachycardie veroorzaken.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Gevaar van pre-geëxciteerd AF</h3>
      <p>
        Als een patiënt met een snelle bundel <span className="font-semibold">atriumfibrilleren</span> krijgt, kan de bundel van Kent honderden prikkels per minuut 1-op-1 doorlaten naar de ventrikels. Dat is een <span className="font-semibold">levensbedreigende situatie</span> die kan ontaarden in{' '}
        <span className="font-semibold">ventrikelfibrilleren</span> en plotselende dood.
      </p>
      <p>
        Daarom geldt bij <span className="font-semibold">pre-excited AF</span>:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">geen</span> AV-knoopremmers zoals <span className="font-semibold">adenosine, verapamil, digoxine of beta-blokkers</span>
        </li>
        <li>deze middelen kunnen de ritmegeleiding juist naar de accessory pathway sturen en het gevaar verhogen</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Behandeling</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Instabiel:</span> directe elektrische cardioversie
        </li>
        <li>
          <span className="font-semibold">Stabiel:</span> middelen die de geleiding over de bundel remmen, zoals <span className="font-semibold">flecaïnide</span>, <span className="font-semibold">procainamide</span> of <span className="font-semibold">amiodaron</span>
        </li>
        <li>
          <span className="font-semibold">Curatief:</span> radiofrequente ablatie van de bundel is eerste keus bij symptomatische patiënten
        </li>
      </ul>
    </div>
  )
}
