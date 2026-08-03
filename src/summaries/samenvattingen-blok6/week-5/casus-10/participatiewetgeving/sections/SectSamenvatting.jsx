import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De kern van deze stof is dat ziekte, arbeidsongeschiktheid, re-integratie en uitkering nauw met elkaar samenhangen. Eerst wordt gekeken of iemand nog kan werken, daarna welke begeleiding en interventies nodig zijn, en uiteindelijk of iemand recht heeft op een uitkering. De verzekeringsarts en arbeidsdeskundige spelen daarin een centrale rol. De FML en het verschil tussen maatmanloon en restverdiencapaciteit vormen de basis van de beoordeling.`}</Inline></p>
    </div>
  )
}
