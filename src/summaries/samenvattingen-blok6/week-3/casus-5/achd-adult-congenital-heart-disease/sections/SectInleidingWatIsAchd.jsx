import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inleiding: wat is ACHD?`}</Inline></SubHeading>
      <PBody text={`ACHD staat voor **Adult Congenital Heart Disease**: aangeboren hartafwijkingen bij volwassenen. Aangeboren hartafwijkingen komen voor bij ongeveer **0,8% van alle levend geboren kinderen**. Het gaat om een brede groep afwijkingen: van kleine afwijkingen die soms vanzelf verdwijnen tot ernstige afwijkingen waarbij een kind zonder behandeling niet kan overleven.`} />
      <PBody text={`Door de introductie van de hartchirurgie in de jaren **’50 en ’60** is de overleving sterk verbeterd. Waar vroeger veel kinderen met een aangeboren hartafwijking al op kinderleeftijd overleden, bereikt nu **meer dan 90%** de volwassen leeftijd. Daardoor zijn er tegenwoordig meer volwassenen dan kinderen met een aangeboren hartafwijking. Veel van deze volwassenen zijn eerder geopereerd of behandeld en moeten op lange termijn gecontroleerd worden op complicaties zoals ritmestoornissen, hartfalen, endocarditis, plotse dood en de noodzaak tot heringrepen.`} />
    </div>
  )
}
