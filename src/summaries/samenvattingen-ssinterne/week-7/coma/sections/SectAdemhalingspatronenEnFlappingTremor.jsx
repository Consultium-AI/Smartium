import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ademhalingspatronen en flapping tremor`}</Inline></SubHeading>
      <PBody text={`Sommige ademhalingspatronen geven aanwijzingen voor de oorzaak van coma. Een **Kussmaul-ademhaling** is rustig maar diep en past bij metabole acidose. Een **Cheyne-Stokes-ademhaling** is periodiek, met afwisselend dieper en oppervlakkiger ademen en korte apneuperiodes; dit is weinig specifiek en wordt vaak gezien in de stervensfase. **Tachypneu** is snel en oppervlakkig en kan bijvoorbeeld passen bij sepsis of overvulling.`} />
      <PBody text={`Een **flapping tremor** of **asterixis** is een onregelmatig kortdurend tonusverlies, vooral zichtbaar wanneer de armen gestrekt worden met de handen naar beneden. Dit zie je onder andere bij hepatische en uremische encefalopathie.`} />
    </div>
  )
}
