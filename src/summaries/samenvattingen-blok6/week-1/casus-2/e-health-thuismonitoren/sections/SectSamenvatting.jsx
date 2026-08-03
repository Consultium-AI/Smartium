import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zorg op afstand is een vorm van digitale zorg die steeds belangrijker wordt door de groeiende zorgvraag en het personeelstekort. Het kan nodig zijn wanneer fysiek contact moeilijk is, maar het biedt ook voordelen voor patiënt en arts. De patiënt krijgt meer regie, minder reistijd en minder kosten. De arts kan consulten beter voorbereiden, acute situaties beter inschatten en onnodige afspraken voorkomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor thuismeten zijn meetapparatuur en een digitaal platform nodig. Bij niertransplantatiepatiënten gaat het onder andere om bloeddruk, gewicht, temperatuur en zuurstofmeting. De app of het platform is slechts het middel; het zorgprogramma zelf moet goed worden ingericht met duidelijke afspraken over metingen, grenzen en alarmen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Implementatie vraagt om een concreet plan, samenwerking, geld, juridische afstemming en een stapsgewijze aanpak. Succesfactoren zijn klein beginnen, goed organiseren, verpleegkundigen vroeg betrekken en processen later professionaliseren. De verdere ontwikkeling van zorg op afstand ligt in uitgebreidere thuismetingen, thuisbloedafname, telemonitoring en uiteindelijk een data monitoring centrum dat de zorg efficiënter maakt zonder de inhoudelijke kwaliteit te verliezen.`}</Inline></p>
    </div>
  )
}
