export default function Sect15Biopten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Biopten</h2>
      <p>Er zijn verschillende soorten biopten:</p>
      <div className="space-y-4">
        <div>
          <p>Echo-geleid biopt</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>meest gebruikt;</li>
            <li>je ziet de naald direct;</li>
            <li>geschikt voor echografisch zichtbare afwijkingen en axillaire lymfeklieren;</li>
            <li>snel en praktisch.</li>
          </ul>
        </div>
        <div>
          <p>Stereotactisch biopt</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>voor mammografisch zichtbare afwijkingen, vooral calcificaties;</li>
            <li>vooral als de afwijking niet goed op echografie te zien is;</li>
            <li>de ligging en diepte worden bepaald met twee röntgenopnamen onder verschillende hoeken.</li>
          </ul>
        </div>
        <div>
          <p>MRI-geleid biopt</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>voor afwijkingen die alleen op MRI zichtbaar zijn;</li>
            <li>technisch uitdagend;</li>
            <li>duurder en langer.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
