export default function Sect02Inleiding() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Inleiding</h2>
      <p>
        Auto-immuniteit en auto-immuunziekten horen bij elkaar, maar zijn niet hetzelfde. Auto-immuniteit
        betekent dat het immuunsysteem reageert op lichaamseigen antigenen. Dat hoeft nog niet meteen tot
        ziekte te leiden. Pas wanneer deze reactie schade veroorzaakt aan cellen, weefsels of organen,
        spreken we van een auto-immuunziekte.
      </p>
      <p>
        Het immuunsysteem wordt normaal beschermd tegen het aanvallen van lichaamseigen structuren door
        immunologische tolerantie. Die tolerantie kan op verschillende manieren verdwijnen. Daarna kunnen
        auto-reactieve T-cellen en B-cellen actief worden, auto-antistoffen ontstaan en ontsteking of
        weefselschade volgen.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Waarom is
          auto-immuniteit niet automatisch een ziekte?
          </p>
          <p className="mt-2">
            <strong className="text-amber-950 dark:text-amber-50">Mini-antwoord:</strong>{' '}
            Omdat een
          immuunreactie tegen lichaamseigen antigenen pas tot een auto-immuunziekte leidt als die reactie ook
          daadwerkelijk schade veroorzaakt.
        </p>
      </div>
    </div>
  )
}
