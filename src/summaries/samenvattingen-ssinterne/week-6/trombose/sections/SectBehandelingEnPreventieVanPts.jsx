import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling en preventie van PTS`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De beste behandeling van PTS is eigenlijk preventie van trombose. Daarom is tromboseprofylaxe belangrijk in hoogrisicosituaties, zoals orthopedische operaties en ziekenhuisopname met bedrust.`}</Inline></p>
      <PBody text={`Een **elastische steunkous** kan helpen om PTS te voorkomen. De kous ondersteunt de kuitspier, die normaal helpt om veneus bloed omhoog te pompen. Als het been nog te dik is, kan het eerst worden gezwachteld totdat de zwelling afneemt. Daarna wordt een steunkous aangemeten.`} />
      <p className="leading-relaxed"><Inline>{`De kous moet zo goed mogelijk gedragen worden, liefst minimaal 2 jaar. Bij voorkeur gaat het om een klasse III-kous met een enkeldruk van 35–45 mmHg. Als dat niet haalbaar is, kan klasse II worden gebruikt met een enkeldruk van 25–35 mmHg.`}</Inline></p>
    </div>
  )
}
