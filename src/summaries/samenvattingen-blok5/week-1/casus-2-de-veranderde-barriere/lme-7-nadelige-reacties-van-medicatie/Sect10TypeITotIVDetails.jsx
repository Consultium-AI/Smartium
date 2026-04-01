export default function Sect10TypeITotIVDetails() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Type I</h2>
      <p>
        Type I-reacties zijn directe allergische reacties. Ze ontstaan meestal binnen 1 uur na gebruik van het
        medicijn, en maximaal binnen 6 uur. Hierbij is meestal een combinatie van allergische symptomen aanwezig.
      </p>
      <p>
        Bij een type I-reactie bindt IgE aan het medicijn tijdens de sensibilisatiefase. Daarna kan het medicijn
        opnieuw binden en zo degranulatie van mestcellen veroorzaken.
      </p>
      <p>De klachten kunnen komen uit verschillende orgaansystemen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          huid en slijmvliezen: gegeneraliseerde jeuk, urticaria, erytheem, angio-oedeem
        </li>
        <li>
          luchtwegen: droge hoest, keelschrapen, dichte keel, benauwdheid, inspiratoire piepen, expiratoire piepen,
          rode jeukende ogen, verstopte neus
        </li>
        <li>
          mond en maag-darmkanaal: jeuk of irritatie in mond of keel, misselijkheid, braken, buikkrampen, diarree
        </li>
        <li>
          hartvaatstelsel: gevoel van flauwte, verminderd bewustzijn, systolische bloeddruk {'<'} 90 mmHg of {'>'} 30%
          daling van de systolische bloeddruk
        </li>
      </ul>
      <p>
        Als meerdere orgaansystemen kort na elkaar klachten geven, is er sprake van een anafylactische reactie. Bij
        combinatie met bloeddrukdaling of saturatiedaling door de allergische reactie kan zelfs sprake zijn van een
        anafylactische shock.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Type II</h2>
      <p>
        Type II-reacties ontstaan door binding van antistoffen, meestal IgG of IgM, aan cellen zoals trombocyten,
        erytrocyten of leukocyten. De gebonden cellen worden vervolgens afgebroken of gefagocyteerd. Ook antistoffen
        tegen extracellulaire matrix kunnen voorkomen, bijvoorbeeld bij pemphigus.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Type III</h2>
      <p>
        Type III-reacties ontstaan door immuuncomplexvorming tussen antistoffen en medicatie in het bloed. Deze
        complexen slaan neer op plekken met veel doorbloeding of filtratie, zoals bloedvaten, glomeruli en synovia.
        Daardoor kunnen vasculitis, glomerulonefritis en artritis ontstaan. Serumziekte is hier een klassiek voorbeeld
        van.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Type IV</h2>
      <p>
        Type IV-reacties worden veroorzaakt door activatie van T-cellen. De geactiveerde T-cellen prolifereren en
        migreren naar de huid en andere organen. Dit geeft meestal een huidreactie, maar in ernstige gevallen ook
        orgaanschade.
      </p>
      <p>
        Type IV-reacties kunnen in verschillende subtypen worden verdeeld, waarbij verschillende T-helpercellen,
        cytotoxische T-cellen en cytokinen betrokken zijn. Voorbeelden zijn maculopapuleus exantheem, DRESS, AGEP, SJS
        en TEN.
      </p>
      <p>Bij type IV-reacties past vaak een vertraagd tijdsbeloop: meestal na ongeveer 12 uur of later.</p>
    </div>
  )
}
