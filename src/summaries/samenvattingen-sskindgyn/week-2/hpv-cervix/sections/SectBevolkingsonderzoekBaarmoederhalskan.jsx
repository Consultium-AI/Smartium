import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bevolkingsonderzoek baarmoederhalskanker`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het bevolkingsonderzoek is bedoeld om (pre-)maligne afwijkingen van de cervix vroeg op te sporen. Vroege opsporing geeft een betere behandeling en prognose.`}</Inline></p>
      <PBody text={`In Nederland zijn er jaarlijks ongeveer **700 nieuwe gevallen** van cervixcarcinoom en overlijden **200-250 vrouwen** per jaar aan de gevolgen daarvan.`} />
      <SubHeading><Inline>{`Preventie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn twee vormen van preventie:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Primaire preventie**: vaccinatie vanaf 13 jaar.`}</Inline></li>
        <li><Inline>{`**Secundaire preventie**: bevolkingsonderzoek tussen 30 en 60 jaar.`}</Inline></li>
      </ul>
      <PBody text={`In het rijksvaccinatieprogramma worden meisjes ingeënt met **Cervarix**, een bivalent vaccin tegen HPV 16 en 18. Er is niet gekozen voor Gardasil als standaardvaccin in deze beschrijving; dat vaccin beschermt ook tegen HPV 6 en 11, die vooral genitale wratten veroorzaken. Er komt daarnaast een **nanovalent vaccin** dat tegen negen high risk HPV-typen beschermt.`} />
      <SubHeading><Inline>{`Waarom is het bevolkingsonderzoek veranderd?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het bevolkingsonderzoek is aangepast omdat:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de sensitiviteit van een uitstrijkje laag is;`}</Inline></li>
        <li><Inline>{`de opkomst voor uitstrijkjes slechts 65% was;`}</Inline></li>
        <li><Inline>{`50% van de vrouwen met cervixcarcinoom niet meedoet aan het bevolkingsonderzoek;`}</Inline></li>
        <li><Inline>{`de combinatie van HPV-test en uitstrijkje een betere voorspellende waarde heeft.`}</Inline></li>
      </ul>
      <PBody text={`De grootste verandering is dat er nu **primair wordt gescreend op high risk HPV**.`} />
    </div>
  )
}
