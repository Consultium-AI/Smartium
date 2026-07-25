import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beenmergonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Beenmergonderzoek is belangrijk voor de stadiëring, de prognose en de follow-up van het behandelresultaat. Het beenmerg wordt onderzocht met morfologie, immunofenotypering en histologie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij DLBCL is beenmergonderzoek vooral nodig als de PET-scan negatief is of als het voor de behandeling uitmaakt of er een discordante histologie aanwezig is, bijvoorbeeld een kleincellig lymfoom in het beenmerg.`}</Inline></p>
    </div>
  )
}
