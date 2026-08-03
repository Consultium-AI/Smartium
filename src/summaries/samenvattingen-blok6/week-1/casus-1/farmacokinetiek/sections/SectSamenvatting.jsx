import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Farmacokinetiek beschrijft wat het lichaam met een farmacon doet en wordt samengevat met ADME: absorptie, distributie, metabolisme en eliminatie. Absorptie bepaalt hoe een geneesmiddel in de bloedbaan komt, distributie hoe het zich over het lichaam verdeelt, metabolisme hoe vooral de lever het verwerkt, en eliminatie hoe het lichaam het weer kwijt raakt. Belangrijke begrippen zijn biologische beschikbaarheid, verdelingsvolume, first-pass effect, halfwaardetijd, Cmax, Tmax en AUC.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Leverfunctiestoornissen kunnen vooral de distributie en het metabolisme veranderen, bijvoorbeeld via hypoalbuminemie, ascites en verminderde CYP-activiteit. Nierfunctiestoornissen beïnvloeden vooral de eliminatie, waardoor geneesmiddelen kunnen ophopen. Bij morbide obesitas is vooral de distributie veranderd, met soms ook invloed op absorptie, metabolisme en eliminatie. In de praktijk betekent dit dat de toedieningsvorm en de patiëntkenmerken veel invloed kunnen hebben op de uiteindelijke werking van een geneesmiddel.`}</Inline></p>
    </div>
  )
}
