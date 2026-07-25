import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Non-Hodgkin lymfoom is een grote en heterogene groep lymfomen, meestal van B-cel oorsprong. De presentatie bestaat vaak uit niet-pijnlijke lymfeklierzwelling en soms uit B-symptomen zoals nachtzweten, gewichtsverlies en vermoeidheid. De diagnose kan alleen worden gesteld met een lymfeklierbiopt, bij voorkeur een excisiebiopt. Daarna volgen immunohistochemie, stadiëring met onder andere PET-scan en soms beenmergonderzoek, en prognostische beoordeling met de IPI. Bij DLBCL zijn CD20-positiviteit, het histologische beeld van grote blastaire cellen en eventueel MYC-onderzoek belangrijk. De behandeling bestaat uit R-CHOP, waarbij rituximab de overleving heeft verbeterd.`}</Inline></p>
    </div>
  )
}
