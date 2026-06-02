import { Inline, PBody } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De differentiaaldiagnose bij een kind met buikzwelling is breed. In deze casus worden de volgende diagnoses expliciet meegenomen:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`Wilms tumor`}</Inline></li>
        <li><Inline>{`clear cell sarcoom van de nier`}</Inline></li>
        <li><Inline>{`neuroblastoom`}</Inline></li>
        <li><Inline>{`kiemceltumor`}</Inline></li>
        <li><Inline>{`lymfoom`}</Inline></li>
        <li><Inline>{`fecale impactie`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`De combinatie van:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`jonge leeftijd,`}</Inline></li>
        <li><Inline>{`algehele malaise,`}</Inline></li>
        <li><Inline>{`bolle buik,`}</Inline></li>
        <li><Inline>{`hypertensie,`}</Inline></li>
        <li><Inline>{`raccoon eyes,`}</Inline></li>
        <li><Inline>{`en later afwijkende aanvullende diagnostiek`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`maakt neuroblastoom uiteindelijk het meest waarschijnlijk.`}</Inline>
      </p>
      <PBody
        text={`**Aandachtsvraag:** waarom denk je bij een buikmassa ook aan een neuroblastoom?
**Mini-antwoord:** omdat neuroblastoom vaak voorkomt bij jonge kinderen en zich kan presenteren met buikzwelling, malaise, pijn en raccoon eyes.`}
      />
    </div>
  )
}
