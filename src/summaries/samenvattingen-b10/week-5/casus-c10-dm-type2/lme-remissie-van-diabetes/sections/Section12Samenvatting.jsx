import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Samenvatting`}</Inline>
      </h3>
      <p>
        <Inline>{`Remissie van diabetes type 2 kan worden bereikt met **leefstijl, medicatie of bariatrische chirurgie**. Gewichtsverlies speelt daarbij steeds een centrale rol, vooral door vermindering van vetstapeling in lever en pancreas en verbetering van de insulinegevoeligheid. Leefstijl blijft belangrijk om remissie te bereiken én te behouden. Medicatie zoals GLP-1-agonisten en SGLT2-remmers kan sterke glucose- en gewichtsverbetering geven, maar blijvende medicatievrije remissie is minder vaak verzekerd. Bariatrische chirurgie geeft de grootste kans op remissie, maar vraagt goede selectie, goede begeleiding en langdurige follow-up. Remissie kan weer verdwijnen als de onderliggende oorzaken terugkomen, dus langdurige leefstijlaanpassing blijft essentieel.`}</Inline>
      </p>
    </div>
  )
}
