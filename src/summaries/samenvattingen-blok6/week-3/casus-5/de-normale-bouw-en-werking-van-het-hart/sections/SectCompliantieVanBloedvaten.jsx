import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Compliantie van bloedvaten`}</Inline></SubHeading>
      <PBody text={`Bloedvaten zijn elastisch. De mate waarin een vat kan uitzetten bij een drukverandering heet **compliantie**:`} />
      <PBody text={`**C = ΔV / ΔP**`} />
      <p className="leading-relaxed"><Inline>{`Een hoge compliantie betekent dat een vat veel in volume kan toenemen bij een kleine drukstijging. Een lage compliantie betekent dat een vat stijf is.`}</Inline></p>
      <PBody text={`Venen hebben een hoge compliantie. Daardoor kunnen ze veel bloed opslaan zonder dat de druk sterk stijgt. Ze functioneren dus als een **volume-reservoir**. Ongeveer 60-70% van het totale bloedvolume bevindt zich in het veneuze systeem.`} />
      <PBody text={`Arteriën zijn minder compliant dan venen. De elasticiteit van grote arteriën, zoals de aorta, zorgt voor het **Windketeleffect**: tijdens systole wordt de aorta uitgerekt, en tijdens diastole veert zij terug. Daardoor blijft de flow naar de periferie meer continu.`} />
      <p className="leading-relaxed"><Inline>{`Met de leeftijd neemt de arteriële compliantie af. De vaten worden stijver en de polsdruk neemt toe.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
