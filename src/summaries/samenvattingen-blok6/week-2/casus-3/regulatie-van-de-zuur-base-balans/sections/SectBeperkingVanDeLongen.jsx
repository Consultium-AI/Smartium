import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beperking van de longen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De longen hebben een duidelijke beperking: de capaciteit om CO2 uit te scheiden is begrensd. Onder normale omstandigheden is het ademminuutvolume ongeveer 6 liter. Vooral oudere, verzwakte of kwetsbare patiënten kunnen dit volume niet sterk verhogen en dat ook niet lang volhouden. Als zo’n patiënt uitgeput raakt, kan de CO2-concentratie snel oplopen en kan de zuur-base balans binnen minuten levensbedreigend verslechteren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij chronische longziekten is dit extra belangrijk. Dan kunnen de longen vluchtige zuren minder goed uitscheiden, waardoor een chronische respiratoire acidose ontstaat.`}</Inline></p>
    </div>
  )
}
