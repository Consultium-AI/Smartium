export default function Sect09SuppressieDoorTreg() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Suppressie door regulatoire T-lymfocyten</h3>
      <p>
        Het tweede grote perifere mechanisme is actieve onderdrukking door Treg-cellen. Deze cellen zorgen ervoor dat andere
        lymfocyten niet te sterk of ongewenst reageren.
      </p>
      <p>Volgens de clip doen Treg-cellen dit op meerdere manieren:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ze vangen IL-2 weg via hun hoog-affine receptor CD25</li>
        <li>ze produceren suppressieve cytokinen, vooral IL-10 en TGF-β</li>
        <li>ze nemen co-stimulatie weg via CTLA-4, dat ingrijpt op CD80/CD86</li>
        <li>ze kunnen cytotoxisch granzyme produceren</li>
      </ul>
      <p>
        Dat zijn vier verschillende manieren om hetzelfde doel te bereiken: autoreactieve of ongewenst geactiveerde
        lymfocyten afremmen.
      </p>
      <p>
        Je kunt Treg-cellen dus zien als een actieve rem op het immuunsysteem. Waar anergie vooral neerkomt op het
        inactiveren van een individuele lymfocyt, gaat suppressie door Treg-cellen meer over het onderdrukken van reacties
        in de omgeving.
      </p>
    </div>
  )
}
