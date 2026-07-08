import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Cytostatica en ifosfamide`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cytostatica beïnvloeden de celdeling en daarmee de groei. Toch zijn ze vaak noodzakelijk vanwege de ernst van de ziekte. Langetermijneffecten worden gevolgd op de LATER-poli.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ifosfamide kan bij jongens vaak tot infertiliteit leiden. Na een hoge cumulatieve dosis is een groot deel van de jongens subfertiel. Bij meisjes wordt minder gonadotoxiciteit gezien.`}</Inline></p>
    </div>
  )
}
