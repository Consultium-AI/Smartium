import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het geleidingssysteem van het hart`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart heeft een eigen elektrisch geleidingssysteem dat de contractie aanstuurt. Dit systeem zorgt ervoor dat de prikkel op de juiste volgorde door het hart loopt.`}</Inline></p>
      <SubHeading><Inline>{`De sinusknoop`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Boven in het rechteratrium, bij de inmonding van de vena cava superior, ligt de sinusknoop, ook wel SA-knoop genoemd. Deze zet het hart normaal 60 tot 100 keer per minuut aan tot kloppen. De elektrische prikkel verspreidt zich daarna als een golf door de atria.`}</Inline></p>
      <SubHeading><Inline>{`De AV-knoop en de doorgifte naar de kamers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De atria en ventrikels zijn elektrisch volledig van elkaar gescheiden. De prikkel kan dus niet zomaar van atrium naar ventrikel oversteken. Daarvoor is één doorgifteweg nodig: de AV-knoop. Die ligt centraal in het hart.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De AV-knoop heeft twee belangrijke functies:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hij geeft de prikkel door van atrium naar ventrikel;`}</Inline></li>
        <li><Inline>{`hij veroorzaakt een korte vertraging tussen de activatie van atria en ventrikels.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Die vertraging is niet helemaal constant en staat onder invloed van onder andere de vagale tonus.`}</Inline></p>
      <SubHeading><Inline>{`Bundel van His, bundeltakken en Purkinje-systeem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de AV-knoop loopt de prikkel via de bundel van His verder. Die splitst zich snel in een linker- en rechterbundeltak. De linkerbundel splitst zich later nog in een linker anterior fascikel en een linker posterior fascikel. Daarna vertakt het systeem verder in het Purkinje-systeem.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dit gespecialiseerde systeem geleidt zeer snel. Daardoor kunnen de ventrikels vrijwel tegelijk geactiveerd worden.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke onderdelen van het geleidingssysteem`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Functie"], ["Sinusknoop", "Start de prikkel en bepaalt het normale hartritme"], ["AV-knoop", "Geeft de prikkel door van atria naar ventrikels en vertraagt kort"], ["Bundel van His", "Leidt de prikkel verder naar de bundeltakken"], ["Bundeltakken", "Verdelen de prikkel over linker- en rechterkamer"], ["Purkinje-systeem", "Zorgt voor snelle verspreiding door de ventrikels"]]} />
    </div>
  )
}
