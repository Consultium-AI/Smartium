import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Roken, bewegen en gewicht`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Roken moet altijd actief besproken worden. Roken versnelt de achteruitgang van de longfunctie, verkort de levensduur, verergert astma en vermindert de werkzaamheid van inhalatiecorticosteroïden. Ook meeroken en vapen moeten worden afgeraden. Een combinatie van gedragsmatige begeleiding en medicamenteuze ondersteuning is het meest effectief bij stoppen met roken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Regelmatig bewegen wordt geadviseerd, bij voorkeur dagelijks minstens een half uur matig intensieve activiteit zoals wandelen, fietsen of zwemmen. Bij inspanningsastma kan vooraf inhalatiemedicatie worden gebruikt, samen met een goede warming-up. Als iemand door benauwdheid te weinig beweegt, kan verwijzing naar een gespecialiseerde fysiotherapeut zinvol zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Overgewicht heeft een negatieve invloed op astma en astmagerelateerde klachten. De incidentie van astma is 50% hoger bij mensen met overgewicht. Er wordt zelfs een apart fenotype beschreven: obesity related asthma. Gewichtsreductie en ondersteuning door bijvoorbeeld een diëtist of fysiotherapeut kunnen daarom belangrijk zijn.`}</Inline></p>
    </div>
  )
}
