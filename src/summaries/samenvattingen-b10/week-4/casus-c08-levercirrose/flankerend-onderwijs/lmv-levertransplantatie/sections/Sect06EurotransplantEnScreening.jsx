export default function Sect06EurotransplantEnScreening() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Rol van Eurotransplant en landelijke afstemming</h3>
      <p>
        De toewijzing van donorlevers verloopt via <strong className="text-slate-900 dark:text-slate-100">Eurotransplant</strong> en het <strong className="text-slate-900 dark:text-slate-100">ET Liver Allocation System (ELAS)</strong>. In Nederland is er daarnaast een landelijk protocol voor indicatie en selectie, met afstemming binnen het <strong className="text-slate-900 dark:text-slate-100">Landelijk Overleg Levertransplantatie (LOL)</strong>. Zo wordt geprobeerd om indicatie en toewijzing zo zorgvuldig mogelijk te laten verlopen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Screening vóór transplantatie</h3>
      <p>Voor een patiënt op de wachtlijst komt, volgt een uitgebreide screening. Het doel daarvan is:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>de <strong className="text-slate-900 dark:text-slate-100">indicatie</strong> beoordelen;</li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">contra-indicaties</strong> uitsluiten, zowel absoluut als relatief;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">infectiehaarden</strong> opsporen;
        </li>
        <li>andere aandachtspunten in kaart brengen.</li>
      </ol>
      <p>De screening is multidisciplinair. Verschillende specialismen hebben elk hun eigen aandachtspunt:</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Specialist</th>
              <th className="px-4 py-3 font-semibold">Belangrijke aandachtspunten</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">MDL-arts</td>
              <td className="px-4 py-3 align-top">indicatie, alternatieven, behandeling van leverziekte, voorlichting</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Verpleegkundig specialist</td>
              <td className="px-4 py-3 align-top">coördinatie en voorlichting</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Chirurgie</td>
              <td className="px-4 py-3 align-top">eerdere operaties, vena porta, type galweganastomose, donorsoort</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Anesthesie</td>
              <td className="px-4 py-3 align-top">cardiopulmonale status, stolling, voorlichting</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Cardioloog</td>
              <td className="px-4 py-3 align-top">ischemie, pompfunctie, pulmonale hypertensie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Infectieziekten</td>
              <td className="px-4 py-3 align-top">CMV, EBV, VZV, tuberculose, parasitaire infecties</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Oncologie</td>
              <td className="px-4 py-3 align-top">screening op maligniteiten zoals slokdarm-, colon-, KNO-, long- en cervixpathologie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">KNO, kaakchirurgie, gynaecologie</td>
              <td className="px-4 py-3 align-top">infectie, HPV, anticonceptie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">MMW</td>
              <td className="px-4 py-3 align-top">sociale context, therapietrouw, communicatie, verzekering</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Diëtetiek en fysiotherapie</td>
              <td className="px-4 py-3 align-top">voedingstoestand, sondevoeding, spierfunctie, revalidatie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Daarnaast hoort er beeldvorming bij, zoals CT van thorax en abdomen, echo cor en röntgenonderzoek. Op indicatie kunnen ook PET-CT, MRCP of CT-coronairen nodig zijn.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandacht-vraag:</strong> waarom is die screening zo uitgebreid?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> om te bepalen of transplantatie veilig en zinvol is, en om risico’s vooraf zo goed mogelijk in beeld te brengen.
        </p>
      </div>
    </div>
  )
}
