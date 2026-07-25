import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe verloopt het onderzoek?`}</Inline></SubHeading>
      <PBody text={`Na injectie van Tc-99m-MAG-3 start direct de camera. Er wordt een **filmpje van 20 minuten** gemaakt. Daarna volgen meestal nog opnames **na mictie** en eventueel een opname **na 1 uur**.`} />
      <p className="leading-relaxed"><Inline>{`De beelden worden gemaakt als opeenvolgende korte opnames. De camera maakt plaatjes van 15 seconden, die worden samengevoegd tot beelden van 1 minuut. Een seriescintigram van 20 minuten bestaat dus uit 20 beelden van 1 minuut.`}</Inline></p>
      <PBody text={`Belangrijk is ook de oriëntatie: de camera maakt opnames **van posterior**. Dat betekent dat de **linkernier links in het beeld** staat en de **rechternier rechts**. Dat is dus anders dan bij een CT of thoraxfoto.`} />
    </div>
  )
}
