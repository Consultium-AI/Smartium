export default function Sect12InfectiesNaTransplantatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Infecties na transplantatie</h2>
      <p>
        Immuunsuppressiva verhogen de kans op infecties. Dat geldt voor virale, bacteriële, schimmel-, parasitaire en
        protozoaire infecties. Deze infecties kunnen atypisch presenteren en sneller verlopen. Er is wel een herkenbaar
        tijdspatroon:
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Tijdspatroon van infecties</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Tijd na transplantatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Typische situatie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                {`< 4 weken`}
              </td>
              <td className="px-4 py-3 align-top">Nosocomiaal, technisch, donor-/recipientgebonden</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">1-12 maanden</td>
              <td className="px-4 py-3 align-top">
                Reactivatie van latente infecties, opportunistische infecties, recidief
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                {`> 12 maanden`}
              </td>
              <td className="px-4 py-3 align-top">Meer community-acquired infecties</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De vier belangrijkste infecties die hier extra aandacht krijgen zijn CMV, PJP, EBV en SARS-CoV-2.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">CMV</h3>
      <p>
        Cytomegalovirus is een herpesvirus dat na infectie in de jeugd latent aanwezig blijft. Na transplantatie kunnen
        de klachten variëren van afwezig tot levensbedreigend, afhankelijk van primo-infectie of reactivatie. Het risico
        is hoger na T-cel-depleterende therapie, bij een CMV-positieve donor en seronegatieve ontvanger, en na het
        stoppen van profylaxe. Profylaxe vermindert de kans op ziekte en sterfte sterk. Valganciclovir 900 mg wordt
        gegeven, aangepast aan de nierfunctie, gedurende 3-6 maanden. Er is geen vaccin beschikbaar.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">PJP</h3>
      <p>
        Pneumocystis jirovecii veroorzaakt een ernstige pneumonie. Het risico neemt toe bij hoge doses prednison en na
        T-cel-depleterende therapie. Zonder behandeling is de sterfte zeer hoog. Daarom is profylaxe cruciaal. Cotrimoxazol
        480 mg wordt meestal 3-6 maanden gegeven; niet bij levertransplantatie en bij longtransplantatie zelfs levenslang.
        Ook hier is geen vaccin beschikbaar.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">EBV</h3>
      <p>
        Epstein-Barrvirus is opnieuw een herpesvirus en blijft latent aanwezig na infectie in de jeugd. Na transplantatie
        zijn de klachten meestal mild: koorts, malaise, keelpijn, lymfadenopathie en hepatosplenomegalie. Het virus kan
        leiden tot proliferatie van geïnfecteerde B-lymfocyten. Cytotoxische T-cellen en antistoffen zijn belangrijk voor
        de afweer. Ook hier is vooral na T-cel-depleterende therapie het risico op reactivatie verhoogd.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">SARS-CoV-2</h3>
      <p>
        SARS-CoV-2 is een variant van het coronavirus en is inmiddels endemisch. Na transplantatie kan het een
        luchtweginfectie geven, soms met asymptomatische hypoxie. Vooral longtransplantatiepatiënten hebben extra risico op
        sterfte. Bij een nierfunctie onder 30 ml/min, dialyse en niertransplantatie is de sterfte 3-4 keer hoger; die
        sterfte hangt vooral samen met kwetsbaarheid en leeftijd. Vaccinatie kan een antistofrespons geven, maar niet
        altijd. Na twee vaccinaties werd bij 57% van de niertransplantatiepatiënten antistofvorming gezien; herhaalde
        vaccinatie zorgde bij 70% van de non-responders alsnog voor respons. Ook na tijdelijk stoppen van MMF bleek er in
        één studie geen effect, maar dat onderzoek loopt nog. Toch kunnen transplantatiepatiënten nog steeds ernstig ziek
        worden van mildere varianten.
      </p>
    </div>
  )
}
