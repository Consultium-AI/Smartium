import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kruisallergie en kruisreactiviteit`}</Inline></SubHeading>
      <PBody text={`Een **kruisallergie** betekent dat IgE-antistoffen die primair gericht zijn tegen inhalatieallergenen, door botanische verwantschap ook reageren met voedselallergenen.`} />
      <SubHeading><Inline>{`Voorbeelden`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Boompollen** kunnen kruisreageren met:`}</Inline></li>
        <li><Inline>{`soja;`}</Inline></li>
        <li><Inline>{`hazelnoot;`}</Inline></li>
        <li><Inline>{`perzik.`}</Inline></li>
        <li><Inline>{`**Graspollen** kunnen kruisreageren met:`}</Inline></li>
        <li><Inline>{`tomaat;`}</Inline></li>
        <li><Inline>{`meloen;`}</Inline></li>
        <li><Inline>{`banaan;`}</Inline></li>
        <li><Inline>{`ook citrusvruchten.`}</Inline></li>
        <li><Inline>{`**Huisstofmijt** kan kruisreageren met:`}</Inline></li>
        <li><Inline>{`garnaal;`}</Inline></li>
        <li><Inline>{`krab;`}</Inline></li>
        <li><Inline>{`kreeft.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Belangrijke eiwitten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij kruisreactiviteit spelen verschillende eiwitfamilies een rol.`}</Inline></p>
      <PBody text={`**Tabel 3. Belangrijke allergene componenten**`} />
      <DataTable rows={[["Eiwitfamilie", "Kenmerken", "Klinische betekenis"], ["PR-10", "Thermolabiel", "Vaak milde klachten, OAS"], ["LTP", "Thermostabiel", "Kan ernstige klachten geven, vooral in Zuid-Europa"], ["Profiline", "Vaak klinisch niet relevant", "Geeft vaak positieve testen zonder klachten"], ["CCD’s", "Niet klinisch relevant", "Kunnen in vitro vals-positieve uitslagen geven"], ["Voedsel-specifieke opslageiwitten", "Klinisch relevant", "Geassocieerd met ernstige reacties"]]} />
      <p className="leading-relaxed"><Inline>{`PR-10-eiwitten zijn vaak betrokken bij pollen-voedselkruisreacties. Een klassiek voorbeeld is appel: door koken gaan de eiwitten verloren, waardoor klachten kunnen verminderen.`}</Inline></p>
      <PBody text={`Profiline is een **pan-allergeen**: het komt in veel planten voor. Daardoor kunnen testen positief zijn zonder dat er echte klachten zijn.`} />
      <PBody text={`CCD’s zijn **cross-reactive carbohydrate determinants**. Ook die kunnen testuitslagen positief maken zonder klinische relevantie.`} />
      <p className="leading-relaxed"><Inline>{`Voedsel-specifieke opslageiwitten, zoals bepaalde 2S- en 7S-eiwitten, zijn juist wel klinisch relevant en kunnen ernstige reacties geven.`}</Inline></p>
    </div>
  )
}
