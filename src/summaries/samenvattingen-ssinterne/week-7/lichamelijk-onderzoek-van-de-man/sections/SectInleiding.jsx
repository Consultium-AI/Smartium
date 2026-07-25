import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inleiding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij urogenitale klachten hoort naast het algemene lichamelijk onderzoek ook onderzoek van de genitalia en vaak een rectaal onderzoek. Dat kan voor zowel patiënt als arts belastend zijn. Gevoelens van gêne zijn normaal, maar het is belangrijk die te onderkennen en het onderzoek zo zorgvuldig en duidelijk mogelijk uit te voeren. Daarmee voorkom je dat een mogelijk behandelbare aandoening te laat wordt ontdekt.`}</Inline></p>
    </div>
  )
}
