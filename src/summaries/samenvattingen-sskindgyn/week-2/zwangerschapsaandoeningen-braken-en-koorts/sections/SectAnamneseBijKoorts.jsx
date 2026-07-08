import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anamnese bij koorts`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om de oorzaak te achterhalen vraag je naar het begin en beloop van de koorts, de hoogte van de temperatuur, koude rillingen, griepachtige klachten, hoesten, benauwdheid, relatie met eten, misselijkheid, diarree, mictieklachten, huiduitslag, zieke contacten, reizen, auto-immuunziekten, zwangerschapsduur, buikpijn, kindsbewegingen en eventueel bloed- of vruchtwaterverlies.`}</Inline></p>
    </div>
  )
}
