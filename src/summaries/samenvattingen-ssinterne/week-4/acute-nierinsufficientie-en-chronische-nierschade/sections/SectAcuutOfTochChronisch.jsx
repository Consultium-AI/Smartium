import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acuut of toch chronisch?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een verminderde nierfunctie kan acuut lijken, terwijl er al langer chronische nierschade bestaat. Dat is belangrijk, omdat nierziekte vaak lang stil verloopt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Aanwijzingen voor chronische nierschade zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`kleine nieren op echo;`}</Inline></li>
        <li><Inline>{`anemie die past bij EPO-tekort of EPO-resistentie;`}</Inline></li>
        <li><Inline>{`combinatie van hypocalciëmie, hyperfosfatemie en verhoogd PTH;`}</Inline></li>
        <li><Inline>{`al langer bestaande proteïnurie of andere urineafwijkingen;`}</Inline></li>
        <li><Inline>{`oude nierfunctiewaarden die al eerder afwijkend waren.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Kleine nieren zijn, rekening houdend met de lichaamslengte, altijd een teken van chronische nierschade. Bij een patiënt met een verhoogd creatinine kan dus zowel acute als chronische schade meespelen.`}</Inline></p>
    </div>
  )
}
