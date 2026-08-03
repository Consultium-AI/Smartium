import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat pleit voor hartfalen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Enkele bevindingen die hartfalen waarschijnlijker maken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`voorgeschiedenis van myocardinfarct`}</Inline></li>
        <li><Inline>{`orthopneu`}</Inline></li>
        <li><Inline>{`paroxismale nachtelijke dyspnoe`}</Inline></li>
        <li><Inline>{`gestuwde halsvenen`}</Inline></li>
        <li><Inline>{`derde harttoon`}</Inline></li>
        <li><Inline>{`crepitaties`}</Inline></li>
        <li><Inline>{`enkeloedeem`}</Inline></li>
        <li><Inline>{`dyspnoe bij inspanning`}</Inline></li>
      </ul>
      <PBody text={`Bij oudere patiënten met hypertensie, diabetes, obesitas en atriumfibrilleren moet je ook denken aan **HFpEF**: hartfalen met behouden ejectiefractie. Daarbij zijn klachten vaak aspecifiek, zoals moeheid, nycturie en dyspnoe bij lichte inspanning.`} />
      <SubHeading><Inline>{`HFpEF kort uitgelegd`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij HFpEF is de ejectiefractie normaal, maar het hart vult zich moeilijk omdat de kamer stijf is. Daardoor zijn de vullingsdrukken verhoogd. De klachten kunnen dus duidelijk zijn, terwijl de pompfunctie op het eerste gezicht nog “goed” lijkt.`}</Inline></p>
    </div>
  )
}
