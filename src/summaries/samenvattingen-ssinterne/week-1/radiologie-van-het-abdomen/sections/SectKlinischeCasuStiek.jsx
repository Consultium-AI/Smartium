import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische casuïstiek`}</Inline></SubHeading>
      <SubHeading><Inline>{`Hematemesis bij alcoholabusus: levercirrose met oesophagusvarices`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een 60-jarige patiënt met hematemesis en alcoholabusus past levercirrose met oesophagusvarices. Hematemesis betekent bloedbraken en wijst op een hoge gastro-intestinale bloeding, dus uit de oesophagus, maag of proximale duodenum tot aan het ligament van Treitz.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij varicesbloedingen zie je vaak veel helder bloed. Bloed uit de maag of het proximale duodenum is vaak donkerder door inwerking van maagzuur.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Levercirrose herken je op CT aan een hobbelige levercontour en ascites langs de leverrand. Door de verhoogde druk in het portale systeem ontstaat omleiding van veneuze afvloed via collateralen met lagere druk, zoals in de oesophagus en maagwand. Daardoor verwijden deze venen en ontstaan varices.`}</Inline></p>
      <SubHeading><Inline>{`Pijn rechtsboven, koorts en Murphy-sign: acute cholecystitis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij pijn in de rechterbovenbuik, verhoogd CRP en een positief Murphy-sign past acute cholecystitis. Op echografie zie je dan een verdikte galblaaswand en vaak toegenomen doorbloeding van de wand, ook wel hyperemie genoemd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In de meeste gevallen wordt acute cholecystitis veroorzaakt door een galsteen die de afvloed blokkeert. Daardoor kan gal niet goed wegstromen, raakt de galblaas geïrriteerd en ontstaat ontsteking. Andere oorzaken zijn infectie of obstructie door een tumor.`}</Inline></p>
      <SubHeading><Inline>{`Buikpijn rechts bij een jonge patiënt: appendicitis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een 18-jarige jongen met pijn rechts in de buik en verhoogd CRP past appendicitis. Op echo zie je een verdikte appendix met vetinfiltratie eromheen. Ook is de appendix niet samendrukbaar bij compressie met de transducer. Samen met de klachten en het CRP past dit goed bij appendicitis.`}</Inline></p>
      <SubHeading><Inline>{`Acute bovenbuikpijn met loslaatpijn: perforatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met acute pijn in de bovenbuik en loslaatpijn is perforatie een belangrijke oorzaak om aan te denken. Op een buikoverzichtfoto zie je dan vrije lucht, bijvoorbeeld onder de rechter diafragmakoepel of boven de lever. Lucht op die plek hoort daar niet te zitten, omdat daar geen darm ligt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Coprostase kan wel aanwezig zijn, maar verklaart geen loslaatpijn. Hydronefrose zie je niet goed op een buikoverzichtfoto; daarvoor zijn echo of CT geschikter.`}</Inline></p>
    </div>
  )
}
