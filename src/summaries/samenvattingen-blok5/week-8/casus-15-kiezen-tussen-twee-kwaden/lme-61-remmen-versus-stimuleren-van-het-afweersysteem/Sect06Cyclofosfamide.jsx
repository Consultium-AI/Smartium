export default function Sect06Cyclofosfamide() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Cyclofosfamide</h2>
      <p>
        Cyclofosfamide is een alkylerend middel. Het interfereert met de DNA-verdubbeling in de premitotische fase en is
        daardoor vooral effectief in snel delende cellen. Het middel moet ook door de lever worden gemetaboliseerd naar
        actieve metabolieten.
      </p>
      <p>
        Cyclofosfamide heeft weinig directe ontstekingsremmende activiteit en wordt daarom vaak in combinatie met
        steroïden gegeven. Het wordt gebruikt bij:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>agressieve auto-immuunziekten;</li>
        <li>conditionering voor hematopoëtische stamceltransplantatie;</li>
        <li>diverse hematologische en solide maligniteiten.</li>
      </ul>
      <p>Belangrijke gevolgen van deze behandeling zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>verhoogd infectierisico;</li>
        <li>duidelijke daling van CD8+-cellen en later herstel van CD4+-cellen;</li>
        <li>reactivering van latente virussen zoals CMV en varicella-zoster;</li>
        <li>
          bij langdurig hoge doseringen een relatie met blaaskanker, door de kankerverwekkende metaboliet acroleïne.
        </li>
      </ul>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">
            Aandachtspunt: waarom kan cyclofosfamide de infectiekans verhogen?
          </strong>{' '}
          <strong className="text-primary-900 dark:text-primary-200">Antwoord:</strong> omdat het snel delende
          immuuncellen remt en zo de afweer tijdelijk verzwakt.
        </p>
      </div>
    </div>
  )
}
