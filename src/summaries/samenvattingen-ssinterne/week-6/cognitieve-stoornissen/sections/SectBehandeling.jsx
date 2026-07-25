import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op Wernicke encefalopathie moet snel worden behandeld met thiamine. Bij een duidelijke verdenking op een acute of subacute verandering van bewustzijn, cognitie, looppatroon of oogbewegingen wordt hoge dosis thiamine intraveneus gegeven. Bij verhoogd risico, bijvoorbeeld bij alcoholisten die zichzelf verwaarlozen of cognitieve stoornissen hebben, wordt ook thiamine gegeven, maar in een lagere dosis.`}</Inline></p>
      <PBody text={`Belangrijk is dat **glucose nooit eerst wordt gegeven zonder adequate thiamine**, omdat dit een Wernicke encefalopathie kan uitlokken of verergeren.`} />
    </div>
  )
}
