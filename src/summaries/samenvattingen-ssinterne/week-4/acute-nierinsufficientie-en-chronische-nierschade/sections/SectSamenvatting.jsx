import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Nierfunctiestoornissen worden in de praktijk vooral beoordeeld met de GFR, meestal geschat via creatinine en formules zoals CKD-EPI. Acute nierinsufficiëntie is een plotselinge achteruitgang van de nierfunctie en vraagt snelle herkenning en behandeling. De oorzaken verdeel je handig in prerenaal, renaal en postrenaal. Chronische nierschade betekent dat er al minstens drie maanden sprake is van structurele nierschade of verminderde nierfunctie. De combinatie van GFR en albuminurie bepaalt het risico en de follow-up. Anamnese, lichamelijk onderzoek, urineonderzoek, echo en gericht bloedonderzoek zijn essentieel om de oorzaak te vinden. Bij acute nierinsufficiëntie moet je altijd denken aan complicaties zoals overvulling, hyperkaliëmie en acidose, en aan de vraag of dialyse nodig is. Preventie begint bij het vroeg herkennen van risicopatiënten en het tijdig opsporen van nierschade.`}</Inline></p>
    </div>
  )
}
