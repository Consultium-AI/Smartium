import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Leefstijl als behandeling`}</Inline>
      </h3>
      <p>
        <Inline>{`Leefstijlinterventies vormen een essentieel onderdeel van de behandeling van diabetes type 2. Daarbij gaat het niet alleen om voeding, maar ook om **beweging, slaap en stress**. De kern is dat de **metabole belasting** van het lichaam omlaag gaat. Daardoor neemt de positieve energiebalans af en vermindert vetopstapeling in de lever en andere organen.`}</Inline>
      </p>
      <p>
        <Inline>{`Bij leefstijlbehandeling is het doel niet alleen gewichtsverlies, maar ook het verbeteren van de algehele gezondheid. Dit kan bijdragen aan:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`een betere kwaliteit van leven;`}</Inline>
        </li>
        <li>
          <Inline>{`minder risico op hart- en vaatziekten;`}</Inline>
        </li>
        <li>
          <Inline>{`minder behoefte aan medicatie;`}</Inline>
        </li>
        <li>
          <Inline>{`en in sommige gevallen remissie.`}</Inline>
        </li>
      </ul>
      <p>
        <Inline>{`In Nederland bestaan verschillende leefstijlprogramma’s die gericht zijn op remissie van DM2. Een voorbeeld is **Keer Diabetes2 Om**, een multidisciplinair leefstijlprogramma van 6 maanden met aandacht voor voeding, beweging, slaap, stress en gedragsverandering. Zulke programma’s vragen begeleiding, want zonder ondersteuning is het vaak lastig om leefstijlveranderingen vol te houden.`}</Inline>
      </p>
      <p>
        <Inline>{`Leefstijl is vooral belangrijk in de fase ná het bereiken van remissie, omdat een gezonde leefstijl helpt om het gewicht stabiel te houden en hernieuwde vetstapeling in lever en pancreas te voorkomen.`}</Inline>
      </p>
    </div>
  )
}
