import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-emerald-50/90 dark:bg-emerald-500/10 rounded-xl border-l-4 border-emerald-400 space-y-4">
      <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0"><Inline>{`De huid is een actieve barrière die bescherming biedt tegen uitdroging, irriterende stoffen, allergenen en micro-organismen. De epidermis, vooral het stratum corneum, speelt hierin een centrale rol. Als de barrière beschadigd raakt, ontstaat meer TEWL, dringen stoffen makkelijker binnen en worden keratinocyten geactiveerd. Daardoor komen cytokinen vrij, zoals IL-1, IL-33 en TSLP, en ontstaat ontsteking.`}</Inline></p>
      <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0"><Inline>{`Bij chronische huidziekten is dit een vicieuze cirkel: barrièrebeschadiging veroorzaakt inflammatie, en inflammatie maakt de barrière weer slechter. In deze casus past het beeld van de schilder het best bij irritatief contacteczeem: directe schade door oplosmiddelen, verf en andere irriterende factoren, zonder dat sensibilisatie nodig is. Allergisch contacteczeem blijft een belangrijke differentiaaldiagnose, maar daarbij is juist een type IV-hypersensitiviteit met sensibilisatie via Langerhanscellen nodig.`}</Inline></p>
      <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0"><Inline>{`Preventie draait om het beschermen van de huidbarrière: zonbescherming, handschoenen, milde zeep, hydrateren, terugvettende middelen en het vermijden van bijtende stoffen.`}</Inline></p>
      </div>
    </div>
  )
}
