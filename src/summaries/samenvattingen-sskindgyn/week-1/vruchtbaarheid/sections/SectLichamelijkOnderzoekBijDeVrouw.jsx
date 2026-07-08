import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek bij de vrouw`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het lichamelijk onderzoek wordt bij de vrouw uitgevoerd. Daarbij kijk je naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lengte, gewicht en BMI;`}</Inline></li>
        <li><Inline>{`lichaamsbouw, secundaire beharing en anatomische afwijkingen van de uitwendige genitalia;`}</Inline></li>
        <li><Inline>{`hirsutisme, wat kan passen bij polycysteus ovarium syndroom (PCOS);`}</Inline></li>
        <li><Inline>{`buikoperatielittekens;`}</Inline></li>
        <li><Inline>{`opvallend over- of ondergewicht;`}</Inline></li>
        <li><Inline>{`speculumonderzoek;`}</Inline></li>
        <li><Inline>{`vaginaal toucher;`}</Inline></li>
        <li><Inline>{`transvaginale echografie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij Suzanne worden geen afwijkingen gevonden. Zij heeft een gezond gewicht, normale secundaire geslachtskenmerken en geen aanwijzingen voor afwijkingen van de genitalia interna.`}</Inline></p>
    </div>
  )
}
