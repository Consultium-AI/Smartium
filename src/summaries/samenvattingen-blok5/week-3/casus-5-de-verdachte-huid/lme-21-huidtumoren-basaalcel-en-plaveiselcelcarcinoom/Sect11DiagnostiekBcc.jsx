export default function Sect11DiagnostiekBcc() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek bij verdenking op BCC</h2>
      <p>
        Bij een huidafwijking die mogelijk een basaalcelcarcinoom is, is het belangrijk om te kijken naar groei,
        pijnklachten en voorgeschiedenis. Ook palpatie van de onderlaag is relevant om te voelen of de tumor vastzit aan
        de onderlaag.
      </p>
      <p>
        Als er twijfel bestaat over uitbreiding naar diepere structuren, kan beeldvorming nodig zijn. CT is het beste om
        botaanasting te beoordelen. MRI laat de weke delen beter zien en is dus nuttig als je bijvoorbeeld uitbreiding langs
        een zenuw wilt beoordelen.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-900 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtvraag:</strong> Waarom kies je soms voor MRI in
          plaats van CT?{' '}
          <em className="not-italic font-medium">
            *Kort antwoord: omdat MRI de weke delen beter laat zien, bijvoorbeeld bij verdenking op zenuwuitbreiding.*
          </em>
        </p>
      </div>
    </div>
  )
}
