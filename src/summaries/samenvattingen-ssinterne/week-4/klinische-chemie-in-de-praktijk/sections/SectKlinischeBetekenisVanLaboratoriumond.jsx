import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische betekenis van laboratoriumonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Laboratoriumonderzoek is niet alleen bedoeld om een waarde te meten, maar vooral om een klinische vraag te beantwoorden. Een uitslag moet daarom altijd in context worden bekeken. Een positieve test betekent niet automatisch dat de diagnose vaststaat, en een negatieve test sluit een ziekte niet altijd uit. Juist daarom zijn begrippen als juistheid, precisie, interferentie, sensitiviteit en specificiteit zo belangrijk.`}</Inline></p>
    </div>
  )
}
