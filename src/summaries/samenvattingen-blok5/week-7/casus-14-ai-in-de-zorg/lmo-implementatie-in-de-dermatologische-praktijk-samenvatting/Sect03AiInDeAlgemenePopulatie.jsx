export default function Sect03AiInDeAlgemenePopulatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">AI in de algemene populatie</h2>
      <p>
        Het eerste artikel keek naar wat er gebeurt wanneer een huidkankerapp op grote schaal beschikbaar wordt gemaakt voor gewone burgers. In 2019 kregen meer dan 2,2 miljoen volwassen verzekerden in Nederland gratis toegang tot zo’n app. Van hen installeerden ongeveer 47.879 mensen de app, en 20.777 deden minstens één succesvolle beoordeling. Uiteindelijk konden van 18.960 gebruikers de zorgclaims over twaalf maanden worden vergeleken met 56.880 gematchte controles die de app niet gebruikten.
      </p>
      <p className="whitespace-pre-line">
        {`De belangrijkste uitkomst is dubbel. Aan de ene kant leidde appgebruik tot 
meer detectie van premaligne en maligne huidafwijkingen
. Bij gebruikers waren er claims voor premaligne of maligne huidafwijkingen bij 6,0%, tegenover 4,6% in de controlegroep. Dat lijkt dus gunstig: er worden meer verdachte of kwaadaardige afwijkingen gevonden.`}
      </p>
      <p className="whitespace-pre-line">
        {`Aan de andere kant nam ook de zorgconsumptie voor 
goedaardige huidafwijkingen en naevi
 sterk toe. Bij appgebruikers waren daarvoor claims bij 5,9%, tegenover 1,7% in de controlegroep. Vooral het aantal claims voor naevi steeg sterk. Ook werden in de eerste lijn en in het ziekenhuis meer biopten en excisies uitgevoerd. De app leidde dus niet alleen tot meer relevante vondsten, maar ook tot veel extra zorg voor afwijkingen die uiteindelijk goedaardig bleken.`}
      </p>
      <p className="whitespace-pre-line">
        {`Dat is didactisch het kernpunt van dit artikel: 
AI kan meer opsporen, maar veroorzaakt ook meer vervolgzorg
. In een populatie waar huidkanker relatief weinig voorkomt, zorgen fout-positieve beoordelingen al snel voor extra verwijzingen, extra excisies, extra onrust en extra kosten. De auteurs benoemen daarom ook het risico op overdiagnose en suboptimaal gebruik van schaarse zorgcapaciteit. Zelfs als de specificiteit verder verbetert, blijft de positief voorspellende waarde in een algemene populatie relatief beperkt, juist omdat de prevalentie van huidkanker daar laag is. Daarom lijkt gerichte inzet in hoogrisicogroepen logischer dan massale inzet bij iedereen.`}
      </p>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Tabel 1. Effect van implementatie in de algemene populatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="w-full min-w-[42rem] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Uitkomst
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Appgebruikers
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Controles
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Claims voor premaligne/maligne huidafwijkingen</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">6,0%</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">4,6%</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">meer detectie van relevante afwijkingen</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Claims voor goedaardige huidtumoren/naevi</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">5,9%</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">1,7%</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">sterke toename van extra zorg voor goedaardige afwijkingen</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Biopten/excisies bij de huisarts</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">75 per 1000 personen</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">34 per 1000 personen</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">duidelijk meer ingrepen in de eerste lijn</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Kosten per extra gevonden premaligne/maligne afwijking</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">€2567</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">—</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">detectie kost extra geld</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/40 p-4 space-y-3">
        <p className="whitespace-pre-line">
          {`Aandacht-vraag:
Waarom is “meer huidkanker vinden” niet automatisch hetzelfde als “betere implementatie”?`}
        </p>
        <p className="whitespace-pre-line">
          {`Mini-antwoord:
Omdat je ook moet kijken hoeveel extra goedaardige afwijkingen onnodig in zorg komen. Goede implementatie gaat dus over opbrengst én nevenschade.`}
        </p>
      </div>
    </div>
  )
}
