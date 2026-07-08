import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De opvang van de pasgeborene: eerst goed voorbereiden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de geboorte heeft een pasgeborene meestal geen volledige reanimatie nodig, maar wel ondersteuning bij de overgang van het intra-uteriene naar het extra-uteriene leven. Die overgang noemen we ook wel de transitie. Meestal gaat het dan vooral om ondersteuning van de ademhaling. Slechts een kleine minderheid heeft daarnaast thoraxcompressies of medicatie nodig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat je vooraf weet dat je niet goed kunt voorspellen welke baby hulp nodig zal hebben. Daarom moet iedere professional die bij een geboorte betrokken is, in staat zijn om de reanimatie op te starten.`}</Inline></p>
      <SubHeading><Inline>{`Een warme, rustige opvangruimte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Pasgeborenen koelen snel af, zeker als ze nat zijn en aan tocht worden blootgesteld. Afkoeling verhoogt de morbiditeit en mortaliteit. Daarom is goede temperatuurbeheersing een essentieel onderdeel van de opvang.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De opvangruimte moet tochtvrij en warm zijn. Voor à terme pasgeborenen wordt een omgevingstemperatuur van 23-25 °C nagestreefd. Bij prematuren jonger dan 28 weken is een temperatuur van meer dan 25 °C gewenst. De opvangtafel wordt ingesteld op 37,5 °C en de warmtestraler staat op 100%.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast controleer je vooraf de apparatuur, leg je alle materialen klaar en bespreek je met het team wat je verwacht, welke problemen mogelijk zijn en wie welke taak krijgt.`}</Inline></p>
      <SubHeading><Inline>{`Delayed cord clamping`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij iedere geboorte wordt laat afnavelen geadviseerd. Dat betekent dat je minimaal 1 minuut wacht met afnavelen. Dit geeft een stabielere overgang naar het extra-uteriene leven. Ook zijn er voordelen zoals een hoger geboortegewicht, een hoger hemoglobinegehalte en minder ijzerdeficiëntie op de leeftijd van 3 tot 6 maanden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij prematuren heeft delayed cord clamping extra voordelen: minder behoefte aan bloedtransfusies, minder behoefte aan bloeddrukverhogende medicatie en minder kans op intraventriculaire hemorrhagie en necrotiserende enterocolitis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In het ErasmusMC-Sophia wordt bij prematuren 1 minuut gewacht en bij à terme pasgeborenen 3 minuten.`}</Inline></p>
    </div>
  )
}
