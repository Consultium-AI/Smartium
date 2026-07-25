import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Syndroom van Cushing: denken aan hypercortisolisme`}</Inline></SubHeading>
      <PBody text={`Bij een patiënt met klachten zoals centrale obesitas, hypertensie, spierzwakte, striae, blauwe plekken, depressieve klachten, oligo- of amenorroe en gestoorde glucosetolerantie moet je denken aan **hypercortisolisme**. Dat klinische beeld heet het **syndroom van Cushing**.`} />
      <SubHeading><Inline>{`Eerste screening`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor de screening van hypercortisolisme gebruik je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een **1 mg dexamethason-suppressietest**;`}</Inline></li>
        <li><Inline>{`**midnight speekselcortisol**;`}</Inline></li>
        <li><Inline>{`**24-uurs urinecortisol**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een losse serumcortisolwaarde is hiervoor niet geschikt, omdat cortisol een circadiaans ritme heeft. Een cortisol dagritme is ook geen eerstelijnstest.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is een willekeurige serumcortisolwaarde niet genoeg?
**Mini-antwoord:** omdat cortisol normaal sterk schommelt gedurende de dag; één meting zegt dus te weinig.`} />
      <SubHeading><Inline>{`Diagnostiek bij bevestiging`}</Inline></SubHeading>
      <PBody text={`Bij hypercortisolisme kunnen testen onderling verschillen. Daarom worden vaak meerdere testen gebruikt. Als de uitslagen passen bij hypercortisolisme, moet daarna worden bepaald of het om een **ACTH-afhankelijke** of **ACTH-onafhankelijke** oorzaak gaat.`} />
    </div>
  )
}
