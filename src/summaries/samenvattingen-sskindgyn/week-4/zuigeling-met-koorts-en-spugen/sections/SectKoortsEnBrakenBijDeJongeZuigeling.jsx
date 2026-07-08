import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Koorts en braken bij de jonge zuigeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zuigelingen jonger dan 3 maanden hebben relatief zelden infecties, onder andere door afweerstoffen die zij van de moeder meekrijgen. Vanaf ongeveer 3 maanden wordt koorts een veel voorkomend symptoom. Koorts in combinatie met braken is bij zuigelingen niet specifiek voor het maag-darmkanaal: braken is vooral een teken dat het kind ziek is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een jonge zuigeling met koorts en braken denk je daarom aan meerdere mogelijke oorzaken.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Mogelijke oorzaken van koorts en braken bij een jonge zuigeling`}</Inline></SubHeading>
      <DataTable rows={[["Mogelijke oorzaak", "Passende klachten of aanwijzingen"], ["Gastro-enteritis", "Verandering in frequentie en samenstelling van de ontlasting"], ["Bovenste luchtweginfectie", "Verkoudheid, neusuitvloed, grijpen naar oren"], ["Pneumonie", "Snelle ademhaling, bemoeilijkte ademhaling"], ["Meningitis", "Meningeale prikkeling, sufheid, prikkelbaarheid"], ["Sepsis", "Kreunen, sufheid, prikkelbaarheid"], ["Urineweginfectie", "Troebele of stinkende urine, koorts, braken"]]} />
      <PBody text={`**Aandacht-vraagje:** Waarom is braken bij een zuigeling niet meteen een buikprobleem?
**Mini-antwoord:** Omdat braken bij jonge kinderen vaak een algemene uiting van ziek zijn is en niet per se wijst op een probleem in het maag-darmkanaal.`} />
    </div>
  )
}
