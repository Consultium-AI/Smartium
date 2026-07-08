import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe beoordeel je of iemand in partu is?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je gebruikt anamnese en lichamelijk onderzoek. Je vraagt naar de contracties: zijn ze pijnlijk, hoe vaak komen ze, en zitten er pauzes tussen? Ook vraag je naar bloedverlies en vruchtwaterverlies. Gering slijmerig bloedverlies kan normaal zijn. Als vruchtwater breekt, is dat helder en kleurloos, vaak met witte vlokjes.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarna onderzoek je de buik. Je voelt of de uterus aanspant; tijdens een wee zijn kindsdelen meestal niet goed voelbaar door de buikwand. Vervolgens doe je een vaginaal toucher en beoordeel je de cervix volgens POVIAS.`}</Inline></p>
    </div>
  )
}
