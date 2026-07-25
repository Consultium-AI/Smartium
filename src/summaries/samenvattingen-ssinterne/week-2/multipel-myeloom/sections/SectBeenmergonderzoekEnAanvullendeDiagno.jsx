import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beenmergonderzoek en aanvullende diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het aantonen van een M-proteïne volgt aanvullend onderzoek van het beenmerg. Daarbij wordt gekeken naar de aanwezigheid en kenmerken van de plasmacellen.`}</Inline></p>
      <SubHeading><Inline>{`Flowcytometrie`}</Inline></SubHeading>
      <PBody text={`Flowcytometrie laat in deze casus een **monoklonale IgG-kappa-positieve plasmacelpopulatie** zien. De cellen zijn:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**positief voor CD38, CD56 en CD138**`}</Inline></li>
        <li><Inline>{`**negatief voor CD19**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit past bij kwaadaardige plasmacellen.`}</Inline></p>
      <SubHeading><Inline>{`Morfologie`}</Inline></SubHeading>
      <PBody text={`In het beenmerguitstrijkje worden **50% plasmacellen** geteld, deels met afwijkende vormen. Dat is een duidelijke aanwijzing voor een plasmacelproliferatie.`} />
      <SubHeading><Inline>{`Cytogenetica`}</Inline></SubHeading>
      <PBody text={`Met **FISH** wordt gekeken naar chromosomale afwijkingen. In deze casus wordt een **deletie 17p13** gevonden.`} />
      <SubHeading><Inline>{`Tabel 2. Aanvullende onderzoeken bij multipel myeloom`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Wat laat het zien?"], ["Flowcytometrie", "Monoklonale plasmacellen met typische markers"], ["Beenmergmorfologie", "Percentage plasmacellen en afwijkende vorm"], ["FISH", "Chromosomale afwijkingen zoals deletie 17p13"]]} />
    </div>
  )
}
