import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Onderdelen van het hart`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart bestaat uit vier holten: twee atria en twee ventrikels. De atria zijn de ontvangkamers: daar komt het bloed binnen dat naar het hart toe stroomt. De ventrikels zijn de pompkamers: zij stuwen het bloed weer weg uit het hart.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het bloed stroomt in een vaste route door het hart. Zuurstofarm bloed uit het lichaam komt via de vena cava superior en vena cava inferior in het rechter atrium. Van daar gaat het naar het rechter ventrikel, dat het bloed via de truncus pulmonalis en de pulmonale arteriën naar de longen pompt. In de longen wordt het bloed zuurstofrijk. Daarna stroomt het via de pulmonale venen naar het linker atrium, vervolgens naar het linker ventrikel en daarna via de aorta naar de rest van het lichaam.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De hartkleppen zorgen ervoor dat het bloed maar één kant op kan. Tussen atria en ventrikels liggen de atrioventriculaire kleppen: rechts de tricuspidalisklep en links de mitralisklep. Tussen ventrikels en de grote arteriën liggen de semilunaire kleppen: de pulmonalisklep en de aortaklep. Deze kleppen voorkomen terugstromen van bloed.`}</Inline></p>
      <SubHeading><Inline>{`Wanddikte van de ventrikels`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De wand van de ventrikels bestaat grotendeels uit hartspier. Een belangrijk verschil is dat de wand van het linker ventrikel veel dikker is dan die van het rechter ventrikel, bijna drie keer zo dik. Dat past bij de functie: het linker ventrikel moet het bloed met veel kracht door het hele lichaam pompen, terwijl het rechter ventrikel alleen naar de longen pompt.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** waarom is de wand van het linker ventrikel dikker?
**Mini-antwoord:** omdat het bloed van daaruit over een veel grotere afstand en tegen een hogere weerstand moet worden weggepompt.`} />
      <SubHeading><Inline>{`Hartoortjes en herkenningspunten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De atria hebben kleine uitsteeksels die hartoortjes worden genoemd. Dit zijn gerimpelde uitstuipingen die het volume van de atria kunnen vergroten. Vooral het linker hartoortje is klinisch belangrijk. Daar wordt atrial natriuretic peptide gemaakt, een hormoon dat betrokken is bij de vochtbalans. Ook kunnen daar bij atriumfibrilleren gemakkelijk bloedstolsels ontstaan.`}</Inline></p>
    </div>
  )
}
