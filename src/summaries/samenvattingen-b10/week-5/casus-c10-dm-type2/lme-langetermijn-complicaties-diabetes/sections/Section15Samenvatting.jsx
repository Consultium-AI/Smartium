import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Samenvatting`}</Inline></h3>
      <p><Inline>{`Langetermijncomplicaties van diabetes mellitus zijn vooral microvasculair en macrovasculair. Microvasculaire complicaties zijn retinopathie, nefropathie en neuropathie; macrovasculaire complicaties zijn onder andere myocardinfarct, CVA en claudicatio intermittens. Hyperglykemie speelt bij alle complicaties een centrale rol, samen met factoren zoals hoge bloeddruk, dyslipidemie en roken. Retinopathie geeft vaak lang geen klachten, nefropathie begint vaak met microalbuminurie en neuropathie kan leiden tot gevoelsverlies en voetulcera. HbA1c geeft de gemiddelde glucose van de afgelopen drie maanden weer en is belangrijk voor het instellen van de behandeling. Preventie bestaat uit goede glucosecontrole, behandeling van andere risicofactoren, gezond eten, voldoende bewegen en regelmatige controle van bloeddruk, voeten, nierfunctie, lipiden en ogen.`}</Inline></p>
    </div>
  )
}
