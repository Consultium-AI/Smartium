import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 1. Overzicht van reacties op NSAID’s`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Uitleg"], ["Middelgroep", "NSAID’s, inclusief aspirine"], ["Gewenste werking", "Pijnstilling, koortsverlaging, ontstekingsremming"], ["Mogelijke reactie", "Overgevoeligheidsreactie"], ["Mechanisme", "Allergisch of pseudo-allergisch"], ["Klinische klachten", "Huidreacties, zwelling, benauwdheid, systemische reactie"], ["Belang", "Vaak gebruikte middelen, dus klinisch relevant"]]} />
    </div>
  )
}
