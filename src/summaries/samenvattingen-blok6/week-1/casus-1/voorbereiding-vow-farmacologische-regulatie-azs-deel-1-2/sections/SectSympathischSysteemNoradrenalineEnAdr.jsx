import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sympathisch systeem: noradrenaline en adrenerge receptoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In het sympathische systeem wordt in het ganglion acetylcholine afgegeven op nicotine-receptoren. Daarna wordt in het postganglionaire zenuwuiteinde meestal noradrenaline afgegeven op adrenerge receptoren in het doelorgaan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij het cardiovasculaire systeem spelen vooral alfa- en beta-adrenerge receptoren een rol. De sympathische aansturing van hart en bloedvaten verloopt dus via deze adrenerge receptoren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Noradrenaline wordt na afgifte uit de synaps weer opgenomen via re-uptake. Dat is het belangrijkste mechanisme waarmee het uit de synaptische spleet verdwijnt. Dit mechanisme kan worden geblokkeerd door re-uptake blokkers, zoals cocaïne en tricyclische antidepressiva.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat gebeurt er als re-uptake wordt geremd?
**Mini-antwoord:** Dan blijft noradrenaline langer in de synaps aanwezig en kan het langer op de receptor inwerken.`} />
    </div>
  )
}
