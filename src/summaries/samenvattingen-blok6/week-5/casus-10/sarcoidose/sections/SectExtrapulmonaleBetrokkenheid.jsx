import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Extrapulmonale betrokkenheid`}</Inline></SubHeading>
      <PBody text={`Sarcoïdose is echt een **multi-orgaanziekte**. Naast de longen kunnen ook andere organen betrokken zijn. De meest voorkomende vroege extrapulmonale uitingen zijn:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**huidafwijkingen**`}</Inline></li>
        <li><Inline>{`**vergrote perifere lymfeklieren**`}</Inline></li>
        <li><Inline>{`**oogafwijkingen**, vooral uveïtis en droge ogen`}</Inline></li>
        <li><Inline>{`**hypercalciurie** en milde **hypercalciëmie**`}</Inline></li>
        <li><Inline>{`**zwelling van parotis of speekselklieren**`}</Inline></li>
        <li><Inline>{`**facialisparese**`}</Inline></li>
        <li><Inline>{`**artritis**`}</Inline></li>
        <li><Inline>{`**cardiale betrokkenheid**`}</Inline></li>
      </ul>
      <PBody text={`Hypercalciëmie kan zich uiten als **nierstenen** of **azotemie**. Neurologische betrokkenheid is zeldzaam, maar kan ernstig zijn. Cardiale sarcoïdose is ook zeldzaam, maar potentieel gevaarlijk door **ritmestoornissen**, collaps en zelfs plotselinge dood. Daarnaast kan het leiden tot **cardiomyopathie**.`} />
      <SubHeading><Inline>{`Tabel 3. Belangrijke extrapulmonale uitingen`}</Inline></SubHeading>
      <DataTable rows={[["Orgaan/gebied", "Mogelijke uiting"], ["Huid", "Erythema nodosum, lupus pernio, papulaire of nodulaire laesies"], ["Ogen", "Uveïtis, droge ogen"], ["Nieren", "Hypercalciurie, nierstenen, azotemie"], ["Speekselklieren", "Parotiszwelling"], ["Zenuwstelsel", "Facialisparese, andere neurologische betrokkenheid"], ["Gewrichten", "Artritis, enkelklachten"], ["Hart", "Ritmestoornissen, cardiomyopathie"]]} />
    </div>
  )
}
