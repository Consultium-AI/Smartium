import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De rol van de nierbiopsie in de behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een nierbiopt is niet alleen bedoeld om een diagnose te stellen. Het kan ook helpen om te bepalen hoe actief het ziekteproces nog is en hoeveel blijvende schade er al bestaat. Dat is vooral belangrijk als de beslissing over verdere behandeling lastig is. Bij veel inflammatie kan behandeling nog zinvol zijn; bij veel chronische schade is de kans op herstel kleiner.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarmee is de nierbiopsie een belangrijk hulpmiddel in de nefrologie, maar alleen als de procedure veilig kan worden uitgevoerd en de uitslag echt iets toevoegt aan de behandeling.`}</Inline></p>
    </div>
  )
}
