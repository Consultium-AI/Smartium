import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Opbouw van de nier`}</Inline></SubHeading>
      <PBody text={`De nier bestaat uit verschillende functionele compartimenten. De belangrijkste zijn de **cortex renalis**, **medulla renalis** en **pelvis renalis**. De cortex ligt meer aan de buitenkant, de medulla meer dieper in de nier, en de pelvis renalis vormt het verzamelgebied waar urine verder wordt afgevoerd.`} />
      <PBody text={`Binnen de nier liggen ook de **pyramidis renalis**, **column renalis**, **calix renalis minor** en **calix renalis major**. De pyramidis renalis hoort bij de medulla. Tussen de piramiden liggen de column renalis. De urine wordt uiteindelijk verzameld in de calices: eerst in de **calix renalis minor** en daarna in de **calix renalis major**.`} />
      <SubHeading><Inline>{`De nefron als functionele eenheid`}</Inline></SubHeading>
      <PBody text={`De **nefronen** zijn de functionele units van de nier. Elke nier bevat ongeveer **één miljoen nefronen**. Dat maakt duidelijk hoe groot de verwerkingscapaciteit van de nier is.`} />
      <PBody text={`De **corpuscula renalia** of nierlichaampjes liggen in de **cortex renalis**. Ook de **proximale tubuli** en **distale tubuli** bevinden zich in de cortex. De **verzamelbuis** of **tubulus colligens rectus** loopt van de **cortex renalis** naar de **papilla renalis**.`} />
      <PBody text={`> **Aandachtsvraag:** Waar wordt het bloed in de nier eerst gefilterd?
> **Mini-antwoord:** In de glomeruli, die onderdeel zijn van de corpuscula renalia.`} />
    </div>
  )
}
