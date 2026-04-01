export default function Sect17Chemotherapie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Chemotherapie</h2>
      <p>
        Chemotherapie blijft een belangrijke pijler in de behandeling van longkanker. Het wordt gebruikt in de (neo)adjuvante behandeling van vroegstadium longkanker en in de palliatieve behandeling van stadium IV. Het doel is overleving verbeteren, symptomen verminderen en kwaliteit van leven verbeteren.
      </p>
      <p>Belangrijke middelen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Platinum-gebasseerde chemotherapie</span> zoals cisplatine en carboplatine: deze binden aan DNA en vormen kruisverbindingen, waardoor replicatie en transcriptie worden geblokkeerd.
        </li>
        <li>
          <span className="font-semibold">Paclitaxel</span>: stabiliseert microtubuli en voorkomt afbraak, waardoor cellen in de mitosefase blijven steken.
        </li>
        <li>
          <span className="font-semibold">Pemetrexed</span>: remt enzymen die nodig zijn voor de synthese van DNA en RNA.
        </li>
      </ul>
      <p>Chemotherapie treft vooral snel delende cellen.</p>
      <p>Belangrijke acute bijwerkingen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>diarree;</li>
        <li>anemie;</li>
        <li>trombopenie;</li>
        <li>leukopenie.</li>
      </ul>
      <p>Neuropathie en cardiomyopathie kunnen ook optreden, maar worden meestal als late toxiciteit gezien.</p>
    </div>
  )
}
