import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De X-thorax`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De X-thorax is de meest gemaakte röntgenfoto. Meestal worden twee opnames gemaakt:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**PA-opname**: de patiënt staat met de borst tegen de detector. Het hart ligt dicht bij de detector en wordt daardoor minder vergroot. Deze opname is meestal het best om de hartgrootte te beoordelen.`}</Inline></li>
        <li><Inline>{`**Laterale opname**: een zijaanzicht van de borstkas.`}</Inline></li>
        <li><Inline>{`**AP-opname**: wordt gemaakt als de patiënt niet kan staan. De detector ligt dan achter de patiënt. Het hart ligt verder van de detector en projecteert daardoor groter.`}</Inline></li>
      </ul>
      <PBody text={`Dat laatste is belangrijk: op een **AP-opname** is de **cor-thorax-ratio niet betrouwbaar** te meten, omdat het hart door de grotere afstand tot de detector kunstmatig groter lijkt.`} />
      <p className="leading-relaxed"><Inline>{`Op een X-thorax kun je onder andere beoordelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de vorm en grootte van het hart;`}</Inline></li>
        <li><Inline>{`de luchthoudendheid van de longen;`}</Inline></li>
        <li><Inline>{`longontsteking;`}</Inline></li>
        <li><Inline>{`pneumothorax;`}</Inline></li>
        <li><Inline>{`tumoren;`}</Inline></li>
        <li><Inline>{`acuut hartfalen;`}</Inline></li>
        <li><Inline>{`pleuravocht.`}</Inline></li>
      </ul>
      <PBody text={`De cor-thorax-ratio hoort op een goede opname kleiner te zijn dan **0,5**.`} />
    </div>
  )
}
