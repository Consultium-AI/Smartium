import { Inline, PBody } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De combinatie van:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`**normocytaire anemie**`}</Inline></li>
        <li><Inline>{`**laag-normale reticulocyten**`}</Inline></li>
        <li><Inline>{`**verhoogd creatinine**`}</Inline></li>
        <li><Inline>{`**monoclonaal IgG-kappa M-proteïne**`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`maakt een **multipel myeloom** waarschijnlijk. De anemie past bij een probleem in het beenmerg, waar de normale bloedaanmaak verdrongen kan worden door de kwaadaardige plasmacellen. De nierfunctiestoornis kan ook bij myeloom passen. Het M-proteïne is een belangrijke aanwijzing, maar een M-proteïne alleen betekent niet automatisch multipel myeloom; het kan ook voorkomen bij bijvoorbeeld **MGUS**.`}</Inline>
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Wat is het vervolgonderzoek?`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij verdenking op multipel myeloom is vervolgonderzoek nodig met:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`**beenmergpunctie** om de diagnose te bevestigen`}</Inline></li>
        <li><Inline>{`**CT-skelet** vanwege botbetrokkenheid`}</Inline></li>
        <li><Inline>{`soms **MRI van de wervelkolom**`}</Inline></li>
      </ul>
      <PBody
        text={`**Vraagje:** waarom is botbeeldvorming belangrijk bij multipel myeloom?
**Mini-antwoord:** omdat myeloom vaak botafbraak en lytische haarden geeft, wat fracturen en pijn kan veroorzaken.`}
      />
    </div>
  )
}
