import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Trombocytentransfusie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij trombocyten moet je ook rekening houden met ABO en Rhesus. ABO-incompatibiliteit leidt niet direct tot hemolyse, maar kan wel zorgen voor versnelde afbraak van trombocyten in de milt, waardoor de transfusie minder effectief is. Daarom transfundeer je bij voorkeur ABO-identiek of compatibel.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Rhesus D komt niet op trombocyten zelf voor, maar wel op de kleine hoeveelheid erytrocyten die in het trombocytenconcentraat aanwezig kan zijn. Daarom kan een Rh(D)-positief trombocytenconcentraat bij een Rh(D)-negatieve patiënt anti-D-vorming veroorzaken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook het plasma in een trombocytenconcentraat is relevant. Trombocytenproducten bevatten namelijk ook plasma. Daardoor kunnen antistoffen worden meegetransfundeerd, wat bij incompatibiliteit hemolyse kan geven.`}</Inline></p>
    </div>
  )
}
