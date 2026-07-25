import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sepsis is een levensbedreigende orgaandysfunctie door een ontregelde afweerreactie op infectie. De qSOFA helpt snel patiënten met een verhoogd risico op overlijden te herkennen. Bij sepsis is snelle herkenning, snelle diagnostiek, broncontrole en vroege antibiotische behandeling essentieel. De drie casussen laten zien dat sepsis zich heel verschillend kan presenteren: als flebitis met MRSA, als urosepsis bij een patiënt met dwarslaesie en als toxisch/septisch beeld bij een patiënte met diarree. Altijd moet je denken aan de infectiebron, de meest waarschijnlijke verwekker, lokale resistentiepatronen, en aan complicerende factoren zoals abcesvorming, bacteriëmie, DIC en persisterende infectiehaarden.`}</Inline></p>
    </div>
  )
}
