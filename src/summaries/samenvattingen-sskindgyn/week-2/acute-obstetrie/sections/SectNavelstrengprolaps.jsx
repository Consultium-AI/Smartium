import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Navelstrengprolaps`}</Inline></SubHeading>
      <PBody text={`Bij een **navelstrengprolaps** glipt de navelstreng langs het voorliggende deel, bijvoorbeeld de schedel, nadat de vliezen breken. De moeder loopt meestal geen direct gevaar, maar de foetus kan de navelstreng afknellen tussen het voorliggende deel en het bekken.`} />
      <PBody text={`De eerste stap is de maternale conditie ondersteunen volgens ABCDEF. Tegelijk probeer je de compressie van de navelstreng tijdelijk op te heffen door het voorliggende deel met de vingers omhoog te duwen, de houding van de vrouw aan te passen en zo nodig de blaas te vullen met **500 ml NaCl**. Daarna volgt zo snel mogelijk een verlossing, bijvoorbeeld met vacuüm of sectio, afhankelijk van de ontsluiting en de foetale conditie.`} />
    </div>
  )
}
