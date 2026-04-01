export default function Sect11HistologieEnPathologie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Histologie en pathologie</h2>
      <p>De meeste longtumoren vallen in vier histologische hoofdgroepen:</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <span className="font-semibold">Kleincellig carcinoom</span>
          <p className="mt-2 pl-0 list-none">Tegenwoordig beschouwd als een subgroep binnen de neuro-endocriene tumoren.</p>
        </li>
        <li>
          <span className="font-semibold">Niet-kleincellig longcarcinoom</span>, met drie belangrijke subtypen:
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>plaveiselcelcarcinoom;</li>
            <li>adenocarcinoom;</li>
            <li>grootcellig carcinoom.</li>
          </ul>
        </li>
      </ol>
      <p>
        Roken is geassocieerd met alle vier de hoofdtypen, maar de relatie is het sterkst bij plaveiselcelcarcinoom en kleincellig carcinoom. Deze komen vrijwel uitsluitend voor bij mensen die hebben gerookt. Adenocarcinoom en grootcellig carcinoom komen ook voor bij niet-rokers, al verhoogt roken het risico wel.
      </p>
    </div>
  )
}
