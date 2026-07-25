import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Symptomen en diagnostiek`}</Inline></SubHeading>
      <SubHeading><Inline>{`Hoe presenteert een patiënt zich?`}</Inline></SubHeading>
      <PBody text={`Patiënten presenteren zich meestal niet met “AKI” of “CNS” als klacht. Ze hebben vaak klachten van de **onderliggende ziekte**. Daarom zijn anamnese en lichamelijk onderzoek heel belangrijk.`} />
      <PBody text={`**Aandacht-vraag:** Waarom is de anamnese zo belangrijk?
**Mini-antwoord:** Omdat de nierinsufficiëntie zelf vaak weinig specifieke klachten geeft. De aanwijzingen zitten meestal in de oorzaak: vochtverlies, medicatie, koorts, huidafwijkingen, mictieklachten of systemische klachten.`} />
      <SubHeading><Inline>{`Diagnostische aanwijzingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sommige klachten en bevindingen wijzen al richting een bepaalde oorzaak:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**castnefropathie**: bekende multiple myeloom, discrepante AKI bij milde dehydratie, proteïnurie;`}</Inline></li>
        <li><Inline>{`**cholesterolembolieën**: paars verkleurde extremiteiten, vooral na endovasculaire interventie;`}</Inline></li>
        <li><Inline>{`**cryoglobulinemische vasculitis**: hepatitis C, vasculitis, hematurie, proteïnurie, positieve cryoglobulines;`}</Inline></li>
        <li><Inline>{`**glomerulaire nierziekte**: nefrotisch syndroom met hypoalbuminemie, oedeem, proteïnurie en hyperlipidemie;`}</Inline></li>
        <li><Inline>{`**hantavirusinfectie**: koorts, spier- en hoofdpijn, bloedingen, ARDS, trombopenie;`}</Inline></li>
        <li><Inline>{`**HUS/TTP**: bloederige diarree, neurologische stoornissen, hemolytische anemie, trombopenie, fragmentocyten;`}</Inline></li>
        <li><Inline>{`**leptospirose**: vergelijkbaar met hantavirus, maar met conjunctivitis, icterus en aseptische meningitis;`}</Inline></li>
        <li><Inline>{`**nierarteriestenose**: flashoedeem, hypertensie, hypokaliëmie, snelle verslechtering na RAAS-remmers;`}</Inline></li>
        <li><Inline>{`**paraproteïne-geassocieerde nierziekte**: M-proteïne of lichte ketens in serum of urine;`}</Inline></li>
        <li><Inline>{`**tubulo-interstitiële nefritis**: rash, artralgie, eosinofilie, leukocyturie, glucosurie, hypofosfatemie;`}</Inline></li>
        <li><Inline>{`**vasculitis/glomerulitis**: huidafwijkingen, longafwijkingen, hemoptoë, hematurie en proteïnurie.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Wat vraag je uit en wat onderzoek je?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de anamnese let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`voorgeschiedenis, vooral hartfalen en leverziekten;`}</Inline></li>
        <li><Inline>{`medicatie, met name ACE-remmers, ARB’s en antibiotica;`}</Inline></li>
        <li><Inline>{`mictieklachten en hematurie;`}</Inline></li>
        <li><Inline>{`klachten passend bij een systeemaandoening, zoals gewrichtsklachten of afvallen;`}</Inline></li>
        <li><Inline>{`dorst en oligurie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bloeddruk;`}</Inline></li>
        <li><Inline>{`hydratietoestand en oedeem;`}</Inline></li>
        <li><Inline>{`tekenen van vasculitis, zoals rash of livedo reticularis;`}</Inline></li>
        <li><Inline>{`blaasdemping.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Aanvullend onderzoek bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`urineonderzoek, zowel dipstick als kwantitatief;`}</Inline></li>
        <li><Inline>{`echo van de nieren, met aandacht voor grootte, hydronefrose en schors-merg-differentiatie;`}</Inline></li>
        <li><Inline>{`gericht bloedonderzoek, bijvoorbeeld antistoffen, CK, M-proteïne, fosfaat, uraat en LDH.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Purpura`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Purpura is een huidafwijking door extravasatie van erytrocyten. Het is niet wegdrukbaar. Dat onderscheid is klinisch belangrijk, omdat het kan passen bij vasculitis of andere systemische aandoeningen.`}</Inline></p>
    </div>
  )
}
