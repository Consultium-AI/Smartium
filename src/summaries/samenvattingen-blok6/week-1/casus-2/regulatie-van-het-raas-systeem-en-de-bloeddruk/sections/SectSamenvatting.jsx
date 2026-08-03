import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het RAAS is een essentieel systeem voor de regulatie van bloeddruk en volumestatus. De lever maakt angiotensinogeen, de nier maakt renine, en via ACE ontstaat angiotensine II. Angiotensine II verhoogt de bloeddruk door vasoconstrictie en stimuleert daarnaast aldosteron, ADH, dorst en natrium- en waterretentie. Aldosteron zorgt in de nier voor natriumretentie en kaliumexcretie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het RAAS wordt geactiveerd bij hypotensie, hypovolemie en uitdroging, en kan ook pathologisch actief zijn bij hartfalen. Medicijnen zoals ACE-remmers, ARB’s, renineremmers en MRA’s remmen dit systeem op verschillende plekken. Daarbij moet je vooral letten op kalium, nierfunctie en mogelijke bijwerkingen zoals kriebelhoest, hyperkaliëmie en hypotensie.`}</Inline></p>
    </div>
  )
}
