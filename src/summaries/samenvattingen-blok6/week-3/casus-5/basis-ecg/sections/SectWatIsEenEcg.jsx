import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is een ECG?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het elektrocardiogram, kortweg ECG, is een registratie van de elektrische activiteit van het hart. Die activiteit wordt gemeten met elektroden op de huid. Je kunt het ECG zien als een grafiek van de spanning van het hart tegen de tijd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Om het ECG goed te begrijpen, moet je eerst weten hoe het hart elektrisch en anatomisch is opgebouwd. Het hart bestaat uit twee boezems, de atria, en twee kamers, de ventrikels. Normaal trekken de atria eerst samen en daarna de ventrikels. Daardoor helpen de atria met het vullen van de ventrikels, waarna de ventrikels het bloed naar de longcirculatie en de lichaamscirculatie pompen.`}</Inline></p>
    </div>
  )
}
