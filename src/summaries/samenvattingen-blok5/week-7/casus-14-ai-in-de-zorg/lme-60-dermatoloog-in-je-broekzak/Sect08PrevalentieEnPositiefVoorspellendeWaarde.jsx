export default function Sect08PrevalentieEnPositiefVoorspellendeWaarde() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Prevalentie en positief voorspellende waarde
      </h2>
      <p>
        Sensitiviteit en specificiteit zijn belangrijk, maar ze vertellen niet alles. Bij een positieve uitslag speelt ook
        de positief voorspellende waarde (PPV) mee. Die hangt sterk af van de prevalentie van de ziekte in de
        onderzochte groep.
      </p>
      <p>
        Dat is een heel belangrijk punt: als een ziekte zeldzaam is, dan kan een test nog best goed zijn en toch veel
        fout-positieven geven.
      </p>
      <p>Bij een voorbeeld met verzekerden in 2019 leidde de huidkanker-app tot:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>15.800 hoge-risicobeoordelingen</li>
        <li>92 bevestigde huidkankerdiagnoses na hoge-risico-inschatting</li>
      </ul>
      <p>Dat betekent een PPV van:</p>
      <p>92 / 15.800 = 0,005</p>
      <p>
        Dat is dus ongeveer 5 per 1000. Met andere woorden: van de beoordelingen die door het algoritme als hoog risico
        worden gezien, blijkt maar een klein deel daadwerkelijk malign te zijn.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtspunt: waarom is dit relevant?</strong>{' '}
          <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> omdat een lage PPV betekent
          dat veel mensen onterecht ongerust kunnen worden en extra zorg kunnen gebruiken.
        </p>
      </div>
      <p>
        Als een app targeted wordt aangeboden, dus alleen aan mensen met een hoger risico, dan zal de PPV waarschijnlijk
        stijgen en zal het aantal fout-positieve verwijzingen dalen. Dat maakt gerichte inzet aantrekkelijker dan breed,
        ongericht screenen.
      </p>
      <p>Mogelijke kenmerken om mensen met verhoogd risico te selecteren zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>leeftijd 50+</li>
        <li>zonverbranding op jonge leeftijd</li>
        <li>huidmaligniteiten of actinische keratosen in de voorgeschiedenis</li>
        <li>licht huidtype</li>
        <li>hoog aantal moedervlekken</li>
      </ul>
    </div>
  )
}
