import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van een EUG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van de situatie. Er zijn drie hoofdopties:`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Behandeling van een EUG`}</Inline></SubHeading>
      <DataTable rows={[["Behandeling", "Wanneer?", "Wat gebeurt er?"], ["Expectatief", "Adequate patiënte, goede follow-up, laag HCG", "Afwachten met wekelijkse HCG-controles"], ["Medicamenteus", "Klein EUG of zwangerschap op onbekende locatie, HCG <5000", "Methotrexaat, poliklinische follow-up"], ["Chirurgisch", "Verdenking tubaruptuur, vitale EUG, EUG >4 cm, HCG >5000", "Laparoscopie"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een tubaruptuur is chirurgie nodig. Vaak wordt dan een tubectomie verricht, waarbij de aangedane eileider wordt verwijderd. Ook bloed en stolsels in de buik worden verwijderd.`}</Inline></p>
    </div>
  )
}
