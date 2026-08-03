import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische betekenis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`DLCO is een belangrijke index omdat deze de prestatie van het hele gaswisselende systeem weerspiegelt. Bij klachten zoals kortademigheid bij inspanning kan een verlaagde DLCO helpen om een gaswisselingsstoornis op te sporen en de ernst ervan te volgen.`}</Inline></p>
      <PBody text={`Bij **longfibrose** is DLCO verlaagd door verlittekening van het longweefsel, waardoor het membraan dikker wordt en het volume kleiner.
Bij **emfyseem** is DLCO verlaagd door verlies van alveolaire wanden en dus verlies van diffusieoppervlak.
Bij inspanning kan een beperkte diffusiecapaciteit extra duidelijk worden, omdat het bloed dan sneller door de longcapillairen stroomt.`} />
    </div>
  )
}
