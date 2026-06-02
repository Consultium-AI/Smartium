import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={3}>Multipel myeloom</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Een kwaadaardige aandoening van plasmacellen in het beenmerg. Kenmerkend zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`M-proteïne`}</Inline></li>
        <li><Inline>{`anemie`}</Inline></li>
        <li><Inline>{`botafwijkingen`}</Inline></li>
        <li><Inline>{`nierfunctiestoornis`}</Inline></li>
        <li><Inline>{`infecties`}</Inline></li>
      </ul>

      <SubHeading level={3}>MGUS</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Een **monoclonal gammopathy or unknown significance**. Hierbij is er wel een monoklonaal eiwit, maar zonder de kenmerken van multipel myeloom.`}</Inline>
      </p>

      <SubHeading level={3}>Lytische botafwijkingen</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Botafbraakplekken die kunnen leiden tot pijn en fracturen.`}</Inline>
      </p>

      <SubHeading level={3}>Hypogammaglobulinemie</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Te weinig normale antistoffen, waardoor infecties makkelijker optreden.`}</Inline>
      </p>
    </div>
  )
}
