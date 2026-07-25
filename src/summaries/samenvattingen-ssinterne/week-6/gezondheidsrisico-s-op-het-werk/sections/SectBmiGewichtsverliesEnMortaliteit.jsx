import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`BMI, gewichtsverlies en mortaliteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ouderen is de BMI sterker geassocieerd met mortaliteitsrisico dan bij jongeren. Gewichtsverlies is daarom een belangrijk signaal. Vooral onbedoeld gewichtsverlies is klinisch relevant.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor ouderen worden in het algemeen de volgende criteria gebruikt voor ondervoeding:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`BMI < 20`}</Inline></li>
        <li><Inline>{`en/of >10% onbedoeld gewichtsverlies in de afgelopen zes maanden`}</Inline></li>
        <li><Inline>{`en/of >5% onbedoeld gewichtsverlies in de laatste maand`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij mevrouw De Vries is de BMI 26,2, dus volgens deze grens geen ondergewicht. Maar zij is wel in korte tijd 10 kilo afgevallen. Dat wijst erop dat vooral spiermassa verloren is gegaan en dat er sprake is van ondervoeding.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Praktische interpretatie bij ouderen`}</Inline></SubHeading>
      <DataTable rows={[["Gegeven", "Betekenis"], ["BMI < 20", "past bij ondervoeding"], [">10% gewichtsverlies in 6 maanden", "past bij ondervoeding"], [">5% gewichtsverlies in 1 maand", "past bij ondervoeding"], ["Normale of hoge BMI met fors gewichtsverlies", "ondervoeding kan alsnog aanwezig zijn"]]} />
    </div>
  )
}
