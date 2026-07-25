import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kenmerken van artrose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De gewrichtsspleetversmalling bij artrose is vaak:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**asymmetrisch**`}</Inline></li>
        <li><Inline>{`verdeeld over een deel van het gewricht, niet gelijkmatig`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Door de veranderde belasting ontstaan daarna veranderingen in het onderliggende bot. De belangrijkste radiologische kenmerken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**osteofyten**: botaanwas aan de rand van het gewricht`}</Inline></li>
        <li><Inline>{`**subchondrale sclerose**: verdichting van het bot direct onder het kraakbeen`}</Inline></li>
        <li><Inline>{`**subchondrale cysten**: cysten in het subchondrale bot, gevuld met synoviaalvocht`}</Inline></li>
      </ul>
    </div>
  )
}
