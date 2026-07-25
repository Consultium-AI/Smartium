import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Screening van cognitief functioneren: de MMSE`}</Inline></SubHeading>
      <PBody text={`Na herstel van de acute ontregeling wordt het cognitief functioneren gescreend met de **Mini Mental State Examination (MMSE)**. Dit is een kort screeningsinstrument voor een globale indruk van het cognitief functioneren.`} />
      <p className="leading-relaxed"><Inline>{`De MMSE test onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`oriëntatie in tijd en plaats;`}</Inline></li>
        <li><Inline>{`geheugen;`}</Inline></li>
        <li><Inline>{`concentratie;`}</Inline></li>
        <li><Inline>{`taal;`}</Inline></li>
        <li><Inline>{`rekenen;`}</Inline></li>
        <li><Inline>{`praxis en visuo-constructie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De test duurt ongeveer 10 minuten en is makkelijk uit te voeren, maar blijft een globale test. De uitslag hangt af van leeftijd en opleiding en er is geen absoluut afkappunt waarmee je automatisch van dementie kunt spreken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De heer Pieterse scoort 21/30. Later, na herstel, scoort hij 23/30. Toch kun je op basis van de MMSE alleen niet vaststellen dat er dementie is. De recente delier/metabole ontregeling en alcoholproblematiek kunnen nog invloed hebben.`}</Inline></p>
    </div>
  )
}
