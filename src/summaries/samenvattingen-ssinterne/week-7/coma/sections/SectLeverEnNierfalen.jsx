import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lever- en nierfalen`}</Inline></SubHeading>
      <PBody text={`Bij **hepatische encefalopathie** is vaak sprake van verhoogd ammoniak, maar de hoogte van het ammoniak hangt niet sterk samen met de ernst van de encefalopathie. Je kunt motorische verschijnselen zien, zoals myoklonieën en **asterixis** of flapping tremor. Bij acuut leverfalen kan ook uitgebreid hersenoedeem ontstaan.`} />
      <PBody text={`Bij **uremische encefalopathie** zie je apathie, concentratieverlies en geheugenstoornissen bij langzaam toenemende uremie. Ook hier correleert de ernst niet goed met de hoogte van het ureum. Een encefalopathie kan ook ontstaan door snelle dialyse: het **dialyse-disequilibriumsyndroom**.`} />
      <PBody text={`De behandeling van hepatische encefalopathie bestaat uit een **eiwitbeperkt dieet** en het verminderen van ammoniakproductie in de darm, bijvoorbeeld met **lactulose**.`} />
    </div>
  )
}
