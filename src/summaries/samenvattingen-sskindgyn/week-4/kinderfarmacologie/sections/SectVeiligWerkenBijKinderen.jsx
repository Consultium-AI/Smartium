import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Veilig werken bij kinderen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste boodschap is dat je bij kinderen altijd zorgvuldig moet rekenen en controleren. Gebruik het Kinderformularium, let op leeftijd, gewicht, maximale dosis, toedienvorm, hulpstoffen en registratie-status. Laat je niet afleiden en vraag bij twijfel altijd een collega of apotheker.`}</Inline></p>
    </div>
  )
}
