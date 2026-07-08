import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Metrorragie, intermenstrueel bloedverlies en de cyclusanamnese`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hevig menstrueel bloedverlies moet je onderscheiden van hevig niet-cyclisch bloedverlies. Metrorragie betekent hevig vaginaal bloedverlies zonder herkenbaar cyclisch patroon. Intermenstrueel bloedverlies is bloedverlies tussen twee menstruaties in, meestal in wisselende en vaak geringe hoeveelheden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat onderscheid is belangrijk, omdat de oorzaak anders kan zijn. Metrorragie kan passen bij een anovulatoire cyclus of bij organische afwijkingen van het genitaal. Menorragie kan niet alleen door myomen of poliepen komen, maar ook door stollingsstoornissen of gebruik van anticoagulantia. Daarom vraag je ook naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`nabloedingen na tandextracties;`}</Inline></li>
        <li><Inline>{`blauwe plekken;`}</Inline></li>
        <li><Inline>{`andere tekenen van een afwijkende stolling.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook een corpus alienum in de baarmoederholte, zoals een koperhoudend IUD, kan hevige menstruaties verklaren. Maligniteiten van cervix en corpus uteri horen eveneens in de differentiaaldiagnose.`}</Inline></p>
    </div>
  )
}
