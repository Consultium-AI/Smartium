import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier heeft naast filtratie en uitscheiding ook belangrijke aanvullende functies. Hij maakt EPO bij zuurstoftekort, waardoor het beenmerg meer rode bloedcellen gaat produceren. Hij speelt een centrale rol in de calciumfosfaathuishouding via PTH, vitamine D en FGF-23. En hij regelt de magnesiumhuishouding, vooral in de dikke opstijgende lis van Henle. Bij nierinsufficiëntie kunnen daardoor anemie, hypocalciëmie, hyperfosfatemie, renale osteodystrofie en hypomagnesiëmie ontstaan.`}</Inline></p>
    </div>
  )
}
