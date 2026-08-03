import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het algemene schema van homeostase`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een homeostatisch systeem kun je stap voor stap zo begrijpen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Stimulus**: de variabele verandert`}</Inline></li>
        <li><Inline>{`**Sensor**: de verandering wordt waargenomen`}</Inline></li>
        <li><Inline>{`**Inputsignaal**: het signaal gaat naar de integrator`}</Inline></li>
        <li><Inline>{`**Integrator**: vergelijkt met het setpoint`}</Inline></li>
        <li><Inline>{`**Outputsignaal**: er komt een reactie-signaal`}</Inline></li>
        <li><Inline>{`**Effector**: het doelweefsel of doelorgaan voert de reactie uit`}</Inline></li>
        <li><Inline>{`**Response**: de variabele wordt weer richting normaal gebracht`}</Inline></li>
        <li><Inline>{`**Negatieve feedback**: de oorspronkelijke verandering wordt tegengewerkt`}</Inline></li>
      </ul>
    </div>
  )
}
