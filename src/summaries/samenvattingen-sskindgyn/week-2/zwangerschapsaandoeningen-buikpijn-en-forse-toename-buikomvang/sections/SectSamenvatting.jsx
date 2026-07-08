import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Buikpijn in de zwangerschap vraagt om een brede beoordeling, met aandacht voor moeder, uterus en foetus. Belangrijke diagnoses zijn urineweginfectie, abruptio placentae, appendicitis, cholecystitis, niersteenlijden, torsie van een adnex en pre-eclampsie/HELLP. Urineweginfectie komt relatief vaak voor en wordt bevestigd met sediment en kweek, niet alleen met nitriet. Myomen geven meestal weinig problemen, maar kunnen soms pijn veroorzaken door circulatiestoornissen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een snel groeiende buik denk je aan obesitas en diabetes gravidarum. Obesitas verhoogt het risico op meerdere maternale en foetale complicaties. Zwangerschapsdiabetes wordt opgespoord met glucoseonderzoek en OGTT en behandeld met leefstijladviezen, zo nodig insuline. De zorg is multidisciplinair en de foetus wordt gevolgd op macrosomie en polyhydramnion. Na de geboorte zijn glucosecontroles bij de neonaat belangrijk, en op langere termijn heeft de moeder een verhoogde kans op diabetes mellitus en het metabool syndroom.`}</Inline></p>
    </div>
  )
}
