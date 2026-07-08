import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De hormonale cyclus in grote lijnen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor een goed begrip van menstruatiestoornissen is het handig de hormonale cyclus te kennen. Vier hormonen spelen een belangrijke rol in het normale verloop van de cyclus en de vruchtbaarheid:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`GnRH;`}</Inline></li>
        <li><Inline>{`FSH;`}</Inline></li>
        <li><Inline>{`LH;`}</Inline></li>
        <li><Inline>{`oestrogeen en progesteron.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De hypothalamus geeft GnRH af, waardoor de hypofyse FSH en LH produceert. Deze hormonen sturen de groei van de follikel in de ovaria aan. Rond het midden van de cyclus volgt de ovulatie. Daarna ontstaat het corpus luteum, dat vooral progesteron en ook oestrogeen produceert. In de eerste helft van de cyclus overheerst de folliculaire fase, in de tweede helft de luteale fase. De hormonale veranderingen hangen samen met de veranderingen in het endometrium en de ovaria.`}</Inline></p>
    </div>
  )
}
