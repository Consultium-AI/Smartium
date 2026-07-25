import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek van Crohn`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnostiek bestaat uit meerdere stappen: klinisch beeld, laboratoriumonderzoek, radiologie en endoscopie.`}</Inline></p>
      <SubHeading><Inline>{`Laboratoriumonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op Crohn vraag je onder andere bloedonderzoek, feceskweek en fecaal calprotectine aan. In de casus werden ook CRP en Hb genoemd als zinvolle onderzoeken.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**CRP** zegt iets over actieve ontsteking.`}</Inline></li>
        <li><Inline>{`**Hb** kan laag zijn bij bloedverlies of bij een tekort aan vitamine B, vooral als het terminale ileum betrokken is.`}</Inline></li>
        <li><Inline>{`**Feceskweek** helpt om een infectieuze oorzaak van diarree uit te sluiten.`}</Inline></li>
        <li><Inline>{`**Fecaal calprotectine** is een marker voor ontsteking in de darm.`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** Wat zegt fecaal calprotectine eigenlijk?
**Mini-antwoord:** Het wijst op ontsteking in de darm en helpt onderscheid maken tussen inflammatoire en niet-inflammatoire klachten.`} />
      <SubHeading><Inline>{`Fecaal calprotectine`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Calprotectine is een eiwit dat vooral afkomstig is uit neutrofielen. Als er ontsteking in de darm is, stijgt de hoeveelheid calprotectine in de ontlasting. Een normale waarde maakt IBD, zoals Crohn, onwaarschijnlijk. Een verhoogde waarde betekent dat verder onderzoek nodig is, meestal met endoscopie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Fecaal calprotectine is vooral nuttig om Crohn of colitis ulcerosa te onderscheiden van prikkelbaar darmsyndroom. Het kan veel onnodige coloscopieën voorkomen. Wel moet je weten dat het ook verhoogd kan zijn bij andere vormen van ontsteking, zoals infecties, maligniteiten, chronisch NSAID-gebruik en diverticulaire aandoeningen.`}</Inline></p>
      <SubHeading><Inline>{`Radiologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Afhankelijk van de klachten kan beeldvorming nodig zijn, bijvoorbeeld een echo of MRI van de dunne darm. Bij perianale fistels is MRI van het rectum belangrijk om te bepalen of een fistel simpel of complex is.`}</Inline></p>
      <SubHeading><Inline>{`Endoscopie`}</Inline></SubHeading>
      <PBody text={`De gouden standaard voor de diagnose van inflammatoire darmziekten is nog steeds de **ileocoloscopie met biopten**. Bij verdenking op Crohn, zeker bij klachten passend bij ileocaecale betrokkenheid, is dit het aangewezen onderzoek. Als er klachten zijn die wijzen op afwijkingen in de bovenste tractus digestivus, kan ook een gastroscopie nodig zijn.`} />
    </div>
  )
}
