import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Immunosuppressie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De afweerremming start al tijdens de operatie met hoge doseringen prednison. Daarna volgt op de IC een standaard schema met meerdere middelen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Medicatie na longtransplantatie`}</Inline></SubHeading>
      <DataTable rows={[["Medicijn", "Werking"], ["Basiliximab", "bindt aan de IL-2 receptor op T-cellen en remt proliferatie"], ["(Methyl)prednisolon", "remt ontsteking en afweercelactiviteit"], ["Calcineurineremmer, zoals tacrolimus of ciclosporine", "remt IL-2-productie en T-celactivatie"], ["Mycofenolaatmofetil", "remt B- en T-cellen"]]} />
      <p className="leading-relaxed"><Inline>{`Basiliximab wordt alleen direct na de operatie en 4 dagen later gegeven. De andere middelen moeten patiënten levenslang gebruiken. Daarom is therapietrouw heel belangrijk. Een paar doses overslaan kan al leiden tot afstoting.`}</Inline></p>
    </div>
  )
}
