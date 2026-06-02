import { Inline, DataTable, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Bij hoog-risico neuroblastoom wordt een intensief behandelprotocol gebruikt. De behandeling bestaat uit:`}</Inline>
      </p>
      <ol className="list-decimal pl-6 space-y-2 m-0">
        <li><Inline>{`**Chemotherapie**`}</Inline></li>
        <li><Inline>{`**Operatie**`}</Inline></li>
        <li><Inline>{`**Bestraling**`}</Inline></li>
        <li><Inline>{`**Immunotherapie**`}</Inline></li>
      </ol>

      <SubHeading level={2}>Belangrijke geneesmiddelen</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De volgende middelen worden genoemd:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0 columns-1 sm:columns-2">
        <li><Inline>{`cisplatin`}</Inline></li>
        <li><Inline>{`carboplatin`}</Inline></li>
        <li><Inline>{`cyclophosphamide`}</Inline></li>
        <li><Inline>{`dacarbazine`}</Inline></li>
        <li><Inline>{`doxorubicin`}</Inline></li>
        <li><Inline>{`etoposide`}</Inline></li>
        <li><Inline>{`ifosfamide`}</Inline></li>
        <li><Inline>{`thiothepa`}</Inline></li>
        <li><Inline>{`busulfan`}</Inline></li>
        <li><Inline>{`melphalan`}</Inline></li>
        <li><Inline>{`vincristine`}</Inline></li>
        <li><Inline>{`vindesine`}</Inline></li>
        <li><Inline>{`temozolomide`}</Inline></li>
        <li><Inline>{`irinotecan`}</Inline></li>
        <li><Inline>{`dinutuximab`}</Inline></li>
      </ul>

      <SubHeading level={2}>Complicaties van behandeling</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De behandeling kan veel bijwerkingen geven:`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Complicatie', 'Middelen waarbij dit genoemd wordt'],
          ['---', '---'],
          ['nierproblemen', 'cisplatin, ifosfamide'],
          ['neuropathie', 'vindesine, vinblastine'],
          ['infecties', 'alle middelen'],
          ['convulsies', 'busulfan'],
          ['mucositis', 'alle middelen, radiotherapie'],
          ['haaruitval', 'alle middelen'],
          ['hematurie', 'cyclofosfamide'],
          ['misselijkheid', 'alle middelen, radiotherapie'],
          ['diarree', 'alle middelen, vooral irinotecan'],
        ]}
      />

      <SubHeading level={2}>Lange-termijneffecten</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Ook op langere termijn kunnen problemen ontstaan:`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Lange-termijneffect', 'Middelen/oorzaak'],
          ['---', '---'],
          ['chronische nierproblemen', 'cisplatin, ifosfamide'],
          ['neuropathie', 'vindesine, vinblastine'],
          ['longproblemen', 'busulfan'],
          ['gehoorproblemen', 'cisplatin, carboplatin'],
          ['cardiomyopathie', 'doxorubicine'],
          ['infertiliteit', 'cyclophosphamide, ifosfamide, radiotherapie'],
          ['vermoeidheid', 'algemeen'],
          ['tweede maligniteiten', 'radiotherapie, etoposide'],
          ['mogelijk effect van immunotherapie', 'genoemd als vraagteken'],
        ]}
      />
      <PBody
        text={`**Aandachtsvraag:** waarom wordt een echocardiogram genoemd vóór bepaalde medicatie?
**Mini-antwoord:** omdat sommige middelen invloed kunnen hebben op het hart, zoals doxorubicine.`}
      />
    </div>
  )
}
