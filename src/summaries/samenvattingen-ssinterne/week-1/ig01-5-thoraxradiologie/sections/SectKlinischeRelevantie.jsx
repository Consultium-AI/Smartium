import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische relevantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De thoraxradiologie is vooral nuttig omdat veel klinische vragen hiermee kunnen worden beantwoord, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`is er een longontsteking?`}</Inline></li>
        <li><Inline>{`is er een pneumothorax?`}</Inline></li>
        <li><Inline>{`is er pleuravocht?`}</Inline></li>
        <li><Inline>{`is er een longembolie?`}</Inline></li>
        <li><Inline>{`is het hart vergroot?`}</Inline></li>
        <li><Inline>{`waar ligt een afwijking precies in de long?`}</Inline></li>
      </ul>
      <PBody text={`Daarom is het belangrijk om eerst de **normale anatomie**, daarna de **techniek**, en vervolgens de **systematische beoordeling** goed te leren. Alleen dan kun je afwijkingen betrouwbaar herkennen.`} />
    </div>
  )
}
