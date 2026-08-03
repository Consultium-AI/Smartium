import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ILD met bekende oorzaak`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet alle ILD’s zijn idiopathisch. Er zijn ook ILD’s met een herkenbare oorzaak, bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`beroepsmatige of omgevingsblootstelling, zoals asbest of silica`}</Inline></li>
        <li><Inline>{`medicatie, zoals amiodaron, methotrexaat en sommige chemotherapieën`}</Inline></li>
        <li><Inline>{`bestraling van de thorax`}</Inline></li>
        <li><Inline>{`connective tissue diseases, zoals reumatoïde artritis, systemische sclerose en lupus`}</Inline></li>
        <li><Inline>{`hypersensitivity pneumonitis, door inademing van organische antigenen zoals vogel- of schimmelantigenen`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Granulomateuze longziekten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Granulomateuze longziekten worden niet als pneumonieën beschouwd. Ze worden gekenmerkt door granulomen: kleine ontstekingshaarden met histiocyten, dus macrofagen in weefsel. Het immuunsysteem probeert daarmee stoffen af te schermen die het als vreemd ziet maar niet kan opruimen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`sarcoïdose: een multisysteemaandoening, vaak met longbetrokkenheid, en non-caseating granulomen`}</Inline></li>
        <li><Inline>{`granulomatosis with polyangiitis, een vasculitis met granuloomvorming en ontsteking in longen en andere organen`}</Inline></li>
      </ul>
    </div>
  )
}
