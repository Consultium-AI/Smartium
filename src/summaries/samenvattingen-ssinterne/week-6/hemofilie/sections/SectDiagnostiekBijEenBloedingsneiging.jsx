import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek bij een bloedingsneiging`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met klachten die passen bij een bloedingsneiging wil je drie dingen weten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Zijn de klachten er al sinds de geboorte, of zijn ze later ontstaan?`}</Inline></li>
        <li><Inline>{`Gebruikt de patiënt medicatie die de stolling beïnvloedt?`}</Inline></li>
        <li><Inline>{`Is er familieanamnese voor bloedingsziekten?`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat onderscheid is belangrijk, omdat een aangeboren bloedingsneiging anders is dan een verworven bloedingsneiging.`}</Inline></p>
      <SubHeading><Inline>{`Medicatie als oorzaak van bloedingsneiging`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sommige geneesmiddelen geven bloedingsneiging doordat ze de hemostase beïnvloeden. Daarbij is het handig om te weten of ze vooral de primaire of de secundaire hemostase beïnvloeden.`}</Inline></p>
      <PBody text={`**Tabel 2. Geneesmiddelen die bloedingsneiging kunnen geven**`} />
      <DataTable rows={[["Geneesmiddel", "Groep", "Invloed op"], ["Nadroparine", "Laagmoleculairgewichtheparine", "Secundaire hemostase"], ["Acenocoumarol", "Vitamine K-antagonist", "Secundaire hemostase"], ["Apixaban", "Direct oraal anticoagulans", "Secundaire hemostase"], ["Aspirine / acetylsalicylzuur", "Trombocytenaggregatieremmer", "Primaire hemostase"], ["Ibuprofen", "NSAID", "Primaire hemostase"]]} />
      <p className="leading-relaxed"><Inline>{`Nadroparine, acenocoumarol en apixaban werken dus vooral via de stollingsfactoren en verstoren de secundaire hemostase. Aspirine en ibuprofen beïnvloeden juist de trombocytenfunctie en daarmee de primaire hemostase.`}</Inline></p>
      <SubHeading><Inline>{`Erfelijke bloedingsziekten in de familie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De twee bekende erfelijke bloedingsziekten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hemofilie;`}</Inline></li>
        <li><Inline>{`de ziekte van Von Willebrand.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij laboratoriumonderzoek wil je de stolling verder beoordelen met testen die de stollingsfunctie meten. Bij hemofilie zijn vooral de aPTT, factor VIII, factor IX en vaak ook de Von Willebrand-factor van belang.`}</Inline></p>
    </div>
  )
}
