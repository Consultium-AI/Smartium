import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De Jewson-these: van de zieke mens naar abstracte geneeskunde`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Nicholas Jewson beschreef hoe medische kennis in de afgelopen twee eeuwen steeds abstracter en afstandelijker is geworden. Volgens hem is de afstand tussen arts en patiënt groter geworden, en ook de afstand tussen laboratorium en ziekenhuisbed. De moderne geneeskunde richt zich daardoor steeds meer op algemene, objectieve en meetbare kenmerken van ziekte, en minder op het unieke verhaal en de ervaring van de individuele patiënt.`}</Inline></p>
      <PBody text={`Jewson sprak over de medische wereld als een **kosmologie**: een geheel van praktijken, taal, instellingen en manieren van denken. In deze module wordt daarvoor ook het woord **denkkader** gebruikt. Zo’n denkkader bepaalt wat artsen wel en niet zien, en hoe zij ziekte en gezondheid begrijpen.`} />
      <PBody text={`Belangrijk is dat deze denkkaders niet netjes elkaar opvolgen alsof het losse tijdvakken zijn. Ze bestaan juist vaak **naast elkaar** en kunnen elkaar overlappen. Soms vullen ze elkaar aan, soms staan ze op gespannen voet met elkaar.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
