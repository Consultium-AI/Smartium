import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De drie pijlers van de diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnostiek van allergie rust op drie pijlers:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Anamnese**`}</Inline></li>
        <li><Inline>{`**Aantonen van sensibilisatie**`}</Inline></li>
        <li><Inline>{`**Provocatie**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Anamnese`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De anamnese is altijd de basis. Je vraagt gericht naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`klachten;`}</Inline></li>
        <li><Inline>{`tijdsbeloop;`}</Inline></li>
        <li><Inline>{`seizoensgebondenheid;`}</Inline></li>
        <li><Inline>{`mogelijke allergenen;`}</Inline></li>
        <li><Inline>{`beroep;`}</Inline></li>
        <li><Inline>{`herhaling van klachten;`}</Inline></li>
        <li><Inline>{`begin van de klachten;`}</Inline></li>
        <li><Inline>{`regelmaat;`}</Inline></li>
        <li><Inline>{`ernst.`}</Inline></li>
      </ul>
      <PBody text={`De vraag is steeds: **welk allergeen past bij dit klachtenpatroon?**`} />
      <SubHeading><Inline>{`Aantonen van sensibilisatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sensibilisatie kun je aantonen met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`huidtesten;`}</Inline></li>
        <li><Inline>{`specifiek IgE in bloed;`}</Inline></li>
        <li><Inline>{`soms recombinant allergeenbepaling.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat een positieve test niet automatisch betekent dat iemand ook echt klinische klachten heeft.`}</Inline></p>
      <SubHeading><Inline>{`Provocatie`}</Inline></SubHeading>
      <PBody text={`De **provocatie** is de **gouden standaard**. Vooral bij voedselallergie is een **dubbelblinde placebogecontroleerde voedselprovocatie (DBPCFC)** belangrijk. Dat is nodig omdat er veel niet-klinisch relevante sensibilisaties bestaan.`} />
    </div>
  )
}
