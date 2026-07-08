import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zuigeling met koorts en spugen: waarom dit belangrijk is`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Koorts en spugen bij een zuigeling komen relatief vaak voor. Juist bij deze leeftijdsgroep is het belangrijk om goed te onderscheiden tussen onschuldige, vaak virale infecties en ernstigere oorzaken die snel behandeling nodig hebben. De klachten zijn vaak aspecifiek: een zuigeling kan zich uiten met koorts, braken, slecht drinken, prikkelbaarheid of sufheid, zonder dat meteen duidelijk is waar de infectie zit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij jonge zuigelingen moet je daarom altijd breed denken. Een urineweginfectie is daarbij een belangrijke diagnose, omdat die op deze leeftijd vaak weinig specifieke klachten geeft.`}</Inline></p>
    </div>
  )
}
