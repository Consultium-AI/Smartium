import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`DM2: van insulineresistentie naar diabetes`}</Inline></h3>
      <p><Inline>{`Diabetes mellitus type 2 ontstaat door een combinatie van **aangeboren risico** en **omgevingsfactoren**. Vroeger werd DM2 ook wel ouderdomsdiabetes genoemd, maar inmiddels wordt het ook op jongere leeftijd gezien. De combinatie van genetische aanleg en leefstijl- of omgevingsinvloeden is hierbij belangrijk.`}</Inline></p>
      <p><Inline>{`De kern van DM2 is **insulineresistentie**. Dat betekent dat weefsels minder goed reageren op insuline. Eerst probeert het lichaam dit op te vangen door meer insuline te maken. Daardoor blijft de bloedsuiker nog enige tijd redelijk onder controle. Maar als de β-cellen van de pancreas die verhoogde behoefte niet meer kunnen bijbenen, ontstaat een **relatief insulinetekort**. Als de β-cellen verder beschadigd raken, kan uiteindelijk zelfs een **absoluut insulinetekort** ontstaan.`}</Inline></p>
    </div>
  )
}
