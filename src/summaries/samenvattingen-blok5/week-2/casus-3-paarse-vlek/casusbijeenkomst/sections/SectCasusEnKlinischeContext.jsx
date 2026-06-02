import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed"><Inline>{`In deze casus staan twee verschillende klinische situaties centraal die allebei beginnen met een paarse of rode huidverkleuring.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij het eerste kind gaat het om een 5-jarige jongen met rode vlekjes op de onderbenen, hangerigheid, gewrichtsklachten en lichte buikpijn. De combinatie van purpura, buikklachten en gewrichtsklachten doet denken aan een vasculitis, met name een beeld waarbij kleine bloedvaatjes ontstoken raken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij de tweede casus gaat het om een 17-jarige jongen met een paarse verkleuring en zwelling van het onderbeen na licht trauma. Hier moet je niet alleen denken aan een vasculitis, maar ook aan een bloedingsneiging of een stollingsprobleem. Daarom wordt aanvullend onderzoek gedaan om een hematologische oorzaak uit te sluiten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast komt in het materiaal uitgebreid melanoom aan bod. Daar draait het om stadiëring, prognose, follow-up en de keuze tussen chirurgie, beeldvorming en systemische therapie.`}</Inline></p>
    </div>
  )
}
