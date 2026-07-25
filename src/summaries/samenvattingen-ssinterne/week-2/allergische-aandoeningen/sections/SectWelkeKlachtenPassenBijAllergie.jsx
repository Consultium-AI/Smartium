import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke klachten passen bij allergie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Allergische klachten kunnen in meerdere orgaansystemen optreden. Het is belangrijk om die systematisch te herkennen.`}</Inline></p>
      <PBody text={`**Tabel 2. Voorbeelden van allergische klachten per orgaansysteem**`} />
      <DataTable rows={[["Systeem", "Voorbeelden van klachten"], ["Huid", "Gegeneraliseerde jeuk, roodheid, urticaria, angio-oedeem, toename eczeem"], ["Oog/neus", "Rhinoconjunctivitis"], ["Gastro-intestinaal", "Braken, diarree, buikpijn, OAS"], ["Longen", "Heesheid, piepende ademhaling, stridor, dysfagie, hoesten, sputum, obstructief longfunctiebeeld"], ["Hart en bloedsomloop", "Collaps, tachycardie, hypotensie, slap/niet op de benen kunnen staan, anafylaxie"]]} />
      <PBody text={`**OAS** betekent **oral allergy syndrome**: klachten in mond en keel, vaak jeuk of tinteling na eten van bepaald fruit of noten.`} />
    </div>
  )
}
