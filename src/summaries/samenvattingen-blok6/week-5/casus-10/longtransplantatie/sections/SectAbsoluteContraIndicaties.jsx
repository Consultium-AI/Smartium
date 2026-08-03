import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Absolute contra-indicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Belangrijke absolute contra-indicaties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`actief roken`}</Inline></li>
        <li><Inline>{`actief harddrugsgebruik`}</Inline></li>
        <li><Inline>{`bewezen en oncorrigeerbare therapieontrouw`}</Inline></li>
        <li><Inline>{`onbehandelbaar arterieel vaatlijden`}</Inline></li>
        <li><Inline>{`linkszijdig hartfalen`}</Inline></li>
        <li><Inline>{`nierfalen met een klaring < 50 ml/min`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hier hoort ook bij dat nicotinegebruik in welke vorm dan ook niet mag. Dus ook e-sigaretten en vapen vallen hieronder. Voor transplantatie moet iemand minstens 6 maanden gestopt zijn met nicotinegebruik.`}</Inline></p>
    </div>
  )
}
