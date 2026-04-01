export default function SectLeerdoelenEnWatIs() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-primary-50 dark:bg-primary-500/10 rounded-xl border border-primary-200 dark:border-primary-500/25">
        <h3 className="font-bold text-primary-900 dark:text-primary-200 mb-3 text-lg">Leerdoelen</h3>
        <p className="text-primary-800 dark:text-primary-300 mb-2">Na het doornemen van deze stof kun je:</p>
        <ul className="list-disc pl-6 space-y-2 text-primary-800 dark:text-primary-300">
          <li>op basis van anamnese, lichamelijk onderzoek en aanvullend onderzoek onderscheid maken tussen prerenaal, renaal en postrenaal;</li>
          <li>begrijpen welke complicaties kunnen optreden bij acute nierschade;</li>
          <li>een behandelplan opstellen op basis van prioriteiten.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Wat is acute nierschade?</h2>
        <p className="mb-4">
          Acute nierschade wordt ook wel acute nierinsufficiëntie genoemd. Het gaat om een plotselinge daling van de nierfunctie, meestal in uren tot dagen, en die verandering is in principe herstelbaar. Er bestaat geen één universele definitie. In de kern beschrijven definities vooral een daling van de glomerulaire filtratiesnelheid (GFR), soms aangevuld met criteria voor urineproductie en met markers van nierschade, zoals proteïnurie of bloedbiomarkers.
        </p>
        <p className="mb-4">
          Formele classificatiesystemen, zoals RIFLE en AKIN, bestaan wel, maar worden in de dagelijkse Nederlandse praktijk bijna nooit gebruikt. In de kliniek wordt vaak gekeken naar serumcreatinine, vaak via een eGFR-berekening zoals CKD-EPI. Daar zit meteen een belangrijk punt: zo’n formule gaat uit van een stabiele creatininewaarde, en juist dat is bij acute nierschade per definitie niet het geval. Als er geen oude basiswaarde bekend is, ga je uit van een patiënt bij wie de nierfunctie eerder normaal was en bij wie de verslechtering in korte tijd is ontstaan.
        </p>
        <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
          <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
            Denkvraag: Waarom is een eGFR op basis van CKD-EPI hier niet betrouwbaar?  Antwoord: Omdat de formule uitgaat van een stabiele creatininewaarde, en die is bij acute nierschade juist niet stabiel.
          </p>
        </div>
      </div>
    </div>
  )
}
