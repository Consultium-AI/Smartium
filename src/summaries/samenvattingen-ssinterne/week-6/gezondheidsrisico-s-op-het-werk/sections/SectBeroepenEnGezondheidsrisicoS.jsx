import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beroepen en gezondheidsrisico’s`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de module worden verschillende beroepen gebruikt om te laten zien hoe werk en gezondheid samenhangen.`}</Inline></p>
      <SubHeading><Inline>{`Loods`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een loods moet onder gevaarlijke omstandigheden werken, bijvoorbeeld bij gladheid, storm, ruwe zee, motorpech of communicatieproblemen. Risico’s zijn vallen, beknelling, te water raken, onderkoeling en stress. Voor het werk zijn onder andere kracht, ruimtelijk inzicht, communicatie, concentratie, stressbestendigheid, goed gehoor, goede visus en een goed evenwichtsorgaan nodig. Veranderingen zoals overgewicht, Ménière, evenwichtsstoornissen, vermoeidheid, diabetes, myocardinfarct, spierzwakte, epilepsie of COPD kunnen het functioneren beperken.`}</Inline></p>
      <SubHeading><Inline>{`Kraanmachinist`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een kraanmachinist spelen langdurig in dezelfde houding zitten, stress, onregelmatige werktijden, vallen, aanrijdingen en overbelasting van de installatie een rol. Belangrijke kwaliteiten zijn kracht, dieptezien, concentratie, stressbestendigheid, samenwerking, goed evenwicht, goede visus en geen hoogtevrees. Veranderingen zoals overgewicht, evenwichtsstoornissen, vermoeidheid, diabetes, myocardinfarct, spierzwakte, epilepsie, COPD en concentratiestoornissen kunnen het werk bemoeilijken.`}</Inline></p>
      <SubHeading><Inline>{`Bakker`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een bakker zijn repeterende bewegingen, tillen, kracht zetten, nachtwerk, piekbelasting, huidbelasting, brandwonden, stofbelasting, allergie, geluidsbelasting en risico op vallen belangrijk. Voor het werk zijn kracht, goed gebruik van armen en handen, stressbestendigheid, flexibiliteit, reuk en smaak, creativiteit, hittebestendigheid en nachtwerk belangrijk. Veranderingen zoals overgewicht, vermoeidheid, suikerziekte, epilepsie, allergie, bakkersastma, COPD of een noro-infectie kunnen het functioneren beïnvloeden.`}</Inline></p>
    </div>
  )
}
