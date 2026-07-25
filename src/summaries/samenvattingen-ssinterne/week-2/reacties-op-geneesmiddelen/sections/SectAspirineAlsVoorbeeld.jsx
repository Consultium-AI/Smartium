import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aspirine als voorbeeld`}</Inline></SubHeading>
      <PBody text={`**Aspirine** is een bekend middel waarbij overgevoeligheidsreacties kunnen optreden. Omdat aspirine veel wordt gebruikt, is het belangrijk om reacties erop serieus te nemen en goed te documenteren.`} />
      <PBody text={`Bij een reactie op aspirine of een andere NSAID moet je dus niet alleen denken aan een “gewone allergie”, maar ook aan een **pseudo-allergische reactie**. Dat helpt om de reactie beter te begrijpen en om in de toekomst zorgvuldig met deze middelen om te gaan.`} />
    </div>
  )
}
