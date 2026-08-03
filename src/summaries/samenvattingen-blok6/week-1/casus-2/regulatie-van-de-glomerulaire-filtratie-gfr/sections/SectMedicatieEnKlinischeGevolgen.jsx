import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Medicatie en klinische gevolgen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De regulatie van de renale perfusie is klinisch belangrijk, vooral bij het gebruik van RAAS-remmers. Deze middelen kunnen de nierdoorbloeding verstoren. Daardoor kan het gemakkelijker tot een acute nierinsufficiëntie komen, vooral als iemand al hypotensief is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook het combineren van NSAID’s met RAAS-remmers is geen goed idee, zeker niet bij een patiënt met lage bloeddruk of verminderde perfusie. De nier heeft namelijk een nauwkeurig afgestemd systeem nodig om de GFR op peil te houden, en verstoring van dat systeem kan snel gevolgen hebben.`}</Inline></p>
    </div>
  )
}
