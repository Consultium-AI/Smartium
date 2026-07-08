import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Adviezen voor een volgende zwangerschap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na een perinatale sterfte is het belangrijk om de kans op herhaling in te schatten. Die kans is in elk geval minstens twee keer zo groot, en kan nog hoger zijn bij factoren zoals chronische hypertensie, roken en een gecompliceerde obstetrische voorgeschiedenis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke adviezen voor een volgende zwangerschap zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`stoppen met roken;`}</Inline></li>
        <li><Inline>{`begeleiding van de volgende zwangerschap op medische indicatie;`}</Inline></li>
        <li><Inline>{`prenatale screening bespreken vanwege maternale leeftijd;`}</Inline></li>
        <li><Inline>{`frequente controles met aandacht voor foetale groei en maternale bloeddruk;`}</Inline></li>
        <li><Inline>{`duidelijke instructies over alarmsymptomen;`}</Inline></li>
        <li><Inline>{`periconceptionele foliumzuursuppletie.`}</Inline></li>
      </ul>
      <PBody text={`De zorg waarin advies wordt gegeven over een volgende zwangerschap heet **preconceptiezorg**.`} />
    </div>
  )
}
