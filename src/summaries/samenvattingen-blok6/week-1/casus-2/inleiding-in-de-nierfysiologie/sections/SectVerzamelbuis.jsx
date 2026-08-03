import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verzamelbuis`}</Inline></SubHeading>
      <PBody text={`De **verzamelbuis** ontvangt vloeistof van meerdere nefronen en loopt van de schors naar het nierbekken. Hier wordt de uiteindelijke water- en zoutreabsorptie geregeld onder invloed van **ADH** en **aldosteron**.`} />
      <p className="leading-relaxed"><Inline>{`De verzamelbuis bepaalt dus uiteindelijk hoeveel water in de urine blijft en hoeveel urine er gevormd wordt. De waterdoorlaatbaarheid is hormonaal gereguleerd en daardoor essentieel voor urineconcentratie.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom is de verzamelbuis zo belangrijk?
**Mini-antwoord:** Omdat hier de uiteindelijke hoeveelheid water in de urine wordt bepaald onder invloed van hormonen.`} />
    </div>
  )
}
