import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Betrouwbaarheid van de registratie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De betrouwbaarheid van een CTG kan beïnvloed worden door bewegingen van de moeder en/of het kind. Daardoor kunnen de transducers verschuiven. Mogelijke gevolgen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`geen goed foetaal signaal;`}</Inline></li>
        <li><Inline>{`registratie van de maternale hartslag;`}</Inline></li>
        <li><Inline>{`slechte registratie van de uterusactiviteit.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook adipositas van de moeder kan het moeilijker maken om de foetale rug te bepalen en de transducers goed te fixeren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De linkerzij heeft voorkeur, omdat dit de kans op compressie van de vena cava inferior verkleint.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De rustdruk van het CTG-apparaat moet worden gereset naar 20 mmHg, zodat dynamische veranderingen van de uterusactiviteit goed zichtbaar worden.`}</Inline></p>
    </div>
  )
}
