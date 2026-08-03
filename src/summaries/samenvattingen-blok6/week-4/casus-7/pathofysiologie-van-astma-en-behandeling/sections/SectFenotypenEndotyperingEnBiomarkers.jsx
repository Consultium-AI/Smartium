import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fenotypen, endotypering en biomarkers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om het ontstaan en beloop van astma beter te begrijpen, worden verschillende subgroepen onderscheiden. Daarbij zijn drie begrippen belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Fenotype**: een groep met gemeenschappelijke klinische kenmerken, ontstaan door interactie tussen genotype en omgeving.`}</Inline></li>
        <li><Inline>{`**Endotype**: het biologische mechanisme dat tot een observeerbare eigenschap leidt.`}</Inline></li>
        <li><Inline>{`**Biomarker**: een signaalstof of cel die een afspiegeling is van een onderliggend ziekteproces.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Astma kan dus op verschillende manieren worden onderverdeeld. Een veelgebruikte indeling is die in Type 2-hoog en Type 2-laag astma.`}</Inline></p>
      <SubHeading><Inline>{`Type 2-hoog en Type 2-laag astma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Type 2-hoog astma is het meest voorkomend en omvat onder andere allergisch astma en eosinofiel astma. Het ontstaat vaak op jongere leeftijd, maar kan ook later beginnen. Type 2-laag astma wordt juist vooral gekenmerkt door het ontbreken van type-2-kenmerken, zoals bloed- en sputumeosinofilie en verhoogd FeNO.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Type 2-immuniteit wordt vooral gereguleerd door Th2-cellen. Deze produceren cytokinen zoals IL-4, IL-5 en IL-13. Deze cytokinen spelen een belangrijke rol in de ontstekingsreactie en vormen later ook aangrijpingspunten voor de behandeling van ernstig astma.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Type 2-inflammatie is geassocieerd met atopische aandoeningen zoals allergieën en astma. De respons wordt onder andere gemedieerd door eosinofielen, mestcellen, basofielen, Th2-cellen, ILC2-cellen en IgE-producerende B-cellen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Type 2-laag astma wordt meer gedefinieerd door de afwezigheid van deze type-2-kenmerken dan door de aanwezigheid van een heel ander immunologisch patroon. Daarbij kunnen micro-organismen of luchtverontreiniging het luchtwegepitheel en alveolaire macrofagen stimuleren, waarna pro-inflammatoire cytokinen zoals IL-1β en IL-6 worden geproduceerd. Dit activeert Th1- en Th17-cellen, die neutrofielen aantrekken en activeren. Geactiveerde neutrofielen dragen vervolgens bij aan epitheelbeschadiging en mucusproductie.`}</Inline></p>
      <SubHeading><Inline>{`Verloop van type 2-allergisch astma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij allergenen kunnen bij daarvoor gevoelige personen de epitheelcellen in de luchtwegen worden geactiveerd. Deze produceren cytokinen zoals IL-25, IL-33 en TSLP. Daardoor worden dendritische cellen geactiveerd, die naar de lymfeklier migreren en antigenen presenteren aan naïeve T-cellen. Onder invloed van IL-4 differentiëren deze vervolgens naar Th2-cellen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarna stimuleert IL-4 ook B-cellen tot productie van IgE. In de long zijn niet alleen Th2-cellen actief, maar ook ILC2’s en CD8+ T-cellen die type-2-cytokinen produceren. Deze cytokinen activeren vervolgens B-cellen, macrofagen, mestcellen en eosinofielen. Het resultaat is type-2-inflammatie met typische astmasymptomen zoals bronchoconstrictie, airway hyperresponsiveness, mucus hyperproduction en tissue remodeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De aanwezigheid van type-2-inflammatie kun je in de praktijk herkennen aan biomarkers zoals FeNO in de uitademingslucht en eosinofielen in serum en/of sputum.`}</Inline></p>
      <PBody text={`> Aandachtsvraag: wat is FeNO?
>
> Kort antwoord: FeNO is stikstofmonoxide in de uitgeademde lucht en is een biomarker voor type-2-inflammatie.`} />
    </div>
  )
}
