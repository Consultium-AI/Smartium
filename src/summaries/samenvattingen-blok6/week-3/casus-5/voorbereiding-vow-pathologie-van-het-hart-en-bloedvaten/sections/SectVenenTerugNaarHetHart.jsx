import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Venen: terug naar het hart`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Venen voeren het bloed terug naar het hart. Vergeleken met arteriën hebben ze een dunnere wand en een grotere lumen. De druk in het veneuze systeem is lager, daarom is de wandopbouw anders.`}</Inline></p>
      <SubHeading><Inline>{`Kleine en middelgrote venen`}</Inline></SubHeading>
      <PBody text={`Deze venen hebben een relatief dunne media en een dikkere adventitia. In middelgrote venen kunnen **kleppen** aanwezig zijn. Die zorgen ervoor dat het bloed niet terugstroomt, vooral belangrijk in de extremiteiten.`} />
      <SubHeading><Inline>{`Grote venen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Grote venen hebben een dikke adventitia met veel bindweefsel en soms longitudinale spierbundels. Ook hier is de wandopbouw duidelijk, maar anders dan bij arteriën: de adventitia is vaak de dikste laag.`}</Inline></p>
    </div>
  )
}
