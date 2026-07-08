import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Trombose in het kraambed`}</Inline></SubHeading>
      <SubHeading><Inline>{`Waarom is trombose belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In het kraambed is trombose een belangrijke complicatie. De kans hierop is verhoogd door de fysiologische veranderingen na de bevalling en door bijkomende risicofactoren. Vooral bij een patiënte met moeizaam mobiliseren en een dikker been moet je hieraan denken.`}</Inline></p>
      <SubHeading><Inline>{`Risicofactoren en predispositie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de beschreven patiënte zijn meerdere risicofactoren aanwezig: zij is kraamvrouw, rookt, heeft herhaalde miskramen en een belaste familie-anamnese. Ook obesitas speelt een rol.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast zijn er algemene aandachtspunten in het kraambed: activatie van stollingsfactoren door het wondbed van de placenta of door wonden van perineum of onderbuik, een stijging van het hematocriet, immobilisatie, vooral na sectio caesarea, en mogelijke stollingsstoornissen zoals proteïne C- of S-deficiëntie of het antifosfolipidensyndroom.`}</Inline></p>
      <SubHeading><Inline>{`Klinische verdenking op diepe veneuze trombose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een kraamvrouw met moeizaam mobiliseren en een gezwollen been, vooral als links meer gezwollen is dan rechts, denk je aan diepe veneuze trombose. De differentiaaldiagnose bevat ook fysiologisch oedeem, spierpijn na de partus, adipositas, infectie en hematoom.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek let je op roodheid, warmte, pijn, zwelling en glanzen van de huid. De benen moeten worden opgemeten. De Homan-test kan pijn uitlokken bij dorsaalflexie van de voet met gestrekt been. Daarnaast onderzoek je hart en longen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Aanvullend onderzoek bestaat uit een echo-Doppler van de benen. D-dimeren kunnen ook worden bepaald, maar zijn bij een kraamvrouw minder betrouwbaar.`}</Inline></p>
      <SubHeading><Inline>{`Behandeling en advies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking of bevestiging van trombose start je voorlopige behandeling met trombosekousen en 6 weken therapeutische antistolling, bijvoorbeeld met Fraxiparine en vervolgens instelling op acenocoumarol. Daarbij hoort ook het advies om te stoppen met roken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor aanvullende diagnostiek wordt ongeveer 3 maanden postpartum uitgebreid stollingsonderzoek verricht.`}</Inline></p>
      <SubHeading><Inline>{`Gevolgen voor een volgende zwangerschap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een volgende zwangerschap zijn 2e-lijns prenatale controles nodig. Afhankelijk van de uitslag van het stollingsonderzoek kan antistolling tijdens de zwangerschap nodig zijn. Postpartum krijgt de patiënte opnieuw 6 weken antistolling en preventief trombosekousen. Er wordt rekening gehouden met het feit dat sintrom niet gebruikt wordt in het eerste en laatste trimester.`}</Inline></p>
    </div>
  )
}
