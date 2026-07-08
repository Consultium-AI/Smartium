import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De ABCDEF-stappen`}</Inline></SubHeading>
      <SubHeading><Inline>{`A: Airway`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De luchtweg moet open zijn, open blijven en beschermd worden. Bij een zwangere is er extra aandacht voor aspiratierisico, omdat maaginhoud makkelijker in de longen kan komen.`}</Inline></p>
      <PBody text={`Als de patiënte aanspreekbaar is, is de luchtweg in principe open. Reageert zij niet, dan open je de luchtweg met **chin lift** of **jaw thrust**. Daarna beoordeel je met **look, listen & feel** of er ademhaling is.`} />
      <PBody text={`Een hulpmiddel om de luchtweg open te houden bij een niet-bewuste patiënt is een **Mayo-tube** of **Guedel-tube**. De enige manier om een bedreigde luchtweg definitief te beveiligen is **endotracheale intubatie met cuff**.`} />
      <SubHeading><Inline>{`B: Breathing`}</Inline></SubHeading>
      <PBody text={`Als de luchtweg geopend is maar de patiënte ademt niet goed, denk je aan een probleem van de ademhaling of ventilatie. Je onderscheidt een A- van een B-probleem door te proberen te beademen: gaat er lucht in, dan is het vooral een **B-probleem**; gaat er geen lucht in, dan is de luchtweg nog steeds geobstrueerd.`} />
      <p className="leading-relaxed"><Inline>{`Bij onderzoek van de B let je op inspectie, palpatie, percussie en auscultatie. Zo kun je bijvoorbeeld borstkasletsels, een pneumothorax of een hemothorax opsporen.`}</Inline></p>
      <SubHeading><Inline>{`C: Circulation`}</Inline></SubHeading>
      <PBody text={`Bij de circulatie kijk je naar pols, bloeddruk, saturatie, capillaire refill en urineproductie. Bloedverlies schat je met het principe **“blood on the floor and 4 more”**: denk aan bloedverlies op de grond, maar ook in borstkas, buik, bekken en botten.`} />
      <p className="leading-relaxed"><Inline>{`Tekenen van hypovolemie zijn onder andere tachycardie, koude klamme huid, bewustzijnsdaling, oligurie en hypotensie. Bij zwangeren is hypotensie vaak een laat teken, pas na fors bloedverlies. De foetus kan ook tekenen van nood geven, omdat hij een eindorgaan is.`}</Inline></p>
      <PBody text={`Bij hypovolemie prik je direct **twee grote infusen** en neem je bloed af voor Hb, Ht, trombocyten, stolling, kruisbloed en lever- en nierfunctie. Daarna vul je het volume aan met bijvoorbeeld NaCl, colloïden of bloedproducten.`} />
      <PBody text={`Bij een **comprimeerbare bloeding** druk je af. Bij een **niet-comprimeerbare bloeding** is opereren of emboliseren nodig.`} />
      <SubHeading><Inline>{`D: Disability`}</Inline></SubHeading>
      <PBody text={`Bij het neurologisch onderzoek denk je bijvoorbeeld aan een insult. De differentiaaldiagnose van insulten in de zwangerschap omvat onder andere **eclampsie**, **epilepsie**, **tumor**, **bloeding**, **hypoglycemie** en intoxicatie.`} />
      <PBody text={`Voor een snelle neurologische inschatting gebruik je bijvoorbeeld de **GCS** of de **AVPU-score**.`} />
      <SubHeading><Inline>{`E: Exposure`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de E let je op volledige inspectie van de patiënte en op zaken als warmteverlies en hypothermie.`}</Inline></p>
      <SubHeading><Inline>{`F: Foetus`}</Inline></SubHeading>
      <PBody text={`De foetale conditie kun je beoordelen met **mDoptone**, **CTG** of **echo**. Met de doptone luister je naar het foetale hartritme, met CTG registreer je het hartritme en de uterusactiviteit continu, en met echo kun je onder andere foetale beweging, ligging en placenta beoordelen.`} />
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat foetale nood vaak een gevolg is van maternale instabiliteit. Daarom begint de behandeling van de foetus altijd met goede resuscitatie van de moeder.`}</Inline></p>
    </div>
  )
}
