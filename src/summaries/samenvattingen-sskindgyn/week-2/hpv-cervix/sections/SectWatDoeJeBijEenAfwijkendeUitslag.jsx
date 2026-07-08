import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat doe je bij een afwijkende uitslag?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De vervolgstappen hangen af van de combinatie van HPV-uitslag en cytologie.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Vervolgbeleid bij screening`}</Inline></SubHeading>
      <DataTable rows={[["Uitslag", "Advies"], ["hrHPV negatief", "herhalen na 5 jaar"], ["hrHPV positief + Pap 1", "herhalen na 6 maanden"], ["hrHPV positief + Pap 2 of hoger", "verwijzen naar de gynaecoloog voor colposcopie"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een positieve high risk HPV-test is de kans op een afwijking van de cervix dus verhoogd, en dan is verdere beoordeling nodig.`}</Inline></p>
    </div>
  )
}
