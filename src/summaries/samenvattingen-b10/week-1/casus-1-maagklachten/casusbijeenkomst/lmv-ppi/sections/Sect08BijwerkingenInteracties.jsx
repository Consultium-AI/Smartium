export default function Sect08BijwerkingenInteracties() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Bijwerkingen, interacties en aandachtspunten
      </h2>
      <p>
        PPI's hebben relatief weinig interacties en relatief weinig bijwerkingen. Toch zijn er belangrijke aandachtspunten.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Verminderde opname of werking van andere middelen
        </h3>
        <p>
          Door de zuurremming kan de opname of werking van sommige medicijnen afnemen. Voorbeelden zijn:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">ketoconazol</strong>
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">erlotinib</strong>
          </li>
        </ul>
        <p>
          Bij deze middelen is voldoende maagzuur belangrijk voor een goede opname of werking. Als het maagzuur sterk wordt onderdrukt, kan dat dus problemen geven.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Verhoogd risico op infecties</h3>
        <p>Daarnaast wordt een verhoogd risico genoemd op infecties, met name:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">pulmonale infecties</strong>
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">gastro-intestinale infecties</strong>
          </li>
        </ul>
        <p>
          Dus hoewel PPI's vaak veilig en nuttig zijn, zijn ze niet volledig zonder aandachtspunten.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> Waarom is een PPI niet helemaal “onschuldig”?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Kort antwoord:</strong> Omdat hij de opname of werking van andere medicijnen kan verminderen en het risico op bepaalde infecties kan verhogen.
        </p>
      </div>
    </div>
  )
}
