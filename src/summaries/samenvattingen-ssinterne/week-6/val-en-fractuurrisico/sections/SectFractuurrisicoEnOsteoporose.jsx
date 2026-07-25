import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fractuurrisico en osteoporose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de analyse van het valrisico moet je ook het fractuurrisico beoordelen. Osteoporose is naast vallen de belangrijkste risicofactor voor fracturen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Osteoporose is een systemische skeletaandoening met lage botmassa en verlies van de microarchitectuur van het bot, waardoor het fractuurrisico toeneemt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bot is een dynamisch weefsel. Er is voortdurend botafbraak door osteoclasten en botaanmaak door osteoblasten. Botafbraak gaat sneller dan botopbouw. Als de botombouw langdurig versneld is, overheerst botverlies en kan osteoporose ontstaan.`}</Inline></p>
    </div>
  )
}
