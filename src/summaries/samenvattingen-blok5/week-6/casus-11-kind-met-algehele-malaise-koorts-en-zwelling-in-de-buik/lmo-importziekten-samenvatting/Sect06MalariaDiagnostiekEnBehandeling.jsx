export default function Sect06MalariaDiagnostiekEnBehandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Diagnostiek van malaria</h3>
      <p>De module noemt als belangrijkste onderzoeken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>snelle screeningstest</strong>
        </li>
        <li>
          <strong>dikke druppel</strong>
        </li>
        <li>
          beoordeling van <strong>parasitemie</strong>
        </li>
      </ul>
      <p>
        Hoge parasitemie maakt ernstige ziekte waarschijnlijker. In de cohortstudie werd malaria meestal bevestigd met
        bloeduitstrijkje, en aanvullende snelle testen of PCR konden helpen als het uitstrijkje negatief was terwijl de
        verdenking bleef bestaan.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Behandeling van malaria</h3>
      <p>Bij ongecompliceerde malaria noemt de module onder meer:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>atovaquon/proguanil</strong>
        </li>
        <li>
          <strong>artemether/lumefantrine</strong>
        </li>
      </ul>
      <p>Bij ernstige malaria is eerste keus:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>artesunaat intraveneus</strong>
        </li>
      </ul>
      <p>
        Daarna kan worden overgestapt op orale therapie als de patiënt klinisch verbetert en de parasitemie voldoende
        daalt.
      </p>
    </div>
  )
}
