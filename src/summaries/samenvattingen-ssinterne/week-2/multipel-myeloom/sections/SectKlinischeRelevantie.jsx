import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische relevantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij multipel myeloom is het belangrijk om te denken aan een combinatie van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**botpijn of rugpijn**`}</Inline></li>
        <li><Inline>{`**anemie**`}</Inline></li>
        <li><Inline>{`**verhoogd totaal eiwit**`}</Inline></li>
        <li><Inline>{`**afwijkingen in het eiwithspectrum**`}</Inline></li>
        <li><Inline>{`**beenmerginfiltratie door plasmacellen**`}</Inline></li>
        <li><Inline>{`**orgaanschade volgens CRAB/ROTI**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De diagnose wordt dus niet op één enkele bevinding gesteld, maar op het geheel van klachten, laboratoriumonderzoek, beenmergonderzoek en beeldvorming.`}</Inline></p>
    </div>
  )
}
