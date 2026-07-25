import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is de ziekte van Crohn?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De ziekte van Crohn is een chronische darmziekte die in het hele maag-darmkanaal kan voorkomen. De ontsteking kan diep doordringen in de darmwand. Daardoor kunnen er zweren ontstaan, maar ook fistels, littekenweefsel, verklevingen en vernauwingen. Dat maakt de ziekte vaak langdurig en wisselend van beloop.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De ziekte komt relatief vaak voor bij jongvolwassenen, vooral tussen het 15e en 30e levensjaar. In Nederland gaat het om ongeveer 1000 nieuwe patiënten per jaar en in totaal rond de 40.000 mensen. Erfelijkheid speelt mee: als iemand een familielid met Crohn heeft, is de kans verhoogd, en bij een eerstegraads familielid zelfs sterk verhoogd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Typische klachten zijn buikpijn, diarree, gewichtsverlies en vermoeidheid. Ook kunnen gewrichtsklachten, huidafwijkingen en oogklachten optreden.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is Crohn zo’n chronische ziekte?
**Mini-antwoord:** Omdat de ontsteking steeds kan terugkomen en vaak langdurig onderdrukt moet worden met medicatie.`} />
    </div>
  )
}
