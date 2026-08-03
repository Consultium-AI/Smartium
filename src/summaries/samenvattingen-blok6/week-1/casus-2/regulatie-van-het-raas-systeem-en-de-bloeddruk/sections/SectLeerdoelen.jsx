import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je uitleggen hoe het renine-angiotensine-aldosteronsysteem, kortweg het RAAS, de bloeddruk en de volumestatus van het lichaam reguleert. Je kunt beschrijven wanneer het RAAS wordt geactiveerd of geremd, bijvoorbeeld bij hypotensie, hypovolemie, uitdroging of hartfalen. Ook kun je uitleggen hoe geneesmiddelen zoals ACE-remmers, angiotensine II-receptorblokkers, renineremmers en mineralocorticoïdreceptor-antagonisten het RAAS beïnvloeden, en welke gevolgen dat heeft voor bloeddruk, vochtbalans en elektrolyten.`}</Inline></p>
    </div>
  )
}
