import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diastolische dysfunctie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij diastolische dysfunctie is de vullingsfunctie van het hart verstoord. Dat komt door verminderde relaxatie of door verminderde compliantie, dus doordat de hartkamer stijver is geworden. Het ventrikel kan zich dan alleen nog vullen bij hogere vullingsdrukken, en vaak is het eind-diastolisch volume verlaagd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het opvallende is dat de ejectiefractie hierbij normaal kan blijven. Dat komt doordat het hart wel een normaal percentage van de aanwezige vulling uitpompt, maar de vulling zelf kleiner is. Daardoor is het slagvolume toch verlaagd. De eind-diastolische druk is verhoogd, omdat de stijve kamer moeilijker vult.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In de PV-loop zie je hierbij een steilere EDPVR-lijn. Dat betekent dat de druk sneller stijgt bij dezelfde toename in volume. De kamer is dus stijf. Morfologisch zie je vaak een verdikte wand en een kleinere kamer. De atriale contractie wordt belangrijker om nog voldoende vulling te krijgen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dit is een belangrijk verschil met systolische dysfunctie: bij diastolische dysfunctie is de knijpkracht niet het hoofdprobleem, maar de vulling wel.`}</Inline></p>
      <PBody text={`**Tabel 2. Systolische versus diastolische dysfunctie**`} />
      <DataTable rows={[["Kenmerk", "Systolische dysfunctie", "Diastolische dysfunctie"], ["Hoofdprobleem", "Verminderde contractiliteit", "Verminderde relaxatie of compliantie"], ["EF", "Verlaagd", "Vaak normaal"], ["SV", "Verlaagd", "Verlaagd"], ["ESV", "Verhoogd", "Vaak niet het primaire probleem"], ["EDV", "Vaak verhoogd", "Vaak verlaagd"], ["PV-loop", "Smaller en naar rechts", "Steilere EDPVR, stijve lus"]]} />
    </div>
  )
}
