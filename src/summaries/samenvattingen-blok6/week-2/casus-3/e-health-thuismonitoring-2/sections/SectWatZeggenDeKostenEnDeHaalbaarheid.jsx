import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat zeggen de kosten en de haalbaarheid?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De verschillende vormen van zorg op afstand lijken vaak aantrekkelijk, maar de module benadrukt dat niet alle zorg op afstand kosteneffectief is. Bij Hospital at Home en virtuele ziekenhuizen lijkt de kwaliteit van zorg op niveau te kunnen blijven, maar de kosten zijn vaak hoger dan bij reguliere zorg. Daarom moet goed worden uitgezocht welke zorg en welke patiëntgroepen geschikt zijn voor welk concept.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij de besproken studie over virtual wards werd bijvoorbeeld gevonden dat de opname in het ziekenhuis korter werd, maar dat de kosten per vrijgemaakte ziekenhuisdag hoger waren dan de kosten van een gewone ziekenhuisdag. Ook werd genoemd dat de virtual ward patiënten vaker opnieuw werden opgenomen. Tegelijk werd wel gezien dat patiënten die niet opnieuw werden opgenomen, een goede uitkomst hadden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kern is dus: zorg op afstand kan klinisch effectief zijn, maar dat betekent nog niet automatisch dat het ook goedkoper of efficiënter is.`}</Inline></p>
    </div>
  )
}
