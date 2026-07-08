import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Neonatale icterus vraagt altijd om een indeling in **ongeconjugeerde** en **geconjugeerde hyperbilirubinemie**. Ongeconjugeerde hyperbilirubinemie past vaak bij **hemolyse**, zoals bij **AB0-antagonisme**, maar ook bij infectie, dehydratatie, borstvoeding, hypothyreoïdie of een stoornis in de glucuronidering. Geconjugeerde hyperbilirubinemie past eerder bij **neonatale hepatitis**, **galwegobstructie** of een **metabole aandoening**.`} />
      <PBody text={`Bij hemolyse zijn **reticulocyten**, **bilirubine**, **bloedgroepen** en de **directe Coombsreactie** belangrijk. Bij een moeder met bloedgroep 0 en een kind met bloedgroep A kan **0A-antagonisme** optreden, omdat moederlijke **IgG-antistoffen** de placenta passeren. De pasgeborene kan dan een milde hemolytische ziekte krijgen.`} />
      <PBody text={`Pasgeborenen hebben daarnaast vaak een verhoogde **enterohepatische kringloop**, vooral door trage darmmotiliteit en nog beperkte darmflora. Dat draagt bij aan hyperbilirubinemie. Behandeling kan bestaan uit **fototherapie**, waarbij bilirubine door blauw licht wordt omgezet in wateroplosbare isomeren. Als dat onvoldoende is, kan een **wisseltransfusie** nodig zijn.`} />
      <PBody text={`Bij een neonaat met geconjugeerde hyperbilirubinemie, braken, leverfunctiestoornissen en **positieve urine-reductie** moet je denken aan **galactosemie**. Deze autosomaal recessieve aandoening kan zich presenteren met icterus, slecht drinken, braken en sepsis. Een belangrijk gevaar is **E. coli-sepsis**. De behandeling is direct starten met een **lactosevrij dieet**.`} />
    </div>
  )
}
