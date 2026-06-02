import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`5. Lymfoedeem`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Lymfoedeem is een belangrijke oorzaak van chronische zwelling. Het kan:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**primair** zijn;`}</Inline></li>
        <li><Inline>{`**secundair** zijn, bijvoorbeeld na operatie, maligniteit of veneuze problematiek.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Primair lymfoedeem begint vaak met zwelling van de **voet**, waarna de enkelcontouren verdwijnen. Het is meestal geleidelijk ontstaan.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Lymfoedeem kan ook ontstaan door:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lymfe-afvoelbelemmering na operatie in het kleine bekken of de lies;`}</Inline></li>
        <li><Inline>{`maligniteit met obstructie van lymfevaten;`}</Inline></li>
        <li><Inline>{`secundair aan veneuze hypertensie, vooral bij **adipositas**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Bij lichamelijk onderzoek kan het **teken van Stemmer** worden beoordeeld.`}</Inline>
      </p>
    </div>
  )
}
