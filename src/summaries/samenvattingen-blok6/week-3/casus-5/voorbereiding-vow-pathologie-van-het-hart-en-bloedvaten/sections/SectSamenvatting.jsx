import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bloedvaten hebben een geleidelijke opbouw van arteriën via arteriolen en capillairen naar venulen en venen. De wand bestaat meestal uit intima, media en adventitia, maar de samenstelling verschilt per vattype. Elastische arteriën vangen drukgolven op, musculaire arteriën verdelen bloed over organen, arteriolen regelen de weerstand en bloeddruk, capillairen zorgen voor uitwisseling, en venen voeren het bloed terug naar het hart. De microcirculatie is ook belangrijk voor vochtbalans en weefselperfusie. Klinisch zijn vooral arteriolaire veranderingen relevant bij hypertensie, diabetes, veroudering en het Goldblattfenomeen.`}</Inline></p>
    </div>
  )
}
