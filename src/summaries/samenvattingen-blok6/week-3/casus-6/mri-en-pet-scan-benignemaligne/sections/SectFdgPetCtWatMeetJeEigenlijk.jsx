import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`FDG PET/CT: wat meet je eigenlijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`FDG PET/CT is een veelgebruikte vorm van nucleaire beeldvorming. FDG staat voor fluorodeoxyglucose: een radioactieve vorm van glucose. Het bijzondere aan FDG is dat het na opname in de cel als het ware “gevangen” blijft. Daardoor laat het onderzoek zien waar in het lichaam veel glucose wordt opgenomen, en dus waar het metabolisme hoog is.`}</Inline></p>
      <SubHeading><Inline>{`Waar zie je veel FDG-opname?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Weefsels met een hoog metabolisme nemen veel FDG op. Denk vooral aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`tumoren;`}</Inline></li>
        <li><Inline>{`infecties;`}</Inline></li>
        <li><Inline>{`inflammatie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarom is FDG PET/CT erg gevoelig: je ziet al snel verhoogde activiteit. Maar het onderzoek is niet erg specifiek. Dat betekent dat je niet direct kunt zeggen wát de oorzaak van de opname is. Een geïnfecteerd puistje en een melanoom kunnen bijvoorbeeld allebei FDG-positief zijn. Klinische informatie is daarom essentieel bij de beoordeling.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is FDG PET/CT niet meteen bewijzend voor kanker?
**Mini-antwoord:** omdat ook infectie en ontsteking veel FDG kunnen opnemen.`} />
      <p className="leading-relaxed"><Inline>{`FDG wordt via de nieren uitgescheiden. Dat is handig, omdat overtollige radioactiviteit zo wordt uitgeplast en de stralenbelasting lager blijft. Tegelijk is dit een nadeel bij tumoren in de urinewegen, omdat die lastiger te beoordelen zijn. Soms wordt furosemide gegeven om de activiteit in de blaas te verminderen.`}</Inline></p>
      <SubHeading><Inline>{`Voorbereiding op FDG PET/CT`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een goede voorbereiding is belangrijk, omdat FDG zich gedraagt als glucose. De patiënt moet daarom nuchter zijn en mag niet te veel spieractiviteit hebben gehad. Als spieren actief zijn, nemen die ook veel FDG op en wordt de scan lastiger te beoordelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke punten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`meestal 6 uur nuchter;`}</Inline></li>
        <li><Inline>{`niet intensief sporten of zwaar bewegen vooraf;`}</Inline></li>
        <li><Inline>{`rustig wachten na toediening;`}</Inline></li>
        <li><Inline>{`bij diabetes is de nuchtere periode korter, maar langwerkende insuline op de ochtend van het onderzoek is ongunstig;`}</Inline></li>
        <li><Inline>{`metformine kan diffuse activiteit in de darmen geven;`}</Inline></li>
        <li><Inline>{`bij kinderen en jongvolwassenen kan bruin vet storende FDG-opname geven; propranolol kan dit verminderen;`}</Inline></li>
        <li><Inline>{`bij onderzoek van tumoren of infecties in of nabij het hart is een speciale cardiale voorbereiding nodig.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 1. Belangrijke voorbereidingsmaatregelen bij FDG PET/CT`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Waarom belangrijk?"], ["Nuchter zijn", "Minder verstoring door glucose in het bloed"], ["Niet sporten / rustig blijven", "Minder spieropname van FDG"], ["Diabetes goed voorbereiden", "Voorkomt storende opname in spieren"], ["Metformine soms stoppen", "Minder diffuse darmactiviteit"], ["Propranolol bij bruin vet", "Minder FDG-opname in bruin vet"], ["Cardiale voorbereiding", "Minder glucose-opname door myocard"]]} />
    </div>
  )
}
