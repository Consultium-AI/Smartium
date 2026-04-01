export default function Sect06SymptomatischNefrotisch() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Symptomatische behandeling van het nefrotisch syndroom</h2>
      <p>
        Bij nefrotisch syndroom begin je meestal met symptomatische behandeling. De kern is dat je de gevolgen van de ziekte vermindert, ook als je de oorzaak nog niet meteen definitief kunt aanpakken.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 2. Symptomatische behandeling van het nefrotisch syndroom</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Probleem</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Behandeling</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Belangrijk detail</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Overvulling/oedeem</td>
              <td className="px-4 py-3 align-top">Zoutbeperking + diuretica; vooral amiloride of triamtereen, ook furosemide/bumetanide en thiaziden</td>
              <td className="px-4 py-3 align-top">Vaak combinatie of hoge dosering nodig; albumine-infuus helpt niet</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Proteïnurie</td>
              <td className="px-4 py-3 align-top">ACE-remmer of ARB</td>
              <td className="px-4 py-3 align-top">Verlaagt glomerulaire druk; voorzichtig in acute fase bij lage bloeddruk</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Eiwitbalans</td>
              <td className="px-4 py-3 align-top">Normale eiwitinname</td>
              <td className="px-4 py-3 align-top">Geen sterke eiwitbeperking</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Hyperlipidemie</td>
              <td className="px-4 py-3 align-top">Statine</td>
              <td className="px-4 py-3 align-top">Vaak hoge dosis nodig; soms stoppen na remissie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Tromboserisico</td>
              <td className="px-4 py-3 align-top">Antistolling overwegen</td>
              <td className="px-4 py-3 align-top">Vooral bij membraneuze nefropathie en serumalbumine &lt;20 g/L; let op geplande nierbiopsie</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Oedeem en overvulling bestrijden</h3>
        <p className="mb-3">
          Patiënten met nefrotisch syndroom zijn vaak volume-overbelast: ze houden te veel natrium en water vast. Daarom is een strikte zoutbeperking logisch, aangevuld met een diureticum. Vooral een eNaC-remmer ligt voor de hand. eNaC betekent het epitheliale natriumkanaal in de verzamelbuis. Voorbeelden zijn amiloride en triamtereen. Ook andere diuretica werken, zoals lisdiuretica (furosemide of bumetanide) en thiaziden (chlortalidon of hydrochloorthiazide). Vaak is een hoge dosis of een combinatie van diuretica nodig, omdat de natriumretentie zo sterk kan zijn.
        </p>
        <p>
          Belangrijk: een intraveneus albumine-infuus heeft hier geen effect op het oedeem. De lage oncotische druk is niet het hoofdprobleem; de sterke natriumretentie wel.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Proteïnurie remmen</h3>
        <p className="mb-3">
          Een tweede belangrijke taak is het remmen van de proteïnurie met antihypertensiva. Proteïnurie bepaalt in grote mate het uiteindelijke nierfunctieverlies, zowel bij glomerulaire ziekten als bij chronische nierschade. De sterkste anti-proteinurische werking hebben RAAS-remmers: ACE-remmers en angiotensine-receptorblokkers (ARB’s). Die verlagen de glomerulaire druk en daarmee de proteïnurie.
        </p>
        <p>
          De werking bij nefrotisch syndroom is wel minder sterk en hangt ook af van de onderliggende ziekte. In de acute fase moet je oppassen, vooral als de bloeddruk laag is of als er veel overvulling is. Te sterke drukdaling kan de doorbloeding van de tubuli verminderen en zo acute tubulusnecrose (ATN) veroorzaken.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Eiwitinname normaliseren</h3>
        <p>
          Naast proteïnurie-remming is het verstandig om de eiwitinname te normaliseren. Er wordt dus geen sterke eiwitbeperking aangeraden. Dat kan namelijk weinig extra winst geven en wel het risico op ondervoeding vergroten.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Lipidenverlagende therapie</h3>
        <p>
          Statines worden gegeven omdat dyslipidemie vaak voorkomt bij nefrotisch syndroom. Daarnaast kunnen statines een gunstig effect hebben op het endotheel van de bloedvaten. Omdat nefrotisch syndroom ook een pro-trombotische toestand geeft, kan dat extra relevant zijn. Vaak is een relatief hoge dosis statine nodig. Als het nefrotisch syndroom in remissie is en de nierfunctie behouden blijft, kan een statine — vooral bij jonge patiënten — soms weer worden gestopt.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Trombose overwegen</h3>
        <p className="mb-3">
          Het tromboserisico is hoog bij nefrotisch syndroom, zeker bij membraneuze nefropathie. Hoe ernstiger het nefrotisch syndroom en hoe lager het serumalbumine, hoe groter het risico. De verhoogde tromboseneiging is multifactorieel:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>verlies van antistollingseiwitten via de urine, vooral antitrombine III, proteïne C en proteïne S;</li>
          <li>verhoogde productie van stollingsfactoren in de lever als compensatie;</li>
          <li>hemoconcentratie;</li>
          <li>dyslipidemie.</li>
        </ul>
        <p className="mb-3">De genoemde trombosen zijn onder andere:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>niervene-trombose: 10-45%;</li>
          <li>longembolie: 10-20%;</li>
          <li>arteriële trombose: 5%.</li>
        </ul>
        <p>
          Er zijn geen gerandomiseerde studies naar profylactische antistolling. Toch wordt bij vooral membraneuze nefropathie vaak geadviseerd om antistolling te overwegen als het serumalbumine lager is dan 20 g/L. Daarbij moet je wel rekening houden met een eventuele nierbiopsie die nog moet worden gedaan. De betekenis van stille, niet-symptomatische niervene-trombose is onbekend, dus daar wordt niet actief op gescreend. Als klachten passen bij trombose — zoals een pijnlijke warme gezwollen extremiteit, dyspneu, hoesten of hemoptoë — moet je laagdrempelig verder onderzoek doen.
        </p>
      </div>
    </div>
  )
}
