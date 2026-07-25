import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute ontregelingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Acute ontregelingen zijn ernstige metabole problemen die snel behandeld moeten worden om coma en overlijden te voorkomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er zijn twee belangrijke hyperglykemische urgenties:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Diabetische keto-acidose (DKA)**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Vooral bij type 1. Kenmerken zijn glucose > 15 mmol/L, ketonen in bloed of urine en metabole acidose.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Hyperosmolair hyperglykemisch syndroom (HHS)**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Vooral bij type 2. Kenmerkend is glucose > 30 mmol/L en een sterk verhoogde plasma-osmolaliteit.`}</Inline></p>
      <SubHeading><Inline>{`Oorzaken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`DKA en HHS ontstaan wanneer de insulinebehoefte groter is dan het aanbod. Uitlokkende factoren zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`nieuw ontdekte diabetes`}</Inline></li>
        <li><Inline>{`geen insulinegebruik of therapie-ontrouw`}</Inline></li>
        <li><Inline>{`infecties of ontstekingen`}</Inline></li>
        <li><Inline>{`myocardinfarct`}</Inline></li>
        <li><Inline>{`medicatie, vooral glucocorticoïden`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`DKA: eerste aanpak`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij DKA zijn dehydratie en acidose belangrijk. De eerste stap is vocht geven. Daarna volgt insuline, maar pas nadat het kalium bekend is, omdat insuline een kaliumshift kan veroorzaken en hypokaliëmie kan uitlokken. Bicarbonaat heeft meestal geen toegevoegde waarde.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij DKA zie je vaak:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hoge glucose`}</Inline></li>
        <li><Inline>{`ketonen`}</Inline></li>
        <li><Inline>{`lage pH`}</Inline></li>
        <li><Inline>{`laag bicarbonaat`}</Inline></li>
        <li><Inline>{`lage pCO2 door compensatoire hyperventilatie`}</Inline></li>
        <li><Inline>{`soms hyponatriëmie door waterverplaatsing`}</Inline></li>
        <li><Inline>{`vaak verhoogde creatinine door prerenale nierinsufficiëntie`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`HHS: eerste aanpak`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij HHS is de osmolaliteit belangrijker dan de glucose alleen. Het bewustzijnsniveau is een belangrijke klinische parameter: hoe suffer de patiënt, hoe ernstiger de hyperosmolariteit. De osmolaliteit moet geleidelijk dalen; te snelle daling geeft risico op hersenoedeem.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 6. Verschil tussen DKA en HHS`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "DKA", "HHS"], ["Meest voorkomend bij", "type 1", "type 2"], ["Glucose", "> 15 mmol/L", "> 30 mmol/L"], ["Ketonen", "aanwezig", "meestal afwezig of minder prominent"], ["Belangrijkste probleem", "metabole acidose", "hyperosmolariteit"], ["Eerste behandeling", "vocht, daarna insuline en kaliumbeleid", "vocht, geleidelijke correctie osmolaliteit"]]} />
      <PBody text={`**Aandachtsvraag:** Waarom is vocht zo belangrijk bij DKA en HHS?
**Kort antwoord:** Omdat patiënten vaak ernstig uitgedroogd zijn en de circulatie eerst hersteld moet worden.`} />
    </div>
  )
}
