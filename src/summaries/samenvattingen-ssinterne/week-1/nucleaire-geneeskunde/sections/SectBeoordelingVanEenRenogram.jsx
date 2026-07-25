import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beoordeling van een renogram`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de beoordeling let je op verschillende fases. Die worden altijd beschreven.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Fases in de beoordeling van een renogram`}</Inline></SubHeading>
      <DataTable rows={[["Fase", "Wat betekent het?", "Hoe beschrijf je het?"], ["Perfusie", "Doorbloeding van de nier; passief proces", "Homogeen, inhomogeen, centraal fotopen"], ["Extractie", "Het uit het bloed trekken van de radioactiviteit; actief proces", "Goed, redelijk, matig, slecht"], ["Excretie", "Verplaatsing van radioactiviteit van parenchym naar pyelum", "Vanaf welke minuut zichtbaar"], ["Afvloed", "Afvoer naar de blaas", "Vanaf welke minuut, of niet zichtbaar"]]} />
      <SubHeading><Inline>{`Perfusie`}</Inline></SubHeading>
      <PBody text={`De **perfusie** zie je in de eerste minuut. Je beoordeelt of de doorbloeding homogeen is of dat er een defect is. Een **fotopen** gebied betekent dat daar geen radioactiviteit zichtbaar is.`} />
      <SubHeading><Inline>{`Extractie`}</Inline></SubHeading>
      <PBody text={`De **extractie** laat zien hoe goed de nier de radioactiviteit uit het bloed haalt. Dit is een actief proces. De nieren moeten hierbij mooi “zwart” worden op de beelden, wat past bij goede opname.`} />
      <SubHeading><Inline>{`Excretie`}</Inline></SubHeading>
      <PBody text={`Bij de **excretie** kijk je wanneer de radioactiviteit voor het eerst vanuit het nierweefsel naar het pyelocalicieel systeem gaat. Je let dus op het moment waarop je activiteit in de calyces of ureter ziet.`} />
      <SubHeading><Inline>{`Afvloed`}</Inline></SubHeading>
      <PBody text={`Bij de **afvloed** kijk je of de activiteit ook echt naar de blaas wegloopt. Je noteert wanneer dat gebeurt of dat het helemaal niet zichtbaar is.`} />
      <PBody text={`Let altijd goed op **links-rechtsverschillen**.`} />
    </div>
  )
}
