import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke late complicaties komen voor?`}</Inline></SubHeading>
      <SubHeading><Inline>{`1. Heringrepen`}</Inline></SubHeading>
      <PBody text={`Restafwijkingen kunnen progressief zijn en een nieuwe ingreep nodig maken. Voorbeelden zijn een **rest-VSD** na chirurgische correctie of **pulmonalisinsufficiëntie** na correctie van tetralogie van Fallot.`} />
      <SubHeading><Inline>{`2. Ritmestoornissen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Aritmieën kunnen ontstaan door hemodynamische belasting door restafwijkingen of door littekens van een operatie.`}</Inline></p>
      <SubHeading><Inline>{`3. Hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een licht verminderde systolische ventrikelfunctie komt niet zelden voor, vooral bij patiënten die in de beginjaren van de hartchirurgie zijn geopereerd. Bij progressieve ventrikeldysfunctie kan hartfalen ontstaan. Aritmieën, restshunts en klepproblemen kunnen dit verergeren.`}</Inline></p>
      <SubHeading><Inline>{`4. Endocarditis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Patiënten met aangeboren hartafwijkingen hebben een verhoogd risico op endocarditis. Structurele afwijkingen zoals resterende septumdefecten, klepafwijkingen en prothesemateriaal zoals patches of hartklepprotheses kunnen turbulente bloedstroming veroorzaken. Daardoor kan het endocard beschadigen, en beschadigd endotheel is gevoeliger voor infectie bij bacteriëmie.`}</Inline></p>
      <SubHeading><Inline>{`5. Plotse hartdood`}</Inline></SubHeading>
      <PBody text={`Het risico op **sudden cardiac death** is verhoogd, vooral door aritmogene substraten zoals myocardiale littekens, resterende hemodynamische afwijkingen, ventriculaire dysfunctie en atriale of ventriculaire aritmieën.`} />
    </div>
  )
}
