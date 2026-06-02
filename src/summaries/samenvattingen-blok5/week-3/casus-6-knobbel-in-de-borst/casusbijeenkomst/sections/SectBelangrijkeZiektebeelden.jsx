import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Belangrijke ziektebeelden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`1. Veneuze insufficiëntie en varices`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een man van 65 jaar met een zwaar, vermoeid been en zichtbare varices past goed bij **oppervlakkige veneuze insufficiëntie**. Het beeld past vooral als er sprake is van:`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`een **staand beroep**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`klachten die al **lang bestaan**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`zichtbare **varices**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`oedeem of een zwaar gevoel in het been`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij veneuze insufficiëntie werkt de **voet- en kuitspierpomp** onvoldoende. Daardoor stijgt de veneuze druk in het been. Dit heet **veneuze hypertensie**. Die verhoogde druk kan leiden tot:`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`oedeem`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`lipodermatosclerose`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`ulcus cruris`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`recidiverende wondjes rond de enkels`}</Inline></p>
      <PBody text={`**Tabel 2. Veneuze insufficiëntie versus andere oorzaken**`} />
      <DataTable rows={[["Kenmerk", "Veneuze insufficiëntie", "Trombose", "Hartfalen"], ["---", "---", "---", "---"], ["Duur", "vaak chronisch", "vaak acuut/subacuut", "vaak subacuut"], ["Lateralisatie", "vaak bilateraal of chronisch lokaal", "vaak unilateraal", "vaak bilateraal"], ["Pijn", "zwaar, moe, soms pijnlijk", "pijnlijk, gespannen", "meestal minder lokaal pijnlijk"], ["Roodheid", "meestal niet prominent", "kan soms aanwezig zijn", "niet typisch"], ["Aanvullend", "varices, huidveranderingen", "echo/D-dimeer", "ECG, NT-proBNP, echo"]]} />
    </div>
  )
}
