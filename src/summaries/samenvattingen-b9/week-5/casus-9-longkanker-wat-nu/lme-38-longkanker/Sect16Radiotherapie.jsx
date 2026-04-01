export default function Sect16Radiotherapie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Radiotherapie</h2>
      <p>
        Radiotherapie gebruikt hoogenergetische straling, meestal fotonen, om kankercellen te beschadigen. Daardoor ontstaat DNA-schade, waardoor cellen niet meer kunnen delen en uiteindelijk afsterven.
      </p>
      <p>Radiotherapie kan op verschillende manieren worden ingezet:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Curatief</span>: bij vroeg stadium longkanker, vaak als chirurgie niet mogelijk is.
        </li>
        <li>
          <span className="font-semibold">Adjuvant of neoadjuvant</span>: vóór of na een operatie, om de tumor te verkleinen of restcellen te vernietigen.
        </li>
        <li>
          <span className="font-semibold">Palliatief</span>: bij gevorderde ziekte om klachten, zoals pijn, te verlichten.
        </li>
      </ul>
      <p>
        Bij <span className="font-semibold">stereotactische radiotherapie</span> wordt een hoge dosis in een beperkt aantal fracties gegeven, met hoge precisie en sparing van gezond weefsel. Dat is vooral geschikt voor kleine tumoren of uitzaaiingen. Een voorbeeld is de <span className="font-semibold">CyberKnife</span>.
      </p>
      <p>Bij radiotherapie moet ook rekening worden gehouden met beweging van de tumor door de ademhaling. Dat kan bijvoorbeeld met:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">ITV</span> (<em>internal target volume</em>): het totale volume dat de tumor tijdens de ademhaling inneemt;
        </li>
        <li>
          <span className="font-semibold">tracking</span>: het volgen van de tumorbeweging tijdens de behandeling, bijvoorbeeld met markers.
        </li>
      </ul>
    </div>
  )
}
