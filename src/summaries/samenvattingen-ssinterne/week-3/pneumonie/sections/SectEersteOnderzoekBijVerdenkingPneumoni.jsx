import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Eerste onderzoek bij verdenking pneumonie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een zieke patiënt met verdenking op pneumonie wil je snel een beeld krijgen van infectie, orgaanbelasting en dehydratie. Daarom zijn in eerste instantie vooral deze bepalingen belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`CRP`}</Inline></li>
        <li><Inline>{`leukocyten met differentiatie`}</Inline></li>
        <li><Inline>{`ureum en kreatinine`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`CRP en leukocyten geven een indruk van de ontstekingsreactie. Ureum en kreatinine helpen om de mate van uitdroging en nierfunctie te beoordelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast is urineonderzoek nuttig. Als er geen leukocyten in het urinesediment zitten, denk je bij een pneumonie toch aan specifieke antigenen in de urine, namelijk legionella-antigeen en pneumococcen-antigeen. Ook bloed, keelwat en sputum zijn belangrijk materiaal voor diagnostiek. Bloed gebruik je voor bloedkweken, keelwat voor virale diagnostiek en sputum voor gramkleuring en kweek.`}</Inline></p>
    </div>
  )
}
