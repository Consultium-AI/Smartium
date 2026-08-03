import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nefrotisch syndroom: wanneer de filtratiebarrière lekt`}</Inline></SubHeading>
      <PBody text={`Bij het **nefrotisch syndroom** is er iets mis met de glomerulaire filtratiebarrière. De definitie ligt ongeveer bij **meer dan 3,5 gram eiwit per dag** in de urine.`} />
      <p className="leading-relaxed"><Inline>{`Twee voorbeelden zijn belangrijk:`}</Inline></p>
      <SubHeading><Inline>{`Minimal change disease`}</Inline></SubHeading>
      <PBody text={`Bij minimal change disease zie je onder de lichtmicroscoop nauwelijks afwijkingen; de nier lijkt bijna normaal. Toch is er wel proteïnurie. De gedachte is dat positief geladen moleculen in het bloed de negatieve lading van de filtratiebarrière afdekken. Daardoor verdwijnt de ladingsselectiviteit en kan vooral **albumine** door de barrière lekken.`} />
      <PBody text={`Dit geeft een **selectieve proteïnurie**: vooral albumine, weinig grote eiwitten.`} />
      <SubHeading><Inline>{`Membraneuze glomerulopathie`}</Inline></SubHeading>
      <PBody text={`Bij membraneuze glomerulopathie is er meer destructie en ontsteking van de filtratiebarrière. Daardoor kunnen ook grotere eiwitten, zoals **IgG**, makkelijker door de barrière komen. Dit past meer bij verlies van de structurele selectiviteit.`} />
      <PBody text={`De **selectiviteitsindex** helpt om te schatten welk type eiwitverlies op de voorgrond staat:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`veel albumine, weinig IgG: meer passend bij ladingsselectiviteitsverlies;`}</Inline></li>
        <li><Inline>{`ook veel grotere eiwitten: meer passend bij structurele schade.`}</Inline></li>
      </ul>
    </div>
  )
}
