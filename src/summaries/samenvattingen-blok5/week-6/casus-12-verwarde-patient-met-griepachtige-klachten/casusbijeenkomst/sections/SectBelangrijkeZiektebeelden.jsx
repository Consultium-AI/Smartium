import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Koolmonoxidevergiftiging</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Koolmonoxidevergiftiging is een onderschat gevaar. Er wordt onderscheid gemaakt tussen **acute vergiftiging** (hogere concentratie, duidelijke intoxicatie, COHb in bloed is bruikbaar) en **chronische vergiftiging** (langdurige lage blootstelling, vage klachten, vaak verkeerd herkend).`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`De klachten kunnen neurologisch of psychisch zijn en daardoor op iets anders lijken. Dat maakt de diagnose lastig.`}</Inline>
      </p>

      <SubHeading level={2}>Vocht- en schimmelproblematiek</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Schimmel in huis kan luchtwegklachten geven en astma verergeren. Vooral kinderen en mensen met bestaande luchtwegproblemen kunnen hier last van hebben. Bij zichtbare schimmel, vochtige muren of lekkages moet je dit serieus nemen.`}</Inline>
      </p>
    </div>
  )
}
