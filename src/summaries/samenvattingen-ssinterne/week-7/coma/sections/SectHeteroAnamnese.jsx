import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hetero-anamnese`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met verlaagd bewustzijn is betrouwbare informatie vaak moeilijk te krijgen. Daarom ben je afhankelijk van derden, zoals familie, omstanders, ambulancepersoneel of politie. Ook voorwerpen kunnen helpen, zoals medicijndoosjes of een SOS-armband. Controleer daarnaast of er behandelbeperkingen zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke vragen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`waar en onder welke omstandigheden is de patiënt gevonden;`}</Inline></li>
        <li><Inline>{`acuut of geleidelijk ontstaan;`}</Inline></li>
        <li><Inline>{`waren er vooraf klachten;`}</Inline></li>
        <li><Inline>{`recent trauma;`}</Inline></li>
        <li><Inline>{`bekende diabetes, epilepsie, hypertensie, nier- of leveraandoeningen;`}</Inline></li>
        <li><Inline>{`medicatiegebruik;`}</Inline></li>
        <li><Inline>{`psychiatrische voorgeschiedenis;`}</Inline></li>
        <li><Inline>{`alcohol- of drugsverslaving.`}</Inline></li>
      </ul>
    </div>
  )
}
