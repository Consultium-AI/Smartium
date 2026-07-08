import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinisch beeld en beleid`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij hyperemesis zie je vaak kleine hoeveelheden geconcentreerde urine, ingevallen ogen, huidturgor die verminderd is en een verhoogde hematocriet door hemoconcentratie. Als de ketonurie verdwijnt, de patiënte niet verder afvalt en het braken vermindert, kan de begeleiding vaak poliklinisch worden voortgezet.`}</Inline></p>
    </div>
  )
}
