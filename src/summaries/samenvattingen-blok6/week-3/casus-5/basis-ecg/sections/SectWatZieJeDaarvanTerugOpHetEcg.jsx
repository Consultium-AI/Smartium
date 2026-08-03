import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat zie je daarvan terug op het ECG?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet alle onderdelen van het geleidingssysteem zijn zichtbaar op het oppervlakte-ECG. De sinusknoop, AV-knoop, bundel van His, bundeltakken en het Purkinje-systeem zijn te klein om direct als spanning aan de huid te meten. Wat je wél ziet, is de elektrische activatie van de hartspier zelf. Die spiermassa is veel groter en geeft dus een meetbaar signaal.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De verschillende hartcellen hebben elk hun eigen actiepotentiaal. De optelsom van al die elektrische activiteit vormt het ECG.`}</Inline></p>
    </div>
  )
}
