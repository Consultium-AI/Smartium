export default function Sect05DiagnostiekReflux() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Diagnostiek en behandeling van refluxklachten
      </h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Diagnostiek</h3>
      <p>
        De diagnose GERD wordt gesteld met <strong className="text-slate-900 dark:text-slate-100">gastroscopie</strong> en/of{' '}
        <strong className="text-slate-900 dark:text-slate-100">24-uurs pH-metrie</strong>. Typische endoscopische
        afwijkingen zijn onder andere{' '}
        <strong className="text-slate-900 dark:text-slate-100">refluxoesofagitis</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">peptische strictuur</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">Barrett-epitheel</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">slokdarmcarcinoom</strong> als complicatie.
      </p>
      <p>
        Bij een niet-bewezen GERD kan een <strong className="text-slate-900 dark:text-slate-100">24-uurs pH-metrie</strong>{' '}
        worden gedaan om te zien of er sprake is van{' '}
        <strong className="text-slate-900 dark:text-slate-100">pathologische zure reflux</strong> zonder mucosale
        schade. Hiervoor moet de PPI <strong className="text-slate-900 dark:text-slate-100">ten minste 7 dagen</strong>{' '}
        vooraf worden gestaakt.
      </p>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">DeMeester score</strong> is een samengestelde score
        op basis van 6 variabelen:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>{'percentage van de totale tijd met oesofageale pH < 4;'}</li>
        <li>{'percentage tijd in staande houding met pH < 4;'}</li>
        <li>{'percentage tijd in liggende houding met pH < 4;'}</li>
        <li>{'aantal refluxepisoden met pH < 4 in 24 uur;'}</li>
        <li>{'aantal episoden met pH < 4 langer dan 5 minuten;'}</li>
        <li>{'de langste refluxepisode met pH < 4.'}</li>
      </ol>
      <p>
        Voor klachtenanalyse zijn ook de <strong className="text-slate-900 dark:text-slate-100">symptoomindex (SI)</strong>{' '}
        en de <strong className="text-slate-900 dark:text-slate-100">symptoom-associatie probability (SAP)</strong>{' '}
        belangrijk:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">SI &gt; 50%</strong> is positief;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">SAP &gt; 95%</strong> is positief.
        </li>
      </ul>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="m-0 text-slate-800 dark:text-amber-100">
          <strong className="text-slate-900 dark:text-amber-50">Kleine aandachtvraag:</strong> wanneer denk je aan
          refluxhypersensitiviteit?
        </p>
        <p className="m-0 text-slate-800 dark:text-amber-100">
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> als iemand klachten heeft bij normale
          zure blootstelling, maar wel een positieve symptoomassociatie.
        </p>
      </div>
      <p>
        Als de zure blootstelling normaal is maar de klachten blijven bestaan, kan{' '}
        <strong className="text-slate-900 dark:text-slate-100">impedantiemeting</strong> helpen. Daarmee kun je{' '}
        <strong className="text-slate-900 dark:text-slate-100">
          antegrade en retrograde vloeibare en gasvormige reflux
        </strong>{' '}
        meten, los van de zuurgraad. Zo kun je onderscheiden tussen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">GERD/NERD</strong> bij abnormale zure blootstelling;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">refluxhypersensitiviteit</strong> bij normale zure
          blootstelling maar positieve symptoomassociatie;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">functionele heartburn</strong> bij normale zure
          blootstelling en negatieve symptoomassociatie.
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Behandeling</h3>
      <p>
        De eerste stap is altijd: <strong className="text-slate-900 dark:text-slate-100">therapietrouw controleren</strong>.
        De patiënt moet de PPI <strong className="text-slate-900 dark:text-slate-100">30 minuten vóór het ontbijt</strong>{' '}
        en, indien tweemaal daags, ook{' '}
        <strong className="text-slate-900 dark:text-slate-100">30 minuten vóór het avondeten</strong> innemen, dus op een{' '}
        <strong className="text-slate-900 dark:text-slate-100">nuchtere maag</strong>.
      </p>
      <p>
        Als dit onvoldoende helpt, kan de dosis worden opgehoogd of kan worden gewisseld van PPI. Als na{' '}
        <strong className="text-slate-900 dark:text-slate-100">8 weken</strong> adequate PPI-behandeling de klachten blijven
        bestaan, kan worden gesproken van falen van de therapie.
      </p>
      <p>Aanvullende medicatie die kan worden overwogen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">H2-antagonist</strong> zoals{' '}
          <strong className="text-slate-900 dark:text-slate-100">famotidine</strong>, vooral bij nachtelijke zuurbranden;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">baclofen</strong>, dat TLOSR kan verminderen, maar vaak
          bijwerkingen geeft zoals sufheid en duizeligheid;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">mucosaprotectiva</strong> en{' '}
          <strong className="text-slate-900 dark:text-slate-100">antacida</strong>, die klachten kunnen verminderen;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">prokinetica</strong> worden niet aangeraden als toevoeging
          aan PPI, omdat ze geen duidelijke extra verbetering geven.
        </li>
      </ul>
      <p>
        Ook <strong className="text-slate-900 dark:text-slate-100">leefstijladviezen</strong> zijn belangrijk:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>gewichtsverlies;</li>
        <li>niet vlak voor het slapen eten;</li>
        <li>slapen met het hoofdeinde omhoog;</li>
        <li>slapen op de linkerzij.</li>
      </ul>
      <p>
        Bij <strong className="text-slate-900 dark:text-slate-100">alarmsymptomen</strong> zoals dysfagie, gewichtsverlies
        of ferriprieve anemie is een{' '}
        <strong className="text-slate-900 dark:text-slate-100">gastroscopie altijd aangewezen</strong>.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Invasieve behandeling van GERD</h3>
      <p>Chirurgie wordt overwogen bij bewezen GERD wanneer:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>medicatie onvoldoende effect heeft;</li>
        <li>er intolerantie voor PPI is;</li>
        <li>de patiënt niet levenslang PPI wil gebruiken;</li>
        <li>er complicaties zijn, zoals Barrett-oesofagus of peptische strictuur;</li>
        <li>er atypische symptomen zijn, zoals astma of chronisch hoesten.</li>
      </ul>
      <p>Absolute contra-indicaties voor chirurgie zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">hooggradige dysplasie in een Barrett-segment</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">oesofaguscarcinoom</strong>.
        </li>
      </ul>
      <p>
        De meest uitgevoerde ingreep is de <strong className="text-slate-900 dark:text-slate-100">fundoplicatie</strong>. Een{' '}
        <strong className="text-slate-900 dark:text-slate-100">Nissen-fundoplicatie</strong> is het meest effectief. Een
        partiële fundoplicatie kan nog refluxklachten geven. Mogelijke complicaties zijn dysfagie, moeite met braken en een
        opgeblazen gevoel. De mortaliteit is laag.
      </p>
    </div>
  )
}
