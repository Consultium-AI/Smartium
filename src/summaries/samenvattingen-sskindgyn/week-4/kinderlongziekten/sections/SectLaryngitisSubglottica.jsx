import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Laryngitis subglottica`}</Inline></SubHeading>
      <PBody text={`Laryngitis subglottica, ook wel pseudokroep of valse kroep genoemd, is een veelvoorkomende virale luchtweginfectie. Het ziektebeeld wordt gekenmerkt door **inspiratoire stridor**, **heesheid**, **intrekkingen**, **neusvleugelen** en een typische **blafhoest**. Vaak gaan aspecifieke klachten zoals hoesten, rinorroe en lichte koorts eraan vooraf. Als er ook een expiratoire component is, spreekt men van laryngotracheobronchitis.`} />
      <p className="leading-relaxed"><Inline>{`De incidentie is ongeveer 30 per 1000 per jaar bij kinderen jonger dan 6 jaar. De piek ligt tussen het eerste en derde levensjaar. Slechts bij minder dan 2% is ziekenhuisopname nodig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De verwekkers zijn onder andere para-influenzavirus type 1, 2 en 3, RSV, influenza A, adenovirus en enterovirussen. Als een kind ouder is dan 6 jaar en dit ziektebeeld doormaakt, is het verstandig om in een rustig stadium aanvullend onderzoek te doen om een pre-existente aandoening uit te sluiten. De ernst kan worden ingeschat met de Westley-Croup-score.`}</Inline></p>
      <SubHeading><Inline>{`Laryngitis subglottica versus epiglottitis`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Epiglottitis", "Laryngitis subglottica"], ["Plaats van obstructie", "supraglottisch", "subglottisch"], ["Stridor", "zacht en hoog", "luid"], ["Blafhoest", "afwezig", "aanwezig"], ["Slikklachten/speekselvloed", "aanwezig", "afwezig"], ["Algemeen ziek zijn", "koortsend ziek", "meestal minder ziek"], ["Stem", "gedempt", "hees"], ["Koorts", "aanwezig", "vaak subfebriel"], ["Houding", "rechtop, voorover, stil", "geen duidelijke voorkeur"]]} />
      <p className="leading-relaxed"><Inline>{`De differentiaaldiagnose van laryngitis subglottica bestaat in grote groepen uit infectieuze oorzaken, aspiratie van een corpus alienum en allergische oorzaken zoals anafylaxie. Bij infectieus denk je onder andere aan epiglottitis, acute bacteriële laryngotracheitis/laryngotracheobronchitis, tonsillitis of peritonsillair abces en retrofaryngeaal abces.`}</Inline></p>
    </div>
  )
}
