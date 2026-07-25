import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sensibilisatie en effectorfase`}</Inline></SubHeading>
      <PBody text={`Een IgE-gemedieerde allergische reactie verloopt in twee fasen: de **sensibilisatiefase** en de **effectorfase**.`} />
      <SubHeading><Inline>{`Sensibilisatiefase`}</Inline></SubHeading>
      <PBody text={`In de sensibilisatiefase komt een allergeen het lichaam binnen en wordt het gepresenteerd door een **antigeenpresenterende cel (APC)**. Daarna ontstaat een **Th2-respons**. Th2-cellen stimuleren B-cellen om **IgE** te maken. Daarbij spelen cytokinen zoals **IL-4, IL-5 en IL-13** een belangrijke rol.`} />
      <p className="leading-relaxed"><Inline>{`Kort gezegd: het lichaam “leert” het allergeen kennen en maakt IgE aan.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Wat is het doel van de sensibilisatiefase?
**Mini-antwoord:** Het lichaam maakt specifiek IgE aan tegen het allergeen.`} />
      <SubHeading><Inline>{`Effectorfase`}</Inline></SubHeading>
      <PBody text={`Bij een volgende blootstelling bindt het allergeen aan IgE op de **mestcel**. Daardoor ontstaat **cross-linking** van Fc-receptoren en volgt degranulatie. De mestcel geeft dan mediatoren af, zoals:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`histamine;`}</Inline></li>
        <li><Inline>{`leukotriënen;`}</Inline></li>
        <li><Inline>{`prostaglandine D2;`}</Inline></li>
        <li><Inline>{`PAF;`}</Inline></li>
        <li><Inline>{`tryptase;`}</Inline></li>
        <li><Inline>{`chymase;`}</Inline></li>
        <li><Inline>{`kininen.`}</Inline></li>
      </ul>
      <PBody text={`Deze stoffen veroorzaken de typische klachten van allergie: **bronchusconstrictie, vasodilatatie, oedeem, mucussecretie en zenuwstimulatie**.`} />
      <PBody text={`Ook **eosinofielen** en **basofielen** spelen een rol in de allergische reactie.`} />
    </div>
  )
}
