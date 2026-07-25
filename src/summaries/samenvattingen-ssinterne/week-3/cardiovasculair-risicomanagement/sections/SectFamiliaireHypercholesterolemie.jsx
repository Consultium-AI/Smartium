import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Familiaire hypercholesterolemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Familiaire hypercholesterolemie is een autosomaal dominante aandoening, meestal door een mutatie in het LDL-receptorgen. Daardoor wordt LDL minder goed uit de circulatie opgenomen en stijgt het LDL-gehalte.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook een afwijking in ApoB-100 kan een vergelijkbaar beeld geven, omdat ApoB-100 de belangrijkste ligand is voor de LDL-receptor.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`FH komt relatief vaak voor. Het leidt tot prematuur vaatlijden, omdat atherosclerose al op jonge leeftijd begint. Ook peesxanthomen, xanthelasmata en een arcus lipoides kunnen voorkomen. Daarnaast is er een verhoogde kans op vroege aortaklepstenose.`}</Inline></p>
      <SubHeading><Inline>{`Screening en herkenning`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op FH is verder onderzoek belangrijk, zeker als het LDL op jonge leeftijd sterk verhoogd is. Een belaste familieanamnese helpt, maar is niet altijd volledig beschikbaar. Daarom moet je bij een opvallend hoog LDL altijd verder denken.`}</Inline></p>
    </div>
  )
}
