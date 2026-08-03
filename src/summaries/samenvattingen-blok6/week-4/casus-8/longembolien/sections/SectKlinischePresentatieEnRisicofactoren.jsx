import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische presentatie en risicofactoren`}</Inline></SubHeading>
      <SubHeading><Inline>{`Klachten en symptomen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De presentatie van een longembolie is vaak aspecifiek. Dat betekent dat de klachten ook bij andere aandoeningen kunnen passen, waardoor de diagnose soms lastig is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De meest voorkomende klachten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**kortademigheid**, vaak plotseling ontstaan en vooral merkbaar bij inspanning;`}</Inline></li>
        <li><Inline>{`**borstpijn**, meestal erger bij ademhalen;`}</Inline></li>
        <li><Inline>{`**hoesten**, soms met bloed ophoesten;`}</Inline></li>
        <li><Inline>{`**zwelling of pijn in een been**, passend bij een DVT;`}</Inline></li>
        <li><Inline>{`**duizeligheid of flauwvallen**, vooral bij ernstiger embolieën;`}</Inline></li>
        <li><Inline>{`**hemodynamische shock** of zelfs overlijden bij massale longembolieën.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Soms presenteren patiënten zich pas 2 tot 12 weken na het begin van de klachten. Dan spreekt men van een subacute longembolie.`}</Inline></p>
      <SubHeading><Inline>{`Lichamelijk onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De bevindingen bij lichamelijk onderzoek hangen af van de ernst en uitgebreidheid van de longembolie. Mogelijke afwijkingen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`tachypneu;`}</Inline></li>
        <li><Inline>{`tachycardie;`}</Inline></li>
        <li><Inline>{`lage zuurstofsaturatie bij ernstige longembolie;`}</Inline></li>
        <li><Inline>{`lage bloeddruk bij zeer ernstige longembolie;`}</Inline></li>
        <li><Inline>{`pleurawrijven bij auscultatie;`}</Inline></li>
        <li><Inline>{`tekenen van DVT.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Risicofactoren`}</Inline></SubHeading>
      <PBody text={`Er zijn veel risicofactoren voor longembolie. Een belangrijk onderscheid is dat tussen **uitlokkende factoren** en **langetermijnrisicofactoren**. Dat onderscheid is van belang voor de behandeling.`} />
      <p className="leading-relaxed"><Inline>{`Voorbeelden van risicofactoren zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`chirurgie;`}</Inline></li>
        <li><Inline>{`trauma;`}</Inline></li>
        <li><Inline>{`maligniteit;`}</Inline></li>
        <li><Inline>{`immobilisatie, zoals bedrust, lange vliegreis of lange autorit;`}</Inline></li>
        <li><Inline>{`zwangerschap;`}</Inline></li>
        <li><Inline>{`hormonale anticonceptiva;`}</Inline></li>
        <li><Inline>{`obesitas;`}</Inline></li>
        <li><Inline>{`inflammatoire ziekten, zoals inflammatoire darmziekten en SLE;`}</Inline></li>
        <li><Inline>{`eerdere DVT of longembolie;`}</Inline></li>
        <li><Inline>{`bekende trombofilie.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 2. Voorbeelden van risicofactoren voor veneuze trombo-embolie`}</Inline></SubHeading>
      <DataTable rows={[["Sterke risicofactoren", "Matige risicofactoren", "Zwakke risicofactoren"], ["Fractuur van het onderbeen", "Auto-immuunziekten", "Bedrust > 3 dagen"], ["Opname voor hartfalen of atriumfibrilleren", "Centrale veneuze lijnen", "Diabetes mellitus"], ["Heup- of knieprothese", "Chemotherapie", "Hypertensie"], ["Groot trauma", "Hart- of respiratoire insufficiëntie", "Immobiliteit door zitten, zoals lange reis"], ["Myocardinfarct", "Hormonale substitutietherapie", "Toenemende leeftijd"], ["Eerdere VTE", "Orale anticonceptie", "Laparoscopische chirurgie"], ["Ruggenmergletsel", "Postpartum periode", "Obesitas"], ["", "Infectie", "Zwangerschap"], ["", "Inflammatoire darmziekte", "Varices"], ["", "Kanker, vooral gemetastaseerd", ""], ["", "Trombofilie", ""]]} />
    </div>
  )
}
