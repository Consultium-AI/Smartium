import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Opbouw van het autonome zenuwstelsel`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het autonome zenuwstelsel werkt meestal met twee neuronen achter elkaar. Eerst loopt er een preganglionaire vezel vanuit het centrale zenuwstelsel naar een ganglion. Daarna loopt een postganglionaire vezel van het ganglion naar het doelorgaan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een ganglion is dus een schakelstation. In zowel het sympathische als het parasympathische systeem speelt acetylcholine in het ganglion een rol, en daar bindt het aan nicotine-receptoren. Deze nicotine-receptoren zorgen voor activatie van het postsynaptische neuron.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij het parasympathische systeem liggen de ganglia dicht bij het eindorgaan. Bij het sympathische systeem liggen de ganglia juist paravertebraal, dus dicht bij het ruggenmerg.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is die ligging van de ganglia belangrijk?
**Mini-antwoord:** Omdat het parasympathische systeem daardoor vooral lokaal en gericht werkt, terwijl het sympathische systeem sneller een bredere lichaamsreactie kan geven.`} />
    </div>
  )
}
