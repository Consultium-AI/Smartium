import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypovolemie versus kaliumbelasting`}</Inline></SubHeading>
      <PBody text={`Bij **hypovolemie** is het RAAS sterk geactiveerd. Daardoor is er veel **angiotensine II**, wat zorgt voor sterke natriumreabsorptie in de proximale tubulus. Er komt dan nauwelijks natrium distaal aan, ook al staat ENaC open door een hoge aldosteronspiegel. Daardoor treedt er geen kaliumexcretie op.`} />
      <PBody text={`Bij een **kaliumbelasting** is het RAAS niet geactiveerd. Er is dus geen extra angiotensine II. De natriumflow en natriumreabsorptie verlopen dan normaal, waardoor kalium wel kan worden uitgescheiden.`} />
    </div>
  )
}
