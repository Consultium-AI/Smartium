import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Van alveolus naar arterieel bloed`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De arteriële zuurstofdruk, PaO2, hangt samen met de ingeademde zuurstof en met de hoeveelheid CO2 in het bloed. In deze stof wordt dat samengevat met:`}</Inline></p>
      <PBody text={`**PaO2 = pO2 – (1,25 × PaCO2)**`} />
      <p className="leading-relaxed"><Inline>{`Hieruit volgt dat bij normoventilatie de PaO2 normaal is, maar dat bij hypoventilatie de PaO2 daalt doordat de PaCO2 stijgt. Bij hyperventilatie gebeurt het omgekeerde: de PaCO2 daalt en de PaO2 stijgt.`}</Inline></p>
      <DataTable rows={[["Situatie", "PaCO2", "PaO2"], ["Normoventilatie", "40 mmHg", "100 mmHg"], ["Hypoventilatie", "80 mmHg", "50 mmHg"], ["Hyperventilatie", "28 mmHg", "115 mmHg"]]} />
    </div>
  )
}
