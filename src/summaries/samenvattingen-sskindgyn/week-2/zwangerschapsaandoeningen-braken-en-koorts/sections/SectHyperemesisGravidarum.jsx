import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hyperemesis gravidarum`}</Inline></SubHeading>
      <PBody text={`Hyperemesis gravidarum is meer dan gewone zwangerschapsmisselijkheid. Het gaat om **aanhoudend braken**, met **gewichtsverlies**, **dehydratie** en **ketonurie**. Ketonurie betekent dat er ketonen in de urine zitten; dat past bij vasten en onvoldoende voeding.`} />
      <p className="leading-relaxed"><Inline>{`Een handige manier om dit te onthouden is: de zwangere houdt niets binnen en raakt daardoor uitgedroogd en afgevallen.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Wanneer denk je aan hyperemesis gravidarum en niet alleen aan misselijkheid?**
Als het braken aanhoudt, de patiënte afvalt, tekenen van dehydratie heeft en ketonen in de urine heeft.`} />
    </div>
  )
}
