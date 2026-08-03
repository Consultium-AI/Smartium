import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tekenen bij lichamelijk onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij hartfalen kun je onder andere vinden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**gestuwde halsvenen**: teken van verhoogde centraalveneuze druk`}</Inline></li>
        <li><Inline>{`**vertraagde capillaire refill**: past bij slechte perfusie`}</Inline></li>
        <li><Inline>{`**derde harttoon (S3)**: past bij verhoogde vullingsdruk`}</Inline></li>
        <li><Inline>{`**galopritme**: afwijkend hartgeluid door extra harttoon`}</Inline></li>
        <li><Inline>{`**verplaatst ictus cordis**: kan wijzen op een vergroot hart`}</Inline></li>
        <li><Inline>{`**crepitaties**: fijne longgeluiden door longoedeem`}</Inline></li>
        <li><Inline>{`**verminderd ademgeruis of demping**: kan passen bij pleuravocht`}</Inline></li>
        <li><Inline>{`**hepatomegalie**: vergrote lever door stuwing`}</Inline></li>
        <li><Inline>{`**ascites**: vocht in de buikholte`}</Inline></li>
        <li><Inline>{`**perifeer oedeem**: vooral enkels en onderbenen`}</Inline></li>
        <li><Inline>{`**koude acra, cyanose of verminderde pulsaties**: passen bij verminderde cardiac output`}</Inline></li>
      </ul>
      <PBody text={`**Aandacht-vraagje:**
Welke bevinding is relatief specifiek voor hartfalen?
**Mini-antwoord:** Een derde harttoon of galopritme past vrij goed bij verhoogde vullingsdrukken.`} />
    </div>
  )
}
