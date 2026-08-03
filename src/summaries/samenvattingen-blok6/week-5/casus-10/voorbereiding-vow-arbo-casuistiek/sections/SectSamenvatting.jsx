import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze module laat zien hoe verzuim, re-integratie en beroepsziekten in Nederland wettelijk en praktisch zijn georganiseerd. De kern is dat ziekteverzuim niet alleen medisch is, maar bijna altijd ook samenhangt met werk, privé-omstandigheden en persoonlijke factoren. De bedrijfsarts speelt daarin een centrale, onafhankelijke rol.`}</Inline></p>
      <PBody text={`Belangrijk zijn vooral de **WVP-stappen**, de **4 A’s en 3 P’s**, de samenwerking met huisarts, specialist en verzekeringsarts, en het herkennen van **beroepsziekten**. Ook moet je onthouden dat de werkgever bij ziekte van een werknemer met een vast contract **104 weken loon doorbetaalt** en dat de bedrijfsarts alleen informatie mag delen die relevant is voor werk en belastbaarheid.`} />
    </div>
  )
}
