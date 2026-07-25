import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus als uitgangspunt`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een jonge man van 22 jaar komt met hoge koorts, kortademigheid en shock. Hij is eerst verkouden geweest, daarna grieperig met koorts, rillingen, moeheid, spierpijn en hoofdpijn. Na een korte verbetering wordt hij opnieuw zieker, met hoge koorts, weinig eetlust en toenemende benauwdheid. Bij lichamelijk onderzoek is hij duidelijk ziek, suf maar aanspreekbaar, tachypnoïsch en hypotensief.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dit beeld past het meest bij een ernstige infectie. In de differentiaaldiagnose staan daarom vooral pneumonieën bovenaan, maar ook een longembolie moet je overwegen. Een schimmelpneumonie past minder goed bij een verder gezonde patiënt. Een auto-immuunziekte verloopt meestal minder acuut. Longcarcinoom is bij een roker altijd iets om aan te denken, maar de leeftijd maakt het minder waarschijnlijk.`}</Inline></p>
    </div>
  )
}
