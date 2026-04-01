export default function Sect08WieZijnEssentieel() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wie zijn essentieel voor een anti-tumorrespons?</h2>
      <p>Naast cytotoxische T-cellen zijn ook andere cellen belangrijk.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Dendritische cellen: noodzakelijk voor het activeren van naïeve T-cellen.</li>
        <li>T-helpercellen (CD4+): nodig voor een effectieve activatie van CD8+ cytotoxische T-cellen.</li>
        <li>CD8+ cytotoxische T-cellen: de effectorcellen die tumorcellen daadwerkelijk kunnen doden.</li>
      </ul>
      <p>Macrofagen kunnen ook antigenen presenteren, maar zijn hierin minder goed dan dendritische cellen.</p>
    </div>
  )
}
