import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-emerald-50/90 dark:bg-emerald-500/10 rounded-xl border-l-4 border-emerald-400 space-y-4">
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Zwelling van de lies, oksel of een dik been vraagt om denken in hoofdgroepen: vasculair, lymfatisch, inflammatoir en soms borstklierweefsel. Een scherp begrensde, warme, rode en pijnlijke huid past sterk bij erysipelas, zeker als er een wondje als port d’entrée is. Een chronisch dikke arm na okselklierrdissectie of radiotherapie past bij lymfoedeem, waarbij een secundaire huidinfectie snel kan ontstaan.`}</Inline>
        </p>
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Een palpabele okselklier met nachtzweten en supraclaviculaire zwelling maakt maligniteit of lymfoom belangrijk. Hidradenitis suppurativa herken je aan recidiverende pijnlijke noduli in oksels of liezen, vaak met comedonen. De behandeling hangt af van de oorzaak: antibiotica bij erysipelas of secundaire infectie, lokale therapie bij hidradenitis, en gericht aanvullend onderzoek alleen als dat klinisch nodig is.`}</Inline>
        </p>
      </div>
    </div>
  )
}
