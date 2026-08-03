import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van spierinvasief blaaskarcinoom`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als de tumor spierinvasief wordt, verandert de behandeling. Dan zijn de belangrijkste opties:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Radicale cystectomie met urineafleiding**`}</Inline></li>
        <li><Inline>{`**Chemoradiatie**`}</Inline></li>
        <li><Inline>{`**Uitwendige radiotherapie**`}</Inline></li>
        <li><Inline>{`**Best supportive care**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij spierinvasieve blaaskanker zonder uitzaaiingen zijn de uitkomsten van radicale cystectomie en chemoradiatie oncologisch vergelijkbaar. Soms wordt vooraf neoadjuvante chemotherapie gegeven. De keuze hangt af van de conditie van de patiënt, de tumorlocatie, de klachten en de voorkeur van de patiënt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een radicale cystectomie wordt de blaas verwijderd, samen met de pelviene lymfeklieren. Bij vrouwen worden vaak ook omliggende organen zoals baarmoeder, baarmoederhals, eileiders, eierstokken en soms de vaginawand verwijderd. Bij mannen wordt ook de prostaat verwijderd. Daarna moet een urineafleiding worden aangelegd, bijvoorbeeld via een urinestoma of een neoblaas.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Chemoradiatie betekent dat de patiënt gedurende 4 tot 6 weken, vijf dagen per week, bestraald wordt en tegelijk chemotherapie krijgt. Het voordeel is dat de blaas behouden blijft. Nadelen zijn klachten zoals vermoeidheid, frequency, urgency, dysurie en soms diarree, zowel tijdens als na de behandeling. Op lange termijn kunnen ook plasproblemen, darmschade en radiatiecystitis ontstaan. Alleen radiotherapie wordt niet gegeven; bestraling wordt gecombineerd met chemotherapie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Best supportive care betekent symptoombestrijding zonder tumorgerichte behandeling. Dat kan passend zijn als een intensief behandeltraject niet haalbaar is.`}</Inline></p>
    </div>
  )
}
