export default function Sect04MaligneBeeldkenmerkenOpCt() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Maligne beeldkenmerken op CT</h2>
      <p>Sommige beeldkenmerken maken een longtumor verdachter voor maligniteit. Belangrijke kenmerken zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Spiculae</span>: stervormige uitlopers van de tumor naar het omliggende longparenchym. Dit past bij invasieve groei langs lymfevaten en bindweefsel.
        </li>
        <li>
          <span className="font-semibold">Cavitatie</span>: centrale holtevorming in de tumor door necrose.
        </li>
        <li>
          <span className="font-semibold">Pleurale intrekking</span>: de tumor lijkt aan de pleura te trekken, wat suggereert dat de viscerale pleura is geïnfiltreerd.
        </li>
        <li>
          <span className="font-semibold">Botdestructie</span> bij perifeer gelegen tumoren: dit past bij doorgroei.
        </li>
      </ul>
      <p>
        Deze kenmerken helpen om een <span className="font-semibold">maligne</span> van een <span className="font-semibold">benigne</span> afwijking te onderscheiden, maar bepalen <span className="font-semibold">niet direct</span> het T-stadium. Voor het T-stadium zijn vooral de <span className="font-semibold">grootte</span> en de <span className="font-semibold">anatomische invasie</span> bepalend.
      </p>
    </div>
  )
}
