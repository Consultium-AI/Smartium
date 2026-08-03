import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Indeling van beroepsgebonden ILD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Beroepsgebonden ILD’s kunnen worden ingedeeld naar het soort blootstelling of naar de specifieke aandoening die ontstaat. Een aantal belangrijke vormen komt steeds terug.`}</Inline></p>
      <SubHeading><Inline>{`Pneumoconiosen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Pneumoconiosen is een verzamelnaam voor ILD’s die ontstaan door inademing van bepaalde stofdeeltjes. Bekende voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Asbestose**: door blootstelling aan asbestvezels. Asbest werd gebruikt in de bouw en ook in remmen van auto’s.`}</Inline></li>
        <li><Inline>{`**Silicose**: door inademing van silicadust, bijvoorbeeld in de bouw.`}</Inline></li>
        <li><Inline>{`**Coal worker’s pneumoconiosis**: ook wel black lung disease, door inademing van steenkoolstof.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij deze aandoeningen is de aard van de stof belangrijk, maar ook de intensiteit en duur van de blootstelling.`}</Inline></p>
      <SubHeading><Inline>{`Asbestose en pleurale plaques`}</Inline></SubHeading>
      <PBody text={`Bij asbestblootstelling kunnen ook **pleurale plaques** ontstaan. Dat zijn verdikkingen van het borstvlies. Die ondersteunen de diagnose asbestgerelateerde ziekte, maar pleurale plaques zelf zijn niet hetzelfde als asbestose. Asbestose verwijst naar de interstitiële longaandoening in het longweefsel.`} />
      <p className="leading-relaxed"><Inline>{`Asbestose kan op beeldvorming lijken op andere fibrotische longziekten, zoals UIP bij IPF. Toch zijn er typische kenmerken die helpen bij de herkenning, zoals betrokkenheid van de bronchiolen en minder vaak honingraatvorming.`}</Inline></p>
      <SubHeading><Inline>{`Silicose en kunststeen`}</Inline></SubHeading>
      <PBody text={`Silicose komt klassiek voor bij blootstelling aan silica, bijvoorbeeld in de bouw of mijnbouw. Een belangrijk modern voorbeeld is de productie en bewerking van **kunststeen**. Kunststeen bestaat voor meer dan 90% uit kwarts, samen met polymeren en pigmenten. Vooral het zagen en bewerken ervan geeft veel inadembare kristallijne silica.`} />
      <p className="leading-relaxed"><Inline>{`Deze vorm van silicose ontstaat vaak bij jongere werknemers en na een kortere latentietijd dan bij traditionele silica-expositie. Goede ventilatie en nat zagen met een zaagblad zijn belangrijke maatregelen om stofvorming te verminderen.`}</Inline></p>
      <SubHeading><Inline>{`Chronische berylliumziekte`}</Inline></SubHeading>
      <PBody text={`Beryllium wordt gebruikt in onder andere de luchtvaart, keramiek, elektronica en defensie-industrie. Blootstelling kan leiden tot **chronic beryllium disease**. Niet iedereen die wordt blootgesteld krijgt de ziekte, maar bij blootgestelde werknemers komt het voor bij ongeveer 2 tot 16%.`} />
      <p className="leading-relaxed"><Inline>{`Er is een duidelijke genetische gevoeligheid, die sterk samenhangt met HLA-DPB1-allelen.`}</Inline></p>
      <SubHeading><Inline>{`Cobalt-geïnduceerde hard metal disease`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook andere metalen, zoals cobalt, aluminium, titanium en zirconium, kunnen granulomateuze longziekte veroorzaken. Dit wordt vaak aangeduid als hard metal disease. Ook hier speelt genetische gevoeligheid een rol, met associatie aan HLA-DP-allelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De latentietijd kan variëren van maanden tot jaren. Klachten zijn vaak hoest en dyspneu.`}</Inline></p>
      <SubHeading><Inline>{`Hypersensitivity pneumonitis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Beroepsmatige hypersensitivity pneumonitis, ook wel HP, is verantwoordelijk voor ongeveer een vijfde van alle HP-gevallen. Het gaat hierbij om een afweerreactie van de longen op ingeademde antigenen, vaak op de werkplek. De module verwijst voor verdere verdieping naar de aparte stof over HP.`}</Inline></p>
      <SubHeading><Inline>{`Sarcoïdose en beroepsmatige blootstelling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sarcoïdose is een systemische aandoening met granulomateuze ontsteking in verschillende organen. De precieze ontstaanswijze is niet volledig bekend, maar waarschijnlijk speelt een combinatie van een uitlokkende stof en genetische aanleg een rol.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Beroepsmatige blootstelling lijkt een bijdrage te leveren aan een deel van de sarcoïdosegevallen. Er zijn associaties beschreven met landbouw, insecticiden, schimmel- of vochtige omgevingen, en werk in de bouwmaterialen-, hardware- en tuinsector. Ook brandweerlieden die blootgesteld waren aan stof van het World Trade Center liepen een verhoogd risico.`}</Inline></p>
      <SubHeading><Inline>{`IPF en andere fibrotische ILD’s`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook bij idiopathische longfibrose, IPF, en andere idiopathische interstitiële pneumonieën zoals NSIP kunnen beroepsmatige blootstellingen een rol spelen. Hoewel deze aandoeningen per definitie idiopathisch heten, ondersteunen bekende mechanismen van longschade de gedachte dat ingeademde stoffen kunnen bijdragen aan het ontstaan of verergeren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een acute, heftige blootstelling is een oorzakelijk verband vaak makkelijker te leggen. Bij langdurige lage blootstelling of meerdere gelijktijdige blootstellingen is dat veel moeilijker. Daarom blijft een uitgebreide blootstellingsanamnese essentieel.`}</Inline></p>
    </div>
  )
}
