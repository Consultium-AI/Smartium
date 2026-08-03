import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Overzicht van het ademhalingsapparaat`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het ademhalingsapparaat bestaat uit twee grote delen: een geleidend deel en een respiratoir deel. Het geleidend deel zorgt ervoor dat lucht op weg naar de longen wordt verwarmd, gefilterd en bevochtigd. Pas verder in de longen, in het respiratoire deel, vindt de gasuitwisseling plaats.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De luchtweg loopt van boven naar beneden via de neusholte, pharynx, larynx, trachea en bronchiën. De neusholte en pharynx behoren tot de bovenste luchtwegen. De larynx, trachea en bronchiën behoren tot de onderste luchtwegen. De overgang tussen deze gebieden wordt klinisch belangrijk gevonden, vooral bij slikken, ademhaling en luchtwegproblemen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waar kunnen onderweg naar de longen twee belangrijke “barrières” zitten?
**Mini-antwoord:** Bij de epiglottis en bij de glottis met de stembanden en stemspleet.`} />
      <p className="leading-relaxed"><Inline>{`De epiglottis sluit tijdens het slikken de luchtweg af tussen pharynx en larynx. De glottis is het deel van de larynx waar de stemspleet ligt. De opening daarvan verandert afhankelijk van de ademhaling: bij forse ademhaling staat deze maximaal open, bij minder diepe ademhaling half open en bij lichte ademhaling bijna dicht. De glottis is dus een belangrijk regelpunt voor luchtpassage, stemvorming, hoestreflex en afsluiting bij slikken.`}</Inline></p>
    </div>
  )
}
