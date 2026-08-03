import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nucleaire geneeskunde: beeldvorming van functie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij nucleaire geneeskunde worden radioactieve stoffen gebruikt om processen in het lichaam zichtbaar te maken. De patiënt krijgt een radiofarmacon toegediend; daarna vangt een gamma-camera of PET-camera de uitgezonden straling op. Het grote verschil met radiologie is dus dat je hier niet vooral de anatomie ziet, maar juist de werking van organen en weefsels.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat maakt nucleaire geneeskunde heel bruikbaar bij zowel benigne als maligne aandoeningen. Je kunt er bijvoorbeeld infecties, ontstekingen en tumoren mee aantonen, maar ook orgaanfunctie onderzoeken, zoals de nierfunctie. In deze module ligt de nadruk op oncologische toepassingen.`}</Inline></p>
    </div>
  )
}
