import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`COPD is een chronische, vaak progressieve longaandoening met luchtwegobstructie door afwijkingen in luchtwegen en/of alveoli. Roken is de belangrijkste oorzaak, maar ook genetische factoren, afwijkende longontwikkeling, infecties, astma en omgevingsblootstelling spelen een rol. De diagnose stel je met passende klachten, risicofactoren en spirometrie. De ernst wordt ingedeeld met de GOLD-classificatie en aangevuld met klachten, exacerbaties en lichamelijk onderzoek. Behandeling bestaat uit rookstop, beweging, vaccinaties, luchtwegverwijders en zo nodig ICS of zuurstof. Bij een exacerbatie geef je kortwerkende luchtwegverwijders en prednisolon.`}</Inline></p>
    </div>
  )
}
