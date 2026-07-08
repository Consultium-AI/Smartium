import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prematuriteit en dysmaturiteit`}</Inline></SubHeading>
      <PBody text={`Een kind is **prematuur** als het geboren wordt vóór 37 weken zwangerschapsduur. Er is sprake van **ernstige prematuriteit** onder 32 weken en van **extreme prematuriteit** onder 26 weken. De problemen bij prematuren hangen vooral samen met **onrijpheid van de organen**. Hoe jonger het kind, hoe groter de kans op complicaties.`} />
      <PBody text={`**Dysmaturiteit** betekent dat een kind te klein is voor de zwangerschapsduur. Bij de interpretatie van groei wordt gekeken naar groeicurves. In Nederland wordt vaak de **Perined geboortegewichtscurve** gebruikt. Daarbij is het belangrijk om niet alleen naar het geboortegewicht te kijken, maar ook naar de groei van bijvoorbeeld de schedelomtrek. Soms is er sprake van **brain-sparing**: de foetus krijgt dan relatief meer bloed naar de hersenen, ten koste van andere organen. Dat past bij **placentaire insufficiëntie**. Een belangrijk gevolg is dat andere organen, zoals darmen en beenmerg, juist minder goed doorbloed kunnen zijn.`} />
      <PBody text={`**Aandachtsvraag:** Wat betekent brain-sparing?`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Mini-antwoord:** De foetus verdeelt de bloedflow preferentieel naar de hersenen, ten koste van andere organen.`}</Inline></li>
      </ul>
    </div>
  )
}
