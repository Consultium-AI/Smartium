import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het geleidingssysteem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart heeft een eigen elektrisch geleidingssysteem. Dat systeem zorgt ervoor dat de prikkel op een vaste en efficiënte manier door het hart loopt.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke onderdelen van het geleidingssysteem`}</Inline></SubHeading>
      <DataTable rows={[["Structuur", "Functie"], ["Sinusknoop", "Zet het hart aan tot kloppen, ongeveer 60-100 keer per minuut"], ["AV-knoop", "Geeft de prikkel door van atria naar ventrikels en veroorzaakt vertraging"], ["Bundel van His", "Leidt de prikkel verder na de AV-knoop"], ["Bundeltakken", "Verdelen de prikkel over linker- en rechterkamer"], ["Purkinje-systeem", "Zorgt voor snelle verspreiding door de ventrikels"]]} />
      <p className="leading-relaxed"><Inline>{`De sinusknoop ligt boven in het rechteratrium, bij de inmonding van de vena cava superior. Dit is de normale pacemaker van het hart. Vanuit daar verspreidt de elektrische prikkel zich door de atria.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De atria en ventrikels zijn elektrisch van elkaar gescheiden. De AV-knoop is daarom het enige doorgeefstation tussen beide. Deze knoop zorgt ook voor een kleine vertraging, zodat de atria eerst kunnen bijdragen aan de vulling van de ventrikels.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Na de AV-knoop loopt de prikkel via de bundel van His, die zich splitst in een linker- en rechterbundeltak. De linkerbundel splitst later nog verder in een linker anterior en linker posterior fascikel. Daarna verspreidt de prikkel zich via het Purkinje-systeem snel door de ventrikels.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom zie je de sinusknoop en AV-knoop niet apart op het ECG?
**Mini-antwoord:** Omdat deze structuren te klein zijn om hun elektrische activiteit aan de huid te meten; je ziet vooral de activatie van de hartspier zelf.`} />
    </div>
  )
}
