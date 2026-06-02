import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Traumatische oorzaken en compartimentsyndroom`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Bij een man van 30 jaar met een sportblessure, pijnlijke kuit en een gezwollen been is een **kuithematoom** na trauma waarschijnlijk. Belangrijke vragen zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`waar zat de blessure precies?`}</Inline></li>
        <li><Inline>{`was er een **slag of trap** op de kuit?`}</Inline></li>
        <li><Inline>{`ontstond het spontaan?`}</Inline></li>
        <li><Inline>{`zijn er aanwijzingen voor een **stollingsstoornis**?`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Een hematoom kan ook samengaan met een onderliggende stollingsstoornis. Dan denk je aan spontane bloedingen in de voorgeschiedenis.`}</Inline>
      </p>
      <p className="leading-relaxed">
        <Inline>{`Belangrijk is ook het **compartimentsyndroom**. Dat kan ontstaan door bloeding in de kuit en geeft functieverlies en pijn. Dit moet je actief uitsluiten, omdat het een **acute operatie-indicatie** is.`}</Inline>
      </p>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Diagnostiek:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lichamelijk onderzoek;`}</Inline></li>
        <li><Inline>{`letten op tekenen van compartimentsyndroom;`}</Inline></li>
        <li><Inline>{`controleren of de **pulsaties** intact zijn;`}</Inline></li>
        <li><Inline>{`echo om **DVT** uit te sluiten;`}</Inline></li>
        <li><Inline>{`echo kan ook een **hematoom** aantonen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Behandeling:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij een gewoon hematoom: **rust** en **pijnstilling**;`}</Inline></li>
        <li><Inline>{`soms **compressietherapie**;`}</Inline></li>
        <li><Inline>{`het hematoom resorbeert meestal vanzelf;`}</Inline></li>
        <li><Inline>{`bij DVT, stollingsstoornis of compartimentsyndroom: overleg met de juiste specialist.`}</Inline></li>
      </ul>
    </div>
  )
}
