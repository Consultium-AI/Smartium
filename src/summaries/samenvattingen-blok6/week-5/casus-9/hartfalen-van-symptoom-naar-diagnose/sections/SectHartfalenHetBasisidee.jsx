import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hartfalen: het basisidee`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen betekent dat het hart het bloed niet goed genoeg rondpompt. Daardoor kunnen klachten ontstaan door drie hoofdmechanismen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**verminderde doorbloeding van organen** door een lage cardiac output`}</Inline></li>
        <li><Inline>{`**stuwing in de longcirculatie** door verhoogde druk links`}</Inline></li>
        <li><Inline>{`**vochtophoping in het lichaam** door stuwing rechts`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat verklaart waarom hartfalen zich op heel verschillende manieren kan presenteren. Soms staat kortademigheid op de voorgrond, soms moeheid, soms oedeem, en soms een combinatie daarvan.`}</Inline></p>
      <PBody text={`Een belangrijk punt is dat hartfalen vaak pas duidelijk wordt als je naar het **gehele patroon** kijkt. Eén losse klacht zegt meestal nog niet genoeg.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
