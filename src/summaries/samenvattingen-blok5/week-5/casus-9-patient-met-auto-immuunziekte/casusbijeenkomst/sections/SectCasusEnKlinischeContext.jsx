import { Inline, PBody } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De casus draait om Tom, een kind met klachten en bevindingen die passen bij een tumor in de buik. In de bespreking wordt stap voor stap gewerkt van anamnese en lichamelijk onderzoek naar differentiaaldiagnose, aanvullende diagnostiek en behandeling. De kern van de casus is dat een buikzwelling bij een kind niet automatisch aan een nierprobleem hoeft te doen denken: ook neurale, hepatobiliaire, gastro-intestinale en hematologische oorzaken moeten worden overwogen.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij Tom vallen vooral op:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`algehele malaise`}</Inline></li>
        <li><Inline>{`koorts`}</Inline></li>
        <li><Inline>{`vallen`}</Inline></li>
        <li><Inline>{`geagiteerd zijn`}</Inline></li>
        <li><Inline>{`afbuigende groeicurve`}</Inline></li>
        <li><Inline>{`bolle buik`}</Inline></li>
        <li><Inline>{`raccoon eyes`}</Inline></li>
        <li><Inline>{`hypertensie`}</Inline></li>
      </ul>
      <PBody
        text={`**Aandachtsvraag:** waarom zijn raccoon eyes belangrijk?
**Mini-antwoord:** dit is een aanwijzing die kan passen bij neuroblastoom.`}
      />
    </div>
  )
}
