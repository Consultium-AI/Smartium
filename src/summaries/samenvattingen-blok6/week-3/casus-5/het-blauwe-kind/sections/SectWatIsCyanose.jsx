import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is cyanose?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cyanose betekent letterlijk blauwverkleuring. Medisch gezien gaat het om een zichtbaar blauwige kleur van huid en slijmvliezen doordat er te veel gedeoxygeneerd hemoglobine in het bloed aanwezig is. Hemoglobine is het transporteiwit dat zuurstof in het bloed meeneemt. Dat is nodig, omdat zuurstof die vrij opgelost in het bloed zit, veel te weinig is om aan de behoefte van de weefsels te voldoen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hemoglobine bestaat uit vier onderdelen en kan vier zuurstofmoleculen tegelijk binden. Normaal gesproken is een groot deel van het hemoglobine in de longen verzadigd met zuurstof, terwijl in de weefsels juist zuurstof wordt afgegeven. Dat verschil hangt vooral samen met de zuurstofspanning in het bloed: hoog in de longen, laag in de weefsels.`}</Inline></p>
      <SubHeading><Inline>{`Zuurstofbinding en afgifte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De binding van zuurstof aan hemoglobine wordt weergegeven in de zuurstofdissociatiecurve. Deze curve laat zien hoe de zuurstofsaturatie samenhangt met de zuurstofspanning. In de longen, waar de zuurstofspanning hoog is, neemt hemoglobine zuurstof op. In de weefsels, waar de zuurstofspanning lager is, laat hemoglobine zuurstof weer los.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Soms verschuift de curve naar rechts. Dan is bij dezelfde zuurstofspanning minder zuurstof aan hemoglobine gebonden. Daardoor wordt zuurstof juist makkelijker afgegeven aan de weefsels. Dit kan bijvoorbeeld gebeuren bij koorts, acidose, een verhoogde CO2-spanning of meer 2,3-DPG.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom is die zuurstofdissociatiecurve belangrijk?
**Mini-antwoord:** Omdat je ermee begrijpt wanneer hemoglobine zuurstof vasthoudt en wanneer het zuurstof afgeeft.`} />
      <SubHeading><Inline>{`Saturatie meten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De zuurstofverzadiging kan je aan de buitenkant meten met een pulsoximeter, meestal aan de vinger. Zo’n meter gebruikt licht: geoxygeneerd en gedeoxygeneerd hemoglobine weerkaatsen licht anders. Omdat arterieel bloed pulseert, kan het apparaat niet alleen de saturatie, maar ook de hartslag bepalen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is wel dat de betrouwbaarheid van de saturatiemeter sterk afneemt bij lage saturaties, vooral onder de 70%.`}</Inline></p>
    </div>
  )
}
