import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Circulatoire shock betekent dat de circulatie onvoldoende is om aan de zuurstofbehoefte van de weefsels te voldoen. Dat kan zich uiten met tachycardie, tachypnoe, oligurie, veranderd bewustzijn, koude acra, gemarmerde huid en lactaatacidose. Belangrijk is dat shock niet hetzelfde is als hypotensie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De bloeddruk en cardiac output worden bepaald door hartfrequentie, slagvolume, preload, contractiliteit, afterload en perifere weerstand. De Frank-Starlingcurve helpt om de relatie tussen vulling en slagvolume te begrijpen. Bij shock draait de behandeling om het herstellen van de circulatie door te vullen, de pomp te ondersteunen of de vaattonus te beïnvloeden. De vier typen shock zijn cardiogeen, hypovolemisch, distributief en obstructief.`}</Inline></p>
    </div>
  )
}
