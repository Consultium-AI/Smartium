import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een pneumothorax is lucht in de pleuraholte, waardoor de long deels of volledig kan samenvallen. De patiënt krijgt vaak acute dyspneu en pleurale pijn. Bij onderzoek zie je soms tachypneu, tachycardie, verminderde thoraxexcursie, hyperresonantie en verminderd ademgeruis. De diagnose wordt meestal gesteld met een X-thorax, soms met echografie of CT.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er zijn verschillende oorzaken: trauma, medische ingrepen, onderliggende longziekte of een spontane pneumothorax. Primair spontaan past bij blebs en risicofactoren zoals roken en een lang, slank postuur. Secundair spontaan ontstaat bij bestaande longziekte, zoals COPD of emfyseem. Een spanningspneumothorax is een spoedsituatie door een eenrichtingsklepmechanisme met toenemende druk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van het type pneumothorax, de klachten en de stabiliteit van de patiënt. Kleine, stabiele primaire of iatrogene pneumothorax kan soms conservatief worden gevolgd. Bij meer klachten of bij secundaire, traumatische of instabiele situaties is drainage nodig. Om recidief te voorkomen kan pleurodese of chirurgie nodig zijn. Stoppen met roken en het vermijden van risicovolle activiteiten horen ook bij de adviezen.`}</Inline></p>
    </div>
  )
}
