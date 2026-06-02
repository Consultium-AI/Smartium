import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Traumatische oorzaken en compartimentsyndroom`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een man van 30 jaar met een sportblessure, pijnlijke kuit en een gezwollen been is een **kuithematoom** na trauma waarschijnlijk. Belangrijke vragen zijn:`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`waar zat de blessure precies?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`was er een **slag of trap** op de kuit?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`ontstond het spontaan?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`zijn er aanwijzingen voor een **stollingsstoornis**?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een hematoom kan ook samengaan met een onderliggende stollingsstoornis. Dan denk je aan spontane bloedingen in de voorgeschiedenis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is ook het **compartimentsyndroom**. Dat kan ontstaan door bloeding in de kuit en geeft functieverlies en pijn. Dit moet je actief uitsluiten, omdat het een **acute operatie-indicatie** is.`}</Inline></p>
    </div>
  )
}
