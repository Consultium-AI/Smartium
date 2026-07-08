import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Menstruatiestoornissen: de basis van de anamnese`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Menstruatiestoornissen komen vaak voor en zijn een belangrijk onderdeel van de gynaecologische praktijk. Ook in de huisartsenpraktijk zie je deze klachten veel. De diagnostiek en behandeling hangen sterk samen met de leeftijd waarop de klachten optreden. Daarom is het steeds belangrijk om de klacht te plaatsen binnen de cyclus en binnen de levensfase van de patiënte: premenarchaal, in de fertiele levensfase, of peri- en postmenopauzaal.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij gynaecologische klachten staat de cyclusanamnese centraal. Veel klachten van het vrouwelijk genitaal uiten zich namelijk als afwijkingen van de menstruatie. Tegelijk moet je bedenken dat pijn of klachten in de onderbuik niet altijd uit het genitale systeem komen; er is ook een nauwe relatie met blaas, urinewegen en recto-sigmoid. Een goede anamnese vraagt dus om systematiek: goed luisteren, relevante vragen stellen en de klacht helpen ordenen.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtspunt bij de eerste beoordeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een vrouw met menstruatieklachten is zwangerschap vrijwel altijd iets wat je eerst moet uitsluiten. Dat geldt vooral bij vrouwen tussen 13 en 45 jaar met een acute verandering in het menstruatiepatroon, zoals uitblijven van de menstruatie of plots afwijkend bloedverlies. Vraag daarom altijd naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de datum van de laatste menstruatie;`}</Inline></li>
        <li><Inline>{`de kans op zwangerschap;`}</Inline></li>
        <li><Inline>{`anticonceptiegebruik.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij twijfel hoort daar een zwangerschapstest bij.`}</Inline></p>
    </div>
  )
}
