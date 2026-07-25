import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diabetes type 2`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Diabetes type 2 is een multifactoriële aandoening. Zowel erfelijke aanleg als omgevingsfactoren spelen een rol. De erfelijkheid wordt geschat op 30-70%, afhankelijk van de populatie. Een broer of zus van iemand met type 2 heeft ongeveer twee keer zoveel risico als iemand uit de algemene bevolking.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De genetische aanleg is polygenetisch: veel verschillende genetische varianten dragen elk een klein beetje bij. Inmiddels zijn meer dan 80 polymorfismen geassocieerd met type 2, vooral in genen die betrokken zijn bij bètacelfunctie en bètacelaantal.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke omgevingsfactoren zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`overgewicht`}</Inline></li>
        <li><Inline>{`weinig lichaamsbeweging`}</Inline></li>
        <li><Inline>{`etniciteit, bijvoorbeeld Hindoestaanse afkomst`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Behandeling van type 2`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In het begin is diabetes type 2 vaak goed te behandelen met leefstijlmaatregelen. Gewichtsreductie en meer bewegen zijn belangrijk. Bewegen verbetert de insulinegevoeligheid, ook als iemand niet afvalt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De richtlijn legt meer nadruk op een gezond voedingspatroon dan op precieze percentages van afzonderlijke nutriënten. Er wordt bijvoorbeeld geen exact energiepercentage voor verzadigd vet genoemd.`}</Inline></p>
      <SubHeading><Inline>{`Orale antidiabetica`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste groepen orale middelen werken op verschillende plaatsen:`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Orale antidiabetica en aangrijpingspunt`}</Inline></SubHeading>
      <DataTable rows={[["Groep", "Werking"], ["Biguanide", "remt hepatische gluconeogenese en verbetert insulinegevoeligheid"], ["Sulfonylureumderivaten", "stimuleren de pancreas tot insulineafgifte"], ["DPP4-remmers / GLP1-analogen", "beïnvloeden incretinewerking"], ["SGLT2-remmers", "verminderen glucose-terugresorptie in de nier"]]} />
      <p className="leading-relaxed"><Inline>{`Metformine is een biguanide en veroorzaakt in monotherapie geen hypoglykemie. Gliclazide is een sulfonylureumderivaat.`}</Inline></p>
      <SubHeading><Inline>{`Zelfcontrole en dagcurves`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij diabeteszorg worden bloedglucosecurves gebruikt om de instelling te beoordelen. Soms is een 7-punts dagcurve nodig. De interpretatie hangt niet alleen af van de losse glucosewaarden, maar ook van het HbA1c en het verloop in de tijd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een piek na het ontbijt kan bijvoorbeeld de ochtendinsuline verhoogd worden. Een nachtelijke hypoglykemie vraagt om goed na te gaan wat precies is gespoten, of er alcohol of extra inspanning was, en of er een tussendoortje is overgeslagen.`}</Inline></p>
    </div>
  )
}
