import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De twee circulaties in de longen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De longen hebben twee verschillende bloedvoorzieningen, en die hebben elk een eigen taak. Dat is belangrijk om goed uit elkaar te houden, want ze lijken op elkaar maar doen iets anders.`}</Inline></p>
      <PBody text={`De **pulmonale circulatie** zorgt voor de **gasuitwisseling**: zuurstof opnemen en koolstofdioxide afgeven. De **bronchiale circulatie** zorgt juist voor de **voeding en zuurstofvoorziening van het longweefsel zelf**. Je kunt die bronchiale circulatie vergelijken met de coronaircirculatie van het hart: die voedt ook het eigen weefsel, niet de rest van het lichaam.`} />
      <SubHeading><Inline>{`Tabel 1. Verschil tussen bronchiale en pulmonale circulatie`}</Inline></SubHeading>
      <DataTable rows={[["Circulatie", "Hoofdtaak", "Waarvoor dient het?"], ["Bronchiale circulatie", "Voeding van het longweefsel", "Zuurstof en voedingsstoffen aan de longen zelf leveren, afvalstoffen afvoeren"], ["Pulmonale circulatie", "Gasuitwisseling", "Zuurstof opnemen en koolstofdioxide verwijderen"]]} />
    </div>
  )
}
