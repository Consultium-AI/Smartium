import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-emerald-50/90 dark:bg-emerald-500/10 rounded-xl border-l-4 border-emerald-400">
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Bij een jonge vrouw met een borstknobbel en familiale belasting moet je borstkanker serieus overwegen en verder onderzoeken. Mammografie is de primaire diagnostiek, maar bij dicht borstweefsel is de sensitiviteit lager en zijn echografie en soms MRI belangrijk als aanvulling. Histologie heeft de voorkeur boven cytologie, omdat je dan de weefselstructuur en groeipatroon kunt beoordelen. ER, PR en HER2 zijn essentiële biomarkers voor diagnose en behandeling. HER2 past bij de hallmark sustaining proliferative signaling. Bij gelokaliseerd mammacarcinoom is de behandeling curatief en bestaat deze uit chirurgie, systeemtherapie en radiotherapie, met radiotherapie vooral na borstsparende chirurgie.`}</Inline>
        </p>
      </div>
    </div>
  )
}
