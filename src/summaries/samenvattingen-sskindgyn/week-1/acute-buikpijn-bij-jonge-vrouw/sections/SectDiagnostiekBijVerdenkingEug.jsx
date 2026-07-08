import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek bij verdenking EUG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op een EUG verricht je geen vaginaal toucher, omdat dit risico op ruptuur kan geven. De belangrijkste diagnostiek bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`echografie, meestal transvaginaal;`}</Inline></li>
        <li><Inline>{`laboratoriumonderzoek, vooral beta-HCG.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De echo wordt door de gynaecologie verricht. Als er geen zwangerschap in de uterus wordt gezien, helpt de HCG-waarde om de diagnose verder in te schatten.`}</Inline></p>
      <SubHeading><Inline>{`Wat kun je op de echo zien?`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leeg cavum uteri;`}</Inline></li>
        <li><Inline>{`adnexale massa;`}</Inline></li>
        <li><Inline>{`vrij vocht in de buik;`}</Inline></li>
        <li><Inline>{`soms een ectopische vruchtzak.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij de casus werd een leeg cavum uteri gezien, met een massa naast het ovarium en vrij vocht. Dat past bij een EUG.`}</Inline></p>
    </div>
  )
}
