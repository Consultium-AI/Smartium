import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe werkt CT?`}</Inline></SubHeading>
      <PBody text={`Bij een CT-scan draaien een röntgenbuis en detector snel om de patiënt heen. Tijdens die rotatie worden vanuit veel verschillende hoeken röntgenbeelden gemaakt. Een computer verwerkt deze gegevens en reconstrueert **dwarsdoorsneden** van het lichaam. Die plakjes kunnen daarna worden gestapeld tot beelden in andere vlakken of tot een 3D-reconstructie.`} />
    </div>
  )
}
