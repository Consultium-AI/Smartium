import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloedglucose als homeostatische variabele`}</Inline></SubHeading>
      <PBody text={`Ook de glucoseconcentratie in het bloed is homeostatisch gereguleerd. Als de bloedglucose stijgt, reageren de **β-cellen in de pancreas**. Zij fungeren als sensor, inputsignaal en integrator.`} />
      <PBody text={`De β-cellen geven dan **insuline** af. Insuline is het outputsignaal. Daardoor gebeurt het volgende:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de meeste weefsels nemen meer glucose op`}</Inline></li>
        <li><Inline>{`in lever en spieren neemt de **glycogeensynthese** toe`}</Inline></li>
        <li><Inline>{`in lever en spieren neemt de **glycogenolyse** af`}</Inline></li>
        <li><Inline>{`in de lever neemt de **gluconeogenese** af`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Samen zorgt dit ervoor dat de bloedglucose weer daalt.`}</Inline></p>
      <DataTable rows={[["Tabel 4. Effecten van insuline bij stijgende bloedglucose"], ["Meeste weefsels", "glucose-opname in cellen ↑"], ["Lever en spieren", "glycogeensynthese ↑"], ["Lever en spieren", "glycogenolyse ↓"], ["Lever", "gluconeogenese ↓"]]} />
      <PBody text={`Bij een daling van de bloedglucose geven de **α-cellen** in de pancreas glucagon af, waardoor de glucoseconcentratie weer stijgt. Dat wordt hier verder niet uitgewerkt, maar het past wel in hetzelfde principe van homeostase.`} />
    </div>
  )
}
