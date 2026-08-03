import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinisch redeneren: wanneer wordt een afwijking ontdekt?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet elke aangeboren hartafwijking wordt direct na de geboorte gevonden. Sommige worden pas op volwassen leeftijd ontdekt.`}</Inline></p>
      <DataTable rows={[["Kans op late ontdekking", "Afwijking"], ["minst waarschijnlijk", "VSD"], ["daarna", "coarctatio aortae"], ["meest waarschijnlijk", "ASD"]]} />
      <p className="leading-relaxed"><Inline>{`Een VSD geeft meestal een duidelijk hartgeruis en wordt daarom vaak al op kinderleeftijd ontdekt, bijvoorbeeld bij het consultatiebureau. Een coarctatie kan leiden tot hypertensie van de bovenste extremiteiten, maar dat blijft vaak onopgemerkt als de bloeddruk niet wordt gemeten. Een ASD wordt het vaakst pas op volwassen leeftijd gevonden. Het geeft vaak geen geruis; als er wel een geruis is, komt dat meestal door relatieve pulmonalisklepstenose doordat er veel bloed door de longcirculatie stroomt.`}</Inline></p>
    </div>
  )
}
