import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sarcopenie: verlies van spiermassa en spierkracht`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een belangrijk gevolg van ondervoeding is sarcopenie. Sarcopenie is een syndroom met progressief en gegeneraliseerd verlies van skeletspiermassa en spierkracht, met risico op lichamelijke beperkingen, slechtere kwaliteit van leven en overlijden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij veroudering neemt de spiermassa af en de vetmassa toe. Dat betekent dat iemand er soms niet “mager” uitziet, maar toch wel degelijk spiermassa kan verliezen. Sarcopenie is een complex syndroom en wordt beïnvloed door veel factoren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke risicofactoren zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ondervoeding en lage eiwitinname;`}</Inline></li>
        <li><Inline>{`lichamelijke inactiviteit;`}</Inline></li>
        <li><Inline>{`bedrust en immobiliteit;`}</Inline></li>
        <li><Inline>{`verouderingsprocessen;`}</Inline></li>
        <li><Inline>{`chronische ziekten zoals hartfalen, nierfalen, leverfalen, diabetes, kanker en chronische ontstekingsziekten;`}</Inline></li>
        <li><Inline>{`hormonale veranderingen;`}</Inline></li>
        <li><Inline>{`neuromusculaire veranderingen.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is sarcopenie klinisch belangrijk?**
Omdat het samen met ondervoeding het mortaliteitsrisico verhoogt, vooral bij ouderen.`} />
    </div>
  )
}
