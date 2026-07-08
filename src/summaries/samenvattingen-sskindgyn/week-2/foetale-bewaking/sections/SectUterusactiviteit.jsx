import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Uterusactiviteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de beoordeling van de uterusactiviteit let je op frequentie, duur en ontspanning tussen de contracties. Intrapartum wordt gestreefd naar maximaal 4 tot 5 contracties per 10 minuten, met voldoende rusttijd ertussen en zonder hypertonie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een CTG moet minimaal 30 minuten geregistreerd worden, onder andere omdat foetale gedragstoestanden tijd nodig hebben om zichtbaar te worden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als uitwendige registratie van contracties onvoldoende is, kan een intra-uteriene drukmeting worden gebruikt. Bij twijfel over hypertonie kan uitwendig palperen helpen om te beoordelen of de uterus tussen contracties voldoende ontspant.`}</Inline></p>
    </div>
  )
}
