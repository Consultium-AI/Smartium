export default function Sect12KleurcodesIn3d() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Kleurcodes in 3D: activatiekaart en voltagekaart</h2>
      <p>Bij 3D-mapping wordt vaak een kleurensysteem gebruikt.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Activatiekaart</h3>
      <p>Deze kaart laat zien wanneer een elektrische prikkel op een plek aankomt.</p>
      <p>Rood / wit: de allereerste activatie, dus de bron of startplek.</p>
      <p>
        Daarna veranderen de kleuren geleidelijk naar geel → groen → blauw → paars: dit laat de voortgeleiding over het hartspierweefsel zien.
      </p>
      <p>Hiermee zie je of de prikkel in een rond circuit blijft rondgaan of juist vanuit één focus uitwaaiert.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Voltagekaart</h3>
      <p>Deze kaart laat zien hoe goed het hartweefsel is door de sterkte van het signaal.</p>
      <p>Paars: gezond, krachtig hartspierweefsel.</p>
      <p>Rood / grijs / meerkleurig: slecht of ziek weefsel, vaak littekenweefsel of zones met weinig tot geen signaal.</p>
      <p>
        Bij ventrikeltachycardieën zoekt de arts vaak naar zulke grijze of rode littekens, omdat de ritmestoornis vaak rondom de rand van zo’n litteken cirkelt.
      </p>
    </div>
  )
}
