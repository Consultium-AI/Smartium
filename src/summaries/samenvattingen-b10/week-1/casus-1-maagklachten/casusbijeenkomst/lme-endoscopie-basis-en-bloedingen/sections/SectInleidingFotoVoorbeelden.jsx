import FotoTabUlcusPepticum from './inleiding-foto-tabs/FotoTabUlcusPepticum'
import FotoTabRefluxOesofagitis from './inleiding-foto-tabs/FotoTabRefluxOesofagitis'
import FotoTabOesofagusCarcinoom from './inleiding-foto-tabs/FotoTabOesofagusCarcinoom'
import FotoTabSlokdarmVarices from './inleiding-foto-tabs/FotoTabSlokdarmVarices'
import FotoTabColonPoliepen from './inleiding-foto-tabs/FotoTabColonPoliepen'
import FotoTabColonCarcinoom from './inleiding-foto-tabs/FotoTabColonCarcinoom'
import FotoTabInflammatoireDarmziekten from './inleiding-foto-tabs/FotoTabInflammatoireDarmziekten'

const panels = [
  { title: 'Ulcus pepticum', Content: FotoTabUlcusPepticum },
  { title: 'Reflux oesofagitis', Content: FotoTabRefluxOesofagitis },
  { title: 'Oesofagus carcinoom', Content: FotoTabOesofagusCarcinoom },
  { title: 'Slokdarm varices', Content: FotoTabSlokdarmVarices },
  { title: 'Colon poliepen', displayTitle: 'Colonpoliepen', Content: FotoTabColonPoliepen },
  { title: 'Colon carcinoom', Content: FotoTabColonCarcinoom },
  { title: 'Inflammatoire darmziekten', Content: FotoTabInflammatoireDarmziekten },
]

export default function SectInleidingFotoVoorbeelden() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">INLEIDING (6)</h2>
      <div className="grid gap-6 lg:grid-cols-[220px,minmax(0,1fr)]">
        <p className="text-sm lg:text-base">Bekijk hiernaast enkele voorbeelden in de vorm van foto&apos;s.</p>
        <div className="space-y-6">
          {panels.map(({ title, displayTitle, Content }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/90 dark:bg-slate-900/45 p-4 shadow-sm dark:shadow-black/20 scroll-mt-24"
            >
              <h3 className="font-bold text-primary-900 dark:text-primary-200 mb-3 text-lg">{displayTitle ?? title}</h3>
              <div className="space-y-3">
                <Content />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
