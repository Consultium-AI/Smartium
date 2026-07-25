import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Klinische chemie draait om het meten en interpreteren van biomarkers in lichaamsvloeistoffen. Daarbij zijn het juiste monster, de juiste buis en de juiste interpretatie essentieel. **Serum** ontstaat na stolling en bevat geen stollingsfactoren meer; **plasma** bevat die wel. Voor betrouwbare uitslagen moet je weten welke buis bij welke bepaling hoort.`} />
      <PBody text={`Daarnaast zijn **juistheid** en **precisie** belangrijk: juistheid zegt iets over de nabijheid van de echte waarde, precisie over de herhaalbaarheid. **Interferenties** zoals hemolyse, lipemie en icterus kunnen de uitslag verstoren.`} />
      <PBody text={`Bij interpretatie helpen **sensitiviteit** en **specificiteit**. Sensitieve testen missen weinig zieke mensen, specifieke testen geven weinig vals-positieven. Voor leverschade is **ASAT** gevoelig, maar **ALAT** specifieker. Voor acute pancreatitis zijn **amylase** en **lipase** belangrijk, en bij nierfunctie speelt **kreatinine** een grote rol, maar vaak in combinatie met andere markers of formules.`} />
    </div>
  )
}
