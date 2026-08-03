import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute kaliumbelasting: eerst snel beschermen, daarna uitscheiden`}</Inline></SubHeading>
      <PBody text={`Na een kaliumrijke maaltijd moet het lichaam eerst voorkomen dat de serumkaliumwaarde te sterk stijgt. Dat gebeurt door **snelle cellulaire redistributie**: kalium wordt tijdelijk vanuit het extracellulaire compartiment de cellen in verplaatst. De belangrijkste speler hierbij is de **Na-K-ATPase**. Dit is een pomp in het celmembraan die natrium naar buiten en kalium naar binnen transporteert.`} />
      <p className="leading-relaxed"><Inline>{`Deze pomp staat onder invloed van drie belangrijke factoren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Insuline**`}</Inline></li>
        <li><Inline>{`**Adrenaline / sympathische stimulatie**`}</Inline></li>
        <li><Inline>{`**Aldosteron**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daardoor kan het lichaam kalium snel uit het serum halen en in de cellen opslaan. Dat is vooral van belang direct na een maaltijd of bij een acute kaliumbelasting.`}</Inline></p>
    </div>
  )
}
