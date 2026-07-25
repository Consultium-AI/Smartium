import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenwerking en gericht aanvragen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het is belangrijk om ANA-bepaling in overleg met de medisch immunoloog aan te vragen. Als de klinische vraagstelling duidelijk is, kan gerichter worden gezocht naar specifieke ANA-profielen en antistoffen. Dat vergroot de diagnostische waarde van het onderzoek.`}</Inline></p>
    </div>
  )
}
