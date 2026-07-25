import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Rhesus en andere bloedgroepsystemen`}</Inline></SubHeading>
      <PBody text={`Naast ABO is het **Rhesus-systeem** klinisch belangrijk. Dit systeem is co-dominant overervend en kent meerdere antigenen, waaronder D, C, c, E en e. Een patiënt kan bijvoorbeeld Cc of EE tot expressie brengen, afhankelijk van de erfelijke aanleg.`} />
      <p className="leading-relaxed"><Inline>{`Rhesus D is bijzonder immunogeen. Bij een incompatibele transfusie ontstaat in veel gevallen anti-D-vorming. Bij zwangeren kan een Rh(D)-negatieve moeder met anti-D en een Rh(D)-positief kind leiden tot hemolytische ziekte van de pasgeborene.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor Rhesus C en E, en ook voor Kell, wordt alleen onder bijzondere omstandigheden rekening gehouden. Een belangrijk voorbeeld is preventie van antistofvorming bij vrouwen in de vruchtbare leeftijd. Dan kan matching van erytrocytenconcentraten worden toegepast om vorming van antistoffen tegen cEK-antigenen te voorkomen, omdat die antistoffen hemolyse bij de foetus kunnen veroorzaken.`}</Inline></p>
    </div>
  )
}
