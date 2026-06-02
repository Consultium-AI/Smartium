import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Lymfoedeem kan ook ontstaan door:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`lymfe-afvoelbelemmering na operatie in het kleine bekken of de lies`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`maligniteit met obstructie van lymfevaten`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`secundair aan veneuze hypertensie, vooral bij **adipositas**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek kan het **teken van Stemmer** worden beoordeeld.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`6. Maligniteit met afvloedbelemmering`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een vrouw van 48 jaar met al langer een dikker linkerbeen, nieuw vaginaal bloedverlies en zeurende onderbuikpijn moet je denken aan een **maligne proces in het kleine bekken** met lymfatische of veneuze afvloedbelemmering.`}</Inline></p>
    </div>
  )
}
