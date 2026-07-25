import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Albumine: wel prognostisch, niet diagnostisch voor voedingstoestand`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Serumalbumine is voorspellend voor mortaliteitsrisico, zowel in de algemene populatie als in de ziekenhuispopulatie. Maar albumine is geen goede maat voor de voedingstoestand zelf.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat komt doordat albumine beïnvloed wordt door veel factoren, zoals dehydratie, overvulling, inflammatie, nefropathie en toegenomen verlies via bijvoorbeeld de darm of nier. Bovendien heeft albumine een lange halfwaardetijd van ongeveer 18 dagen. Daardoor zegt een lage albuminewaarde niet direct dat iemand acuut slecht gevoed is.`}</Inline></p>
    </div>
  )
}
