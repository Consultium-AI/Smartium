import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is sepsis?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sepsis is een acuut en levensbedreigend syndroom. Het is belangrijk om het snel te herkennen, omdat de kans op overlijden hoog is als behandeling uitblijft. De kern van sepsis is dat een infectie leidt tot een ontregelde afweerreactie van het lichaam, waardoor orgaandysfunctie ontstaat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vroeger werd vaak gewerkt met het begrip SIRS. Dat is inmiddels verlaten. Tegenwoordig wordt sepsis gedefinieerd als levensbedreigende orgaandysfunctie veroorzaakt door disregulatie van de hostrespons. Bij verdenking op infectie wordt daarom gekeken naar de qSOFA als snelle screening op een verhoogde kans op overlijden.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Kernbegrippen bij sepsis`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["SIRS", "Oud begrip; systemische ontstekingsreactie met criteria zoals koorts, tachycardie en tachypneu"], ["Sepsis", "Levensbedreigende orgaandysfunctie door ontregelde afweerreactie op infectie"], ["Septische shock", "Sepsis met ernstige circulatoire, cellulaire en metabole afwijkingen, met vasopressorbehoefte en lactaat >2 mmol/L"], ["Bacteriëmie", "Aanwezigheid van bacteriën in het bloed; dit is niet hetzelfde als de definitie van sepsis"]]} />
    </div>
  )
}
