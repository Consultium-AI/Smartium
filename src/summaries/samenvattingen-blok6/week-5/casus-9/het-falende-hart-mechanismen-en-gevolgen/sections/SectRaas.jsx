import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`RAAS`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een dalende cardiac output daalt ook de nierperfusie. Dat activeert het renine-angiotensine-aldosteronsysteem. Renine wordt afgegeven door het juxtaglomerulaire apparaat in de nier. Het zet angiotensinogeen om in angiotensine I, waarna ACE dit omzet in angiotensine II.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Angiotensine II veroorzaakt krachtige vasoconstrictie en stimuleert de afgifte van aldosteron. Aldosteron zorgt in de nier voor natrium- en waterretentie. Daardoor stijgen afterload en preload. Op korte termijn helpt dit de bloeddruk en perfusie te ondersteunen, maar op lange termijn leidt het tot volume-overbelasting, fibrose, hypertrofie en verdere schade aan het myocard.`}</Inline></p>
    </div>
  )
}
