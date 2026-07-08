import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Blauwe plekken: waarom zijn die zo belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Blauwe plekken kunnen een uiting zijn van lichamelijke kindermishandeling. Een blauwe plek is een onderhuidse bloeduitstorting en ontstaat vrijwel altijd door uitwendige inwerking van stomp mechanisch geweld. De richtlijn over blauwe plekken helpt bij het beoordelen en duiden van deze plekken, onder andere om onderscheid te maken tussen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`accidenteel;`}</Inline></li>
        <li><Inline>{`niet-accidenteel;`}</Inline></li>
        <li><Inline>{`ziekte of aandoening.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Differentiaaldiagnose bij blauwe plekken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet elke blauwe plek is mishandeling. Andere mogelijke verklaringen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`trauma;`}</Inline></li>
        <li><Inline>{`stollingsstoornis;`}</Inline></li>
        <li><Inline>{`pigmentafwijking;`}</Inline></li>
        <li><Inline>{`allergische of toxische reacties;`}</Inline></li>
        <li><Inline>{`hemangiomen;`}</Inline></li>
        <li><Inline>{`vasculitisbeelden;`}</Inline></li>
        <li><Inline>{`Ehlers-Danlos;`}</Inline></li>
        <li><Inline>{`bevriezing;`}</Inline></li>
        <li><Inline>{`kleurstoffen, bijvoorbeeld van een spijkerbroek.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Rode vlaggen bij blauwe plekken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn een paar kenmerken die extra verdacht zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`blauwe plekken op ‘rode’ locaties op het lichaam;`}</Inline></li>
        <li><Inline>{`meerdere plekken;`}</Inline></li>
        <li><Inline>{`patroonvormige blauwe plekken, bijvoorbeeld door vingers of een object.`}</Inline></li>
      </ul>
      <PBody text={`Een bekende vuistregel is: **“If they can’t cruise, they shouldn’t bruise.”** Dat betekent dat een kind dat nog niet zelfstandig rondbeweegt, niet zomaar blauwe plekken zou moeten hebben.`} />
    </div>
  )
}
