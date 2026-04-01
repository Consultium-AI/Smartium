export default function Sect03WatIsEenMedischHulpmiddel() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat is een medisch hulpmiddel?</h2>
      <p>
        De MDR geeft een brede definitie van een medisch hulpmiddel. Het kan gaan om een instrument, toestel, apparaat, software, implantaat, reagentia, materiaal of een ander artikel dat door de fabrikant bedoeld is om alleen of in combinatie bij de mens gebruikt te worden voor een medisch doel.
      </p>
      <p>Dat medische doel kan onder andere zijn:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>diagnose;</li>
        <li>preventie;</li>
        <li>monitoring;</li>
        <li>voorspelling;</li>
        <li>prognose;</li>
        <li>behandeling of verlichting van ziekte;</li>
        <li>diagnose, monitoring, behandeling, verlichting of compensatie van een letsel of beperking;</li>
        <li>onderzoek naar of vervanging of wijziging van de anatomie of van een fysiologisch of pathologisch proces of een fysiologische of pathologische toestand;</li>
        <li>informatieverstrekking via in-vitroonderzoek van monsters uit het menselijk lichaam, zoals orgaan-, bloed- en weefseldonaties.</li>
      </ul>
      <p>
        Belangrijk is ook dat de hoofdwerking niet bereikt wordt met farmacologische, immunologische of metabole middelen. Zulke middelen kunnen de werking wel ondersteunen, maar ze vormen niet het belangrijkste werkingsmechanisme.
      </p>
      <p>Daarnaast vallen ook enkele andere producten onder de categorie medische hulpmiddelen, zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hulpmiddelen voor de beheersing of ondersteuning van de bevruchting;</li>
        <li>producten die speciaal bedoeld zijn voor reinigen, ontsmetten of steriliseren van medische hulpmiddelen.</li>
      </ul>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: is alles wat in een ziekenhuis gebruikt wordt automatisch een medisch hulpmiddel?  Mini-antwoord: nee, alleen als het product bedoeld is voor een medisch doel zoals diagnose, behandeling, monitoring of compensatie.
        </p>
      </div>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Voorbeelden van wel en geen medisch hulpmiddel</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wel medisch hulpmiddel</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Geen medisch hulpmiddel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Krukken</td>
                <td className="px-4 py-3">Augmented reality bril</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Lenzenvloeistof</td>
                <td className="px-4 py-3">Zonnebril</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">ICD</td>
                <td className="px-4 py-3">Fitbit</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Bloedzak</td>
                <td className="px-4 py-3">Katheter</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Hoog-laag bed</td>
                <td className="px-4 py-3">Bloeddrukmeter</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Echoapparaat</td>
                <td className="px-4 py-3">Pleisters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Een hulpmiddel valt dus niet alleen onder de MDR omdat het in een zorgomgeving gebruikt wordt. De bedoeling van het product is bepalend. Een irisscanner in het ziekenhuis om toegang tot ruimtes te regelen is bijvoorbeeld géén medisch hulpmiddel, ook al wordt het door zorgprofessionals gebruikt.
      </p>
      <p>
        Ook apps kunnen onder de MDR vallen. Een app die alleen je cyclus, symptomen of stemming registreert zonder iets te beweren over vruchtbaarheid, valt niet onder de MDR. Maar zodra een app wordt gepromoot als hulpmiddel om ovulatie te voorspellen en zo te helpen bij anticonceptie of bij het plannen van een zwangerschap, dan is het wel een medisch hulpmiddel en moet de app aan de eisen van de MDR voldoen.
      </p>
    </div>
  )
}
