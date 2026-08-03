import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`EPO-productie in de nier`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Erytropoëtine, meestal afgekort als EPO, is een hormoon dat vooral in de nier wordt gemaakt. De belangrijkste taak van EPO is het stimuleren van de erytropoëse: de aanmaak van rode bloedcellen in het beenmerg.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De cellen die EPO maken zijn de zogenoemde REPOS-cellen: renal erythropoietin producing oxygen sensing cells. Deze cellen functioneren als zuurstofsensoren. Als zij merken dat er te weinig zuurstof beschikbaar is, maken zij EPO aan. Dat EPO gaat via het bloed naar het beenmerg en zet daar de productie van erytrocyten aan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Wat is daar het gevolg van? Meer rode bloedcellen betekent dat er meer zuurstof kan worden vervoerd van de longen naar de weefsels, waaronder ook de nier zelf. Zo ontstaat een terugkoppellus: de nier meet zuurstoftekort, maakt EPO, het beenmerg maakt meer erytrocyten, en daardoor verbetert het zuurstoftransport weer.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom zit die zuurstofsensor juist in de nier en niet bijvoorbeeld in een spier?
**Mini-antwoord:** Omdat de nier een relatief constante en lage zuurstofspanning heeft, waardoor hij goed kan meten of er echt sprake is van zuurstoftekort.`} />
      <p className="leading-relaxed"><Inline>{`De nier staat hierbij niet alleen. Voor de aanmaak van rode bloedcellen zijn ook bouwstoffen nodig, zoals ijzer, vitamine B12 en foliumzuur. Die moeten via de darm worden opgenomen en via het bloed bij het beenmerg terechtkomen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Organen en hun rol bij EPO en erytropoëse`}</Inline></SubHeading>
      <DataTable rows={[["Orgaan", "Rol"], ["Nier", "Maakt EPO bij zuurstoftekort"], ["Beenmerg", "Maakt rode bloedcellen onder invloed van EPO"], ["Longen", "Zorgen voor zuurstofopname"], ["Darmen", "Leveren bouwstoffen zoals ijzer, vitamine B12 en foliumzuur"], ["Hart", "Pompt het bloed rond en beïnvloedt zo de zuurstofvoorziening"]]} />
      <p className="leading-relaxed"><Inline>{`Klinisch is dit belangrijk bij chronische nierschade. Dan kunnen patiënten anemie ontwikkelen door minder EPO-productie, door EPO-resistentie in het beenmerg en door minder ijzeropname vanuit de darm bij inflammatie. Die anemie en/of het ijzertekort draagt ook bij aan het hogere risico op hart- en vaatziekten bij chronische nierschade.`}</Inline></p>
    </div>
  )
}
