import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je uitleggen hoe de water-, kalium- en zuur-basebalans in het lichaam worden geregeld. Je begrijpt ook hoe stoornissen in de zuur-basebalans samenhangen met stoornissen in de kaliumbalans. Verder kun je beschrijven hoe hypo- en hypernatriëmie ontstaan en hoe je op basis van anamnese en laboratoriumonderzoek tot een behandelplan komt. Hetzelfde geldt voor hypo- en hyperkaliëmie, en voor acidose en alkalose.`}</Inline></p>
    </div>
  )
}
