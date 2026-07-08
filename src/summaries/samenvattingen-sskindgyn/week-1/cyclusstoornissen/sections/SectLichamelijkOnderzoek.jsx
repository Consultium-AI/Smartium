import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek let je specifiek op aanwijzingen voor een hormonale of anatomische oorzaak van de cyclusstoornis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Je beoordeelt onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`secundaire geslachtskenmerken;`}</Inline></li>
        <li><Inline>{`lengte en gewicht;`}</Inline></li>
        <li><Inline>{`het aspect van de huid: droogheid, acne en beharingpatroon;`}</Inline></li>
        <li><Inline>{`galactorroe;`}</Inline></li>
        <li><Inline>{`tekenen van atrofie;`}</Inline></li>
        <li><Inline>{`grootte van de uterus;`}</Inline></li>
        <li><Inline>{`grootte van de ovaria;`}</Inline></li>
        <li><Inline>{`status van de genitalia externa en interna.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`In een casus met opvliegers, nachtzweten, vaginale droogheid en een droge huid denk je al snel aan een hypo-oestrogene toestand. Dat betekent dat er te weinig oestrogeen aanwezig is. Ook een kleine uterus en atrofische vaginawanden passen daarbij.`}</Inline></p>
    </div>
  )
}
