import { Inline, PBody } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Smeren is daarom essentieel:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vette zalven herstellen de barrière`}</Inline></li>
        <li><Inline>{`hormoonzalven remmen ontsteking`}</Inline></li>
        <li><Inline>{`minder ontsteking betekent minder jeuk, roodheid en zwelling`}</Inline></li>
        <li><Inline>{`een herstelde barrière vermindert infecties en allergenenpenetratie`}</Inline></li>
      </ul>
      <PBody
        text={`**Aandachtsvraag:** Waarom is smeren bij eczeem zo belangrijk?
**Kort antwoord:** Omdat je daarmee zowel de huidbarrière herstelt als de ontsteking remt.`}
      />
    </div>
  )
}
