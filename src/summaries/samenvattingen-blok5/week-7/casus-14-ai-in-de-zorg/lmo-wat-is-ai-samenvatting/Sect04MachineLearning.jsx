export default function Sect04MachineLearning() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Machine learning: computers leren van data</h2>
      <p className="whitespace-pre-line">
        {`Machine learning
 is het deel van AI waarbij computers leren van voorbeelden en data, in plaats van dat elke regel vooraf volledig wordt uitgeschreven.`}
      </p>
      <p>
        De kern is simpel: een systeem krijgt veel voorbeelden te zien en leert daarin patronen herkennen. Daardoor kan het
        later ook iets zeggen over nieuwe gevallen.
      </p>
      <p className="whitespace-pre-line">
        {`Een toegankelijk voorbeeld is het 
spamfilter
. Dat systeem leert welke kenmerken vaak voorkomen in ongewenste mails. Daarna vergelijkt het nieuwe mails met wat het eerder heeft geleerd. Het systeem maakt dus steeds de afweging: is dit waarschijnlijk spam of niet?`}
      </p>
      <p className="whitespace-pre-line">
        {`De cursus laat daarmee mooi zien dat machine learning eigenlijk draait om 
input-output-paren
:`}
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>input: kenmerken van een e-mail</li>
        <li>output: spam of geen spam</li>
      </ul>
      <p className="whitespace-pre-line">
        {`Dat heet 
supervised learning
: leren met voorbeelden waarbij het juiste antwoord al bekend is.`}
      </p>
    </div>
  )
}
