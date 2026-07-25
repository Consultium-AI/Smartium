import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Longembolieprotocol`}</Inline></SubHeading>
      <PBody text={`Een veelvoorkomende vraag binnen de thoraxradiologie is of er sprake is van een **longembolie**. Daarvoor bestaat een speciaal CT-protocol. Het scannen wordt zo getimed dat het contrast zich vooral in de **pulmonaal arteriën** bevindt. Daardoor worden embolieën zichtbaar, omdat daar waar een **trombus** zit geen contrast/bloed aanwezig is.`} />
      <p className="leading-relaxed"><Inline>{`Dit is klinisch belangrijk, omdat een longembolie een urgente diagnose kan zijn. Als de klinische verdenking hoog is, wordt dus een onderzoek gekozen dat deze vraag zo goed mogelijk kan beantwoorden.`}</Inline></p>
    </div>
  )
}
