import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van astma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hoofddoel van de behandeling is het bereiken van optimale astmacontrole. Daarbij streef je naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`zo weinig mogelijk klachten;`}</Inline></li>
        <li><Inline>{`zo weinig mogelijk gebruik van rescue-medicatie;`}</Inline></li>
        <li><Inline>{`een zo goed mogelijke longfunctie en kwaliteit van leven;`}</Inline></li>
        <li><Inline>{`op de lange termijn zo weinig mogelijk exacerbaties, longfunctieverlies en bijwerkingen van medicatie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Astmacontrole bestaat uit twee delen: de huidige controle en het toekomstig risico. De huidige controle gaat over symptomen, rescue-medicatie, dagelijkse activiteiten en longfunctie. Het toekomstig risico gaat over instabiliteit, exacerbaties, longfunctieverlies en gebruik van orale corticosteroïden.`}</Inline></p>
      <SubHeading><Inline>{`Vier pijlers van behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor een goede behandeling zijn vier onderdelen belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`patiënteducatie;`}</Inline></li>
        <li><Inline>{`minimaliseren van blootstelling aan triggers;`}</Inline></li>
        <li><Inline>{`monitoren van symptomen en/of longfunctie;`}</Inline></li>
        <li><Inline>{`medicamenteuze behandeling.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze vier onderdelen zijn even belangrijk en horen allemaal aandacht te krijgen.`}</Inline></p>
    </div>
  )
}
