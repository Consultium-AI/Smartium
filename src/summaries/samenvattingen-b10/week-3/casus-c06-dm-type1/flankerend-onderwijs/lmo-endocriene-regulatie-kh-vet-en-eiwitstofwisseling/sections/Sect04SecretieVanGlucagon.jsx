export default function Sect04SecretieVanGlucagon() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Secretie van glucagon</h2>
      <p>
        Glucagon wordt uitgescheiden door de <strong className="text-slate-900 dark:text-slate-100">α-cellen</strong> van de pancreas. De regulatie van glucagon is anders dan die van insuline. Glucagon wordt <strong className="text-slate-900 dark:text-slate-100">niet direct</strong> geregeld door de bloedglucoseconcentratie, maar <strong className="text-slate-900 dark:text-slate-100">indirect via de β-cellen</strong>.
      </p>
      <p>
        Wanneer β-cellen insuline uitscheiden, geven zij tegelijk ook <strong className="text-slate-900 dark:text-slate-100">GABA</strong> af. GABA bindt aan GABA-receptoren op de α-cel. Daardoor stroomt chloride de cel in en wordt de α-cel <strong className="text-slate-900 dark:text-slate-100">gehyperpolariseerd</strong>. Hyperpolarisatie maakt depolarisatie moeilijker, waardoor ook calciuminstroom en glucagonsecretie worden geremd.
      </p>
      <p>
        Als de bloedglucose daalt, neemt deze remming af. Dan kunnen andere prikkels, zoals <strong className="text-slate-900 dark:text-slate-100">adrenaline</strong> en <strong className="text-slate-900 dark:text-slate-100">aminozuren</strong>, de glucagonsecretie gemakkelijker stimuleren. Ook hier geldt: meer intracellulair calcium leidt tot afgifte van glucagon uit de secretoire granules.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <h3 className="text-base font-semibold text-amber-900 dark:text-amber-100 m-0">Aandachtsvraag</h3>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Op welke twee manieren neemt glucagonsecretie toe bij vasten?</strong>
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          Ten eerste valt de remming door GABA vanuit de β-cellen weg. Ten tweede kunnen andere prikkels, zoals adrenaline en aminozuren, de α-cel dan beter activeren.
        </p>
      </div>
      <p>
        Glucagon en insuline hebben metabool tegengestelde effecten, maar glucagon kan tegelijk ook de glucose-gestimuleerde insulinesecretie versterken. Dat gebeurt via een effect op de β-cel, zodat insuline en glucagon samen de stofwisseling goed op elkaar afstemmen.
      </p>
    </div>
  )
}
