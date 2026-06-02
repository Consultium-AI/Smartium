import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-emerald-50/90 dark:bg-emerald-500/10 rounded-xl border-l-4 border-emerald-400 space-y-4">
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Deze casusbijeenkomst draait om het herkennen en begrijpen van **auto-immuunziekten**, met Sjögren als hoofdvoorbeeld. Belangrijk is het onderscheid tussen immuundeficiëntie, auto-inflammatie en auto-immuniteit. T-cellen worden in de thymus geselecteerd via positieve selectie in de cortex en negatieve selectie in de medulla. In de periferie zorgen anergie, suppressie en immune privileged sites voor extra tolerantie.`}</Inline>
        </p>
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Sjögren kan heel verschillend verlopen: van vooral droogte en vermoeidheid tot duidelijke systemische ziekteactiviteit of overlap met andere auto-immuunziekten. De diagnose steunt op klachten, objectieve testen zoals Schirmer en speekselfunctie, autoantistoffen en speekselklierbiopt. De behandeling hangt af van het dominante beeld: droogtebehandeling, symptomatische therapie, of systemische immunosuppressie bij actieve ziekte.`}</Inline>
        </p>
      </div>
    </div>
  )
}
