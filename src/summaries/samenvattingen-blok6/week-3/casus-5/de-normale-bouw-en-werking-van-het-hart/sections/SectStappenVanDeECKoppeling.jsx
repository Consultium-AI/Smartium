import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stappen van de E-C koppeling`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Het actiepotentiaal verspreidt zich over het sarcolemma en de T-tubuli`}</Inline></li>
        <li><Inline>{`L-type calciumkanalen openen`}</Inline></li>
        <li><Inline>{`Een kleine hoeveelheid calcium komt de cel binnen`}</Inline></li>
        <li><Inline>{`Dit activeert ryanodinereceptoren op het sarcoplasmatisch reticulum`}</Inline></li>
        <li><Inline>{`Er komt veel calcium vrij uit het SR`}</Inline></li>
        <li><Inline>{`Calcium bindt aan troponine C`}</Inline></li>
        <li><Inline>{`Tropomyosine verschuift`}</Inline></li>
        <li><Inline>{`Actine en myosine kunnen binden`}</Inline></li>
        <li><Inline>{`De spier trekt samen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Calcium is dus de directe schakel tussen elektrische prikkel en mechanische contractie.`}</Inline></p>
    </div>
  )
}
