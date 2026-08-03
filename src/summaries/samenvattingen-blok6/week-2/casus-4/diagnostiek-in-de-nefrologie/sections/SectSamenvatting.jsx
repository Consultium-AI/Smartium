import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Radiologische diagnostiek in de nefrologie is een aanvulling op anamnese, lichamelijk onderzoek en laboratoriumonderzoek. Echografie is vaak de eerste stap, omdat het snel en eenvoudig antwoord geeft op basale vragen. CT is vooral geschikt voor nierstenen en massa’s, MRI voor nierarteriestenosen en het meten van cystevolume, en nierscintigrafie voor functieverdeling en urinelekkage.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een nierbiopsie is nodig als de diagnose nog onduidelijk is of als je de prognose en behandelrespons beter wilt inschatten. Omdat de nier sterk doorbloed is, bestaat er altijd bloedingsrisico. Daarom moet je vooraf letten op antistolling, stollingsproblemen, hypertensie, anemie, gestoorde nierfunctie en andere risicofactoren.`}</Inline></p>
    </div>
  )
}
