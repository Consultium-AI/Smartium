import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De commerciële markt van wearables`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De markt voor wearables groeit sterk. Dat komt doordat veel mensen hun stappen, conditie, hartslag en slaap willen bijhouden. Voor commerciële aanbieders is dat interessant, omdat er veel vraag is naar producten die gezondheid zichtbaar en meetbaar maken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een voorbeeld dat hierbij genoemd wordt, is een wearable van Flow Neuroscience. Daarbij wordt duidelijk dat bedrijven vaak niet alleen een apparaat aanbieden, maar ook claims doen over het effect ervan op klachten of gezondheid. Juist dan is het belangrijk om kritisch te kijken naar de onderbouwing.`}</Inline></p>
      <SubHeading><Inline>{`Kritisch kijken naar claims`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de beoordeling van zulke claims moet je niet alleen afgaan op wat een aanbieder zegt. Je moet ook kijken naar de wetenschappelijke evaluatie. Soms lijken resultaten indrukwekkend, maar blijken ze in een studie toch anders of minder sterk te zijn dan in de commerciële uitleg wordt gesuggereerd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij het voorbeeld van Flow Neuroscience werd in de video een bepaald effect genoemd, maar in het gevonden artikel werden andere uitkomsten gerapporteerd. Dat laat zien dat je altijd goed moet controleren of een claim echt terug te vinden is in de literatuur.`}</Inline></p>
    </div>
  )
}
