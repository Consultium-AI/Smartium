import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wearables: van meten naar interventie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wearables zijn apparaten of toepassingen die je gezondheid of lichaamsfuncties continu of regelmatig kunnen volgen. Denk aan stappen tellen, hartslag meten en slaap registreren. Dat soort metingen is voor veel mensen aantrekkelijk, omdat ze graag inzicht willen in hun eigen gezondheid en gedrag. Daardoor is er een grote commerciële markt ontstaan voor wearables.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk punt is dat wearables niet meer alleen bedoeld zijn om data te verzamelen. De ontwikkeling gaat steeds meer richting het aanbieden van interventies. Met andere woorden: niet alleen meten wat er gebeurt, maar ook iets doen op basis van die meting. Dat maakt wearables interessant voor de gezondheidszorg, maar ook meteen iets om kritisch naar te kijken.`}</Inline></p>
      <SubHeading><Inline>{`Wat is de toegevoegde waarde?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste toegevoegde waarde van wearables ligt in het continu monitoren van processen. Daardoor kun je afwijkingen vroeg detecteren en mogelijk ingrijpen voordat een ziekte zich volledig ontwikkelt. In de toekomst zullen wearables daarom waarschijnlijk steeds vaker worden ingezet voor interventies.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** Waarom is alleen meten niet genoeg?
**Mini-antwoord:** Omdat de echte waarde pas ontstaat als je op basis van de meting ook iets kunt doen, bijvoorbeeld een afwijking vroeg herkennen en daarop reageren.`} />
    </div>
  )
}
