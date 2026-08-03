import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostische aanpak`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose van een zuur-base stoornis stel je stap voor stap:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Kijk of pH, pCO₂ en/of HCO₃⁻ afwijkend zijn.`}</Inline></li>
        <li><Inline>{`Bepaal of de afwijking acidose of alkalose geeft.`}</Inline></li>
        <li><Inline>{`Kijk of de primaire oorzaak respiratoir of metabool is.`}</Inline></li>
        <li><Inline>{`Beoordeel of compensatie aanwezig is.`}</Inline></li>
        <li><Inline>{`Gebruik zo nodig de anion gap bij metabole acidose.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een normale pH sluit dus geen stoornis uit als pCO₂ en bicarbonaat afwijkend zijn.`}</Inline></p>
    </div>
  )
}
