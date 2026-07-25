import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnose van hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose hartfalen stel je niet alleen op basis van klachten. Anamnese en lichamelijk onderzoek geven aanwijzingen, maar aanvullend onderzoek is nodig om objectief vast te stellen dat het hart niet goed functioneert.`}</Inline></p>
      <PBody text={`Het belangrijkste onderzoek is een **echocardiogram**. Daarmee kun je veel informatie krijgen over de pompfunctie, de vulling, de kleppen en de afmetingen van het hart. Bloedonderzoek kan aanvullend helpen, bijvoorbeeld door het NT-proBNP te bepalen. NT-proBNP is een stresshormoon van het hart en kan verhoogd zijn bij hartfalen.`} />
    </div>
  )
}
