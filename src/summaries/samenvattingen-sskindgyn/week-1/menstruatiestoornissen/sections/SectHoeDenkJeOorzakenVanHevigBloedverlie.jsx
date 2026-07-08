import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe denk je oorzaken van hevig bloedverlies uit?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De oorzaken van menstruatieproblemen zijn grofweg in twee hoofdcategorieën in te delen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`regulatieproblemen, dus hormonaal;`}</Inline></li>
        <li><Inline>{`organische oorzaken, vaak secundair aan afwijkingen van de uterus of het genitaal.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarbij moet je denken aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uterus myomatosus;`}</Inline></li>
        <li><Inline>{`afwijkingen van endometrium of cervix;`}</Inline></li>
        <li><Inline>{`stollingsstoornissen;`}</Inline></li>
        <li><Inline>{`iatrogene oorzaken, zoals antistolling of een IUD;`}</Inline></li>
        <li><Inline>{`maligniteit.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 2. Voorbeelden van oorzaken van hevig menstrueel bloedverlies`}</Inline></SubHeading>
      <DataTable rows={[["Categorie", "Voorbeelden"], ["Regulatie/hormonaal", "Anovulatoire cyclus"], ["Uterus", "Uterus myomatosus, leiomyoom"], ["Endometrium/cervix", "Endometriumpathologie, endometriumhyperplasie, endometriumpoliep, cervixinfectie"], ["Stolling", "Ziekte van Willebrand, gebruik van anticoagulantia"], ["Iatrogeen", "Antistolling, koperhoudend IUD"], ["Maligniteit", "Cervixcarcinoom, endometriumcarcinoom, leiomyosarcoom, ovariumcarcinoom, tubacarcinoom"]]} />
      <SubHeading><Inline>{`Wat is verontrustend?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij hevige menstruaties zijn vooral de volgende verschijnselen belangrijk om uit te sluiten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`metrorragie;`}</Inline></li>
        <li><Inline>{`intermenstrueel bloedverlies en/of contactbloedingen;`}</Inline></li>
        <li><Inline>{`anemie;`}</Inline></li>
        <li><Inline>{`stollingsstoornissen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij de anamnese vraag je daarom niet alleen naar de hoeveelheid bloedverlies, maar ook naar het patroon. Voelt de patiënte haar menstruatie aankomen? Zijn er premenstruele klachten? Is er sprake van dysmenorroe? Dat helpt om te bepalen of er nog een herkenbare cyclus is.`}</Inline></p>
    </div>
  )
}
