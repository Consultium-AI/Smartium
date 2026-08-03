import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe herken je cyanose?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cyanose kan op verschillende manieren zichtbaar zijn. Het is belangrijk om het onderscheid te kennen tussen centrale, perifere en differentiële cyanose.`}</Inline></p>
      <SubHeading><Inline>{`Centrale cyanose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Centrale cyanose is blauwverkleuring van lippen, tong en slijmvliezen door een verlaagd arterieel zuurstofgehalte. Dit is altijd pathologisch. Je ziet het dus niet als een onschuldige variant, maar als een teken dat er iets mis is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De oorzaken van centrale cyanose zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`longaandoeningen, zoals een pneumonie;`}</Inline></li>
        <li><Inline>{`aangeboren hartafwijkingen met een rechts-links shunt;`}</Inline></li>
        <li><Inline>{`afwezigheid van ademhaling, bijvoorbeeld bij neurologische afwijkingen;`}</Inline></li>
        <li><Inline>{`methemoglobine, een vorm van hemoglobine die geen zuurstof kan binden.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij centrale cyanose zie je de blauwverkleuring niet alleen aan de huid, maar vooral ook aan de slijmvliezen in de mond. Als je 100% zuurstof geeft, stijgt de saturatie bij longparenchymafwijkingen wel, maar bij hartafwijkingen met een shunt niet tot normaal.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Langdurige centrale cyanose kan leiden tot polycythemie, dus een verhoogde hoeveelheid hemoglobine. Ook kunnen lichamelijke kenmerken ontstaan zoals horlogeglasnagels en trommelstokvingers.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom zijn lippen en tong zo belangrijk bij centrale cyanose?
**Mini-antwoord:** Omdat slijmvliezen daar goed laten zien of het arteriële bloed echt te weinig zuurstof bevat.`} />
      <SubHeading><Inline>{`Perifere cyanose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Perifere cyanose betekent blauwe vingers of tenen terwijl het zuurstofgehalte in het bloed normaal kan zijn. Dit ontstaat meestal door vasoconstrictie of verminderde doorbloeding. Kou is een bekende oorzaak, maar ook shock of hartfalen kunnen dit geven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Perifere cyanose kan dus onschuldig zijn, bijvoorbeeld bij koude, maar het kan ook wijzen op een ernstige circulatieproblemen.`}</Inline></p>
      <DataTable rows={[["Tabel 2. Verschil tussen centrale en perifere cyanose"], ["Centrale cyanose", "Blauwe lippen, tong en slijmvliezen; altijd pathologisch; door laag arterieel zuurstofgehalte"], ["Perifere cyanose", "Blauwe vingers of tenen; vaak door verminderde doorbloeding of vasoconstrictie; zuurstofgehalte kan normaal zijn"]]} />
      <SubHeading><Inline>{`Differentiële cyanose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Differentiële cyanose is blauwverkleuring van de onderste lichaamshelft, terwijl het bovenlichaam roze blijft. Dit is typisch bij een persisterende ductus arteriosus met een rechts-links shunt na de aftakking van de arteria subclavia. Het kan bijvoorbeeld ontstaan bij persisterende pulmonale hypertensie van de pasgeborene.`}</Inline></p>
    </div>
  )
}
