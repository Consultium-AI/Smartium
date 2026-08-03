import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijke vormen van interstitiële pneumonie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Binnen de interstitiële pneumonieën zijn een aantal patronen belangrijk om te kennen.`}</Inline></p>
      <SubHeading><Inline>{`Usual interstitial pneumonia, UIP`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`UIP is vooral een fibrotisch patroon. Het hoort vaak bij IPF, maar kan ook voorkomen bij bijvoorbeeld reumatoïde artritis-gerelateerde ILD. Op HRCT zie je meestal honeycombing, soms met traction bronchiectasis, vooral subpleuraal en basaal. Histologisch is er duidelijke fibrose met architectuurverstoring en vaak ook fibroblastfoci.`}</Inline></p>
      <SubHeading><Inline>{`Non-specific interstitial pneumonia, NSIP`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`NSIP bestaat uit een meer uniforme combinatie van ontsteking en fibrose. Op HRCT zie je vaak ground-glass opaciteiten met traction bronchiectasis, meestal peribronchovasculair en met subpleural sparing. Dit patroon komt vaak voor bij connective tissue diseases, maar kan ook idiopathisch zijn.`}</Inline></p>
      <SubHeading><Inline>{`Bronchiolocentric interstitial pneumonia, BIP`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij BIP zijn vooral de bronchioli betrokken, maar ook de alveoli en het interstitium kunnen meedoen. Dit patroon kan bijvoorbeeld voorkomen bij aspiratie of bij connective tissue diseases.`}</Inline></p>
      <SubHeading><Inline>{`Diffuse alveolar damage, DAD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`DAD geeft een snel ontstane respiratoire insufficiëntie en heeft een hoge mortaliteit. Patiënten hebben vaak intensieve behandeling en beademing nodig.`}</Inline></p>
      <SubHeading><Inline>{`Lymphoid interstitial pneumonia, LIP`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`LIP is zeldzaam en wordt geassocieerd met auto-immuunziekten en virale infecties.`}</Inline></p>
    </div>
  )
}
