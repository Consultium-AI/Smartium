import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen is een klinisch syndroom waarbij het hart het lichaam niet meer voldoende van bloed kan voorzien. De kern ligt in een probleem van systole, diastole of beide. Systolische dysfunctie geeft een verlaagde contractiliteit en een lagere ejectiefractie. Diastolische dysfunctie geeft een stijve kamer met hoge vullingsdrukken, terwijl de ejectiefractie normaal kan blijven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het lichaam reageert met compensatiemechanismen: sympathische activatie, RAAS en natriuretische peptiden. Deze reacties helpen kortdurend, maar worden op lange termijn schadelijk door overbelasting, fibrose, hypertrofie en remodellering. Daardoor ontstaat een vicieuze cirkel van verdere achteruitgang.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Klinisch onderscheiden we forward failure, met te lage perfusie van organen, en backward failure, met stuwing en verhoogde vullingsdrukken. Hartfalen kan acuut of chronisch verlopen, en wordt in de praktijk vaak ingedeeld als HFrEF, HFmrEF of HFpEF op basis van de ejectiefractie en het onderliggende mechanisme.`}</Inline></p>
    </div>
  )
}
