import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een benauwd kind is een gestructureerde beoordeling essentieel. Let op algemene indruk, kleur, ademfrequentie, intrekkingen, neusvleugelen, geluiden zonder en met stethoscoop, thoraxexcursies en tekenen van uitputting. Gebruik altijd de leeftijdsgebonden normaalwaarden voor vitale parameters. Inspiratoire stridor wijst op een bovenste luchtwegobstructie, expiratoir piepen op een onderste luchtwegobstructie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke aandoeningen zijn bronchiolitis, laryngitis subglottica en viraal piepen/astma. Bronchiolitis komt vooral voor bij jonge zuigelingen en wordt meestal veroorzaakt door RSV. Laryngitis subglottica herken je aan blafhoest, heesheid en inspiratoire stridor. De ernst beoordeel je met de Westley-Croup-score. Bij piepen en verlengd expirium denk je aan obstructie van de onderste luchtwegen. Inhalatietherapie gebeurt vaak met een dosisaerosol via voorzetkamer; dat is breed toepasbaar en meestal de voorkeursvorm.`}</Inline></p>
    </div>
  )
}
