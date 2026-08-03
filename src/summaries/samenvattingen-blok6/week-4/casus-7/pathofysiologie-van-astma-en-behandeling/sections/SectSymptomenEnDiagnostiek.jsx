import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Symptomen en diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Astma kenmerkt zich door typische klachten, maar niet iedere patiënt heeft alle klachten tegelijk. De belangrijkste symptomen zijn piepende ademhaling, hoesten, kortademigheid en een strak gevoel op de borst. Klachten treden vaak wisselend op, zijn vaak erger in de nacht of vroege ochtend en kunnen worden uitgelokt door kou, inspanning, virale infecties of allergenen. Klachten die verdwijnen bij het vermijden van een trigger of na gebruik van astmamedicatie passen goed bij astma.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bepaalde kenmerken maken astma waarschijnlijker, zoals atopie, een belaste familieanamnese en variabele klachten. Andere kenmerken passen minder goed bij astma, zoals geen variabiliteit van de klachten, geen effect van astmamedicatie, gewichtsverlies, bloed ophoesten of geïsoleerd hoesten.`}</Inline></p>
      <SubHeading><Inline>{`Diagnostiek met longfunctieonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose astma mag worden gesteld als de anamnese passend is en longfunctieonderzoek een variabele luchtwegobstructie laat zien. De expiratoire luchtwegobstructie varieert bij astma meer over de tijd en in omvang dan bij gezonde personen. Slecht gecontroleerd astma geeft meestal meer variabiliteit dan goed gecontroleerd astma.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Spirometrie is de meest betrouwbare manier om longfunctie te meten. Belangrijke parameters zijn FEV1 en de verhouding FEV1/FVC. Reversibiliteit na toediening van een luchtwegverwijder ondersteunt de diagnose: een toename van FEV1 of FVC met ten minste 12% én 200 mL, gemeten 10-15 minuten na salbutamol, past bij astma.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als spirometrie niet goed uitvoerbaar is, zijn er alternatieven:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`piekstroommeting, waarbij een dagelijkse variabiliteit van meer dan 10% past bij astma;`}</Inline></li>
        <li><Inline>{`verbetering van de longfunctie na 4 weken behandeling met een inhalatiecorticosteroïd;`}</Inline></li>
        <li><Inline>{`excessieve variabiliteit tussen verschillende metingen of doktersbezoeken.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een bronchiale hyperreactiviteitstest kan ook helpen. Daarbij inhaleert de patiënt oplopende concentraties metacholine of histamine. Een afname van FEV1 met 20% of meer past bij astma.`}</Inline></p>
      <SubHeading><Inline>{`Allergieonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op allergisch astma kan aanvullend onderzoek worden gedaan met een huidpriktest of bepaling van specifiek IgE in het serum. Een positieve test alleen betekent nog niet dat er sprake is van een allergie; daarvoor moeten ook passende klachten aanwezig zijn. Zonder klachten spreek je van sensibilisatie.`}</Inline></p>
      <SubHeading><Inline>{`Werkgerelateerd astma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de anamnese moet ook altijd naar de werksituatie worden gevraagd. Werkgerelateerd astma, ook wel beroepsastma, is astma dat wordt veroorzaakt of verergerd door beroepsmatige blootstelling. Na het herkennen van klachten of sensibilisatie is aanvullende diagnostiek aangewezen. De patiënt moet mondeling en schriftelijk worden geïnformeerd over mogelijke oorzaken, behandeling en de gevolgen voor werk en inkomen. De bedrijfsarts speelt hierbij een belangrijke rol en moet altijd worden betrokken voor beleid rond verzuim, arbeidsongeschiktheid en re-integratie.`}</Inline></p>
    </div>
  )
}
