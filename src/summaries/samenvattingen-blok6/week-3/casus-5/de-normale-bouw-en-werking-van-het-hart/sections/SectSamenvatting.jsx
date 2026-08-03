import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze module behandelt de normale bouw en werking van het hart vanuit meerdere invalshoeken. Eerst kwamen de basisprincipes van hemodynamiek aan bod: drukverschil drijft flow aan, weerstand hangt sterk af van de vaatradius, en bloeddruk wordt snel geregeld via de baroreceptorreflex en langzamer via het RAAS. Daarna volgde de anatomie van het hart, de grote vaten en de coronaire circulatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vervolgens werd de hartcyclus uitgelegd: diastole, systole, hartkleppen, ECG, harttonen en de JVP. Daarna kwam de elektrische kant van het hart: pacemakercellen, myocyten, geleidingssysteem, actiepotentialen, ECG en de excitatie-contractie koppeling met calcium als centrale schakel.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In de tweede helft lag de nadruk op ventriculaire functie en de PV-loop. Daarin spelen preload, afterload, contractiliteit, slagvolume, ejectiefractie, ESPVR en EDPVR een grote rol. Tot slot werd duidelijk hoe het hart reageert op stress, zoals inspanning en zwangerschap.`}</Inline></p>
    </div>
  )
}
