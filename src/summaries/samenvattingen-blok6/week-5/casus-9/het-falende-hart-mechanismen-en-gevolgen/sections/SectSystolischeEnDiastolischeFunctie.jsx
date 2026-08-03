import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systolische en diastolische functie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart heeft twee hoofdrollen in elke hartcyclus. Tijdens de systole trekt het ventrikel samen en wordt bloed de circulatie in gepompt. Tijdens de diastole ontspant het ventrikel en vult het zich opnieuw met bloed. Beide processen zijn actief gereguleerd en beide zijn nodig om een normaal slagvolume te krijgen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Systole hangt vooral samen met contractiliteit, dus de kracht waarmee het myocard samentrekt. Diastole hangt samen met relaxatie en compliantie, dus met hoe goed het ventrikel zich kan ontspannen en vullen. Ook de calciumhuishouding in de hartspier speelt hierbij een rol: contractie vraagt calciuminstroom en interactie tussen actine en myosine, terwijl relaxatie actieve heropname van calcium vereist.`}</Inline></p>
    </div>
  )
}
