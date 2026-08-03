import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Löfgren-syndroom`}</Inline></SubHeading>
      <PBody text={`Een bijzondere en vrij typische presentatie is het **Löfgren-syndroom**. Dit komt voor bij ongeveer **5 tot 10%** van de patiënten met sarcoïdose.`} />
      <p className="leading-relaxed"><Inline>{`Het syndroom bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**acute koorts**`}</Inline></li>
        <li><Inline>{`**hiluslymfadenopathie**`}</Inline></li>
        <li><Inline>{`**erythema nodosum** en/of`}</Inline></li>
        <li><Inline>{`**bilaterale enkelzwelling**`}</Inline></li>
      </ul>
      <PBody text={`Het komt vaker voor bij mensen in de **derde en vierde decade** en vaker bij **vrouwen** dan bij mannen. Bij vrouwen zie je vaker erythema nodosum, terwijl bij mannen enkelarthropathie vaker voorkomt.`} />
      <PBody text={`De gewrichtsklachten zijn meestal geen echte artritis, maar berusten vooral op **periarticulaire ontsteking** en **tenosynovitis**. Ook knieën, polsen en ellebogen kunnen meedoen.`} />
      <PBody text={`**Vraagje:** waarom is Löfgren-syndroom zo belangrijk?
**Kort antwoord:** omdat het een hoge diagnostische specificiteit voor sarcoïdose heeft.`} />
      <PBody text={`Belangrijk is ook dat erythema nodosum **niet gebiopteerd** moet worden, omdat het histologisch beeld dan panniculitis laat zien en niet per se granulomen, ongeacht de oorzaak.`} />
    </div>
  )
}
