import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Renale regulatie van kalium: de nier als definitieve uitscheider`}</Inline></SubHeading>
      <PBody text={`Na de acute fase moet de extra kaliumbelasting definitief uit het lichaam worden verwijderd. Een klein deel gaat via de ontlasting, en dat kan toenemen bij diarree. Maar het belangrijkste orgaan voor de definitieve uitscheiding van kalium is de **nier**.`} />
      <PBody text={`De nier behandelt kalium anders dan bijvoorbeeld natrium. Vrijwel al het gefilterde kalium wordt eerst weer gereabsorbeerd, en daarna wordt kalium in de **verzamelbuis actief uitgescheiden**. Dat actieve uitscheiden kost energie en vraagt een goed werkende nier. Daarom kan **ernstige nierfunctiestoornis** leiden tot hyperkaliëmie.`} />
      <p className="leading-relaxed"><Inline>{`De uitscheiding van kalium in de nier hangt sterk samen met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**aldosteron**`}</Inline></li>
        <li><Inline>{`**natriumreabsorptie**`}</Inline></li>
        <li><Inline>{`**de negatieve lading in het tubuluslumen**`}</Inline></li>
        <li><Inline>{`**de flow van natrium naar distaal**`}</Inline></li>
      </ul>
    </div>
  )
}
