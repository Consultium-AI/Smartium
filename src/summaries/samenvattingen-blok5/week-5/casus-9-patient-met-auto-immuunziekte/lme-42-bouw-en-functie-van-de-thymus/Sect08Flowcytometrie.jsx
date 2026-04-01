export default function Sect08Flowcytometrie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Flowcytometrie en thymocytenpopulaties
      </h2>
      <p>
        De verschillende ontwikkelingsstadia van thymocyten kunnen zichtbaar worden gemaakt met
        flowcytometrie. Daarbij worden cellen aangekleurd met fluorescente antistoffen tegen CD4 en CD8.
        Vervolgens worden de cellen door een flowcytometer geanalyseerd. Elk punt in een dotplot staat voor
        één cel.
      </p>
      <p>Met deze techniek kun je zien welke cellen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>geen CD4 of CD8 tot expressie brengen;</li>
        <li>beide markers tot expressie brengen;</li>
        <li>alleen CD4 tot expressie brengen;</li>
        <li>alleen CD8 tot expressie brengen.</li>
      </ul>
      <p>
        Dat maakt het mogelijk om de thymocyten in hun verschillende subpopulaties te verdelen en hun
        rijping te volgen.
      </p>
    </div>
  )
}
