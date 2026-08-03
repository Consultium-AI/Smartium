import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van acuut hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Acuut hartfalen is een plotselinge toename van klachten. Dat kan optreden bij iemand met bestaand chronisch hartfalen, maar ook nieuw ontstaan, bijvoorbeeld na een myocardinfarct.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Typische klachten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ernstige kortademigheid in rust of bij minimale inspanning;`}</Inline></li>
        <li><Inline>{`orthopneu;`}</Inline></li>
        <li><Inline>{`vochtretentie met oedeem, ascites of gewichtstoename;`}</Inline></li>
        <li><Inline>{`vermoeidheid en sufheid bij lage cardiac output.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Er zijn twee belangrijke klinische beelden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**astma cardiale**: overvulling van de longcirculatie, met crepitaties en hypoxie; de patiënt is vaak hypertensief en perifeer warm;`}</Inline></li>
        <li><Inline>{`**cardiogene shock**: ernstige lage cardiac output met hypotensie, koude extremiteiten, oligurie en mentale veranderingen.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Astma cardiale`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij astma cardiale is er overvulling van de longcirculatie. Door verhoogde druk in de linker harthelft lekt vocht naar de longblaasjes, waardoor longoedeem ontstaat. De patiënt is vaak angstig, ernstig dyspnoïsch en hypertensief.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling richt zich op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verlagen van de preload;`}</Inline></li>
        <li><Inline>{`verbeteren van de oxygenatie;`}</Inline></li>
        <li><Inline>{`verlichten van dyspneu.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat doe je door de patiënt rechtop te laten zitten, zuurstof te geven bij saturatie onder 90%, lisdiuretica intraveneus toe te dienen en, bij hypertensie, nitraten te geven. Morfine wordt niet routinematig gegeven vanwege het risico op ademhalingsdepressie.`}</Inline></p>
      <SubHeading><Inline>{`Cardiogene shock`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cardiogene shock is een ernstige vorm van acuut hartfalen waarbij het hart onvoldoende cardiac output genereert om vitale organen zoals hersenen, nieren en lever van bloed te voorzien. Meestal is er sprake van ernstig systolisch linkerventrikelfalen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling is gericht op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`herstel van perfusie;`}</Inline></li>
        <li><Inline>{`ondersteunen van de pompfunctie;`}</Inline></li>
        <li><Inline>{`stabiliseren van bloeddruk en circulatie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarvoor kunnen inotrope middelen nodig zijn.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Belangrijke middelen bij cardiogene shock`}</Inline></SubHeading>
      <DataTable rows={[["Middel", "Werking"], ["Dobutamine", "β1-agonist, verhoogt contractiliteit en hartfrequentie"], ["Milrinon", "PDE3-remmer, verhoogt contractiliteit en geeft vasodilatatie"], ["Levosimendan", "Verhoogt calciumgevoeligheid, positief inotroop zonder extra zuurstofverbruik"], ["Noradrenaline", "α1-agonist met zwakke β1-werking, verhoogt bloeddruk"]]} />
      <p className="leading-relaxed"><Inline>{`Dobutamine verhoogt de contractiliteit en hartfrequentie, maar kan ritmestoornissen geven en verhoogt het zuurstofverbruik. Milrinon is vooral bruikbaar bij patiënten die al β-blokkers gebruiken, maar kan hypotensie verergeren. Levosimendan heeft een langdurige werking. Noradrenaline gebruik je bij ernstige hypotensie ondanks adequate vulling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Naast medicatie zijn zuurstof, monitoring en behandeling van de oorzaak belangrijk, bijvoorbeeld PCI bij infarct of klepinterventie bij een klepprobleem. Vaak is IC-opname nodig.`}</Inline></p>
    </div>
  )
}
