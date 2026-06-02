import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`1. Veneuze insufficiëntie en varices`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Een man van 65 jaar met een zwaar, vermoeid been en zichtbare varices past goed bij **oppervlakkige veneuze insufficiëntie**. Het beeld past vooral als er sprake is van:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een **staand beroep**;`}</Inline></li>
        <li><Inline>{`klachten die al **lang bestaan**;`}</Inline></li>
        <li><Inline>{`zichtbare **varices**;`}</Inline></li>
        <li><Inline>{`oedeem of een zwaar gevoel in het been.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Bij veneuze insufficiëntie werkt de **voet- en kuitspierpomp** onvoldoende. Daardoor stijgt de veneuze druk in het been. Dit heet **veneuze hypertensie**. Die verhoogde druk kan leiden tot:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`oedeem;`}</Inline></li>
        <li><Inline>{`lipodermatosclerose;`}</Inline></li>
        <li><Inline>{`ulcus cruris;`}</Inline></li>
        <li><Inline>{`recidiverende wondjes rond de enkels.`}</Inline></li>
      </ul>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Tabel 2. Veneuze insufficiëntie versus andere oorzaken`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Kenmerk', 'Veneuze insufficiëntie', 'Trombose', 'Hartfalen'],
          ['---', '---', '---', '---'],
          ['Duur', 'vaak chronisch', 'vaak acuut/subacuut', 'vaak subacuut'],
          ['Lateralisatie', 'vaak bilateraal of chronisch lokaal', 'vaak unilateraal', 'vaak bilateraal'],
          ['Pijn', 'zwaar, moe, soms pijnlijk', 'pijnlijk, gespannen', 'meestal minder lokaal pijnlijk'],
          ['Roodheid', 'meestal niet prominent', 'kan soms aanwezig zijn', 'niet typisch'],
          ['Aanvullend', 'varices, huidveranderingen', 'echo/D-dimeer', 'ECG, NT-proBNP, echo'],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Behandeling bestaat uit:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**therapeutische elastische kousen**;`}</Inline></li>
        <li>
          <Inline>{`eventueel behandeling van de varices, zoals **sclerotherapie**, **flebectomie** of **endoveneuze ablatie**;`}</Inline>
        </li>
        <li><Inline>{`bij ernstige veneuze problematiek ook **compressietherapie**.`}</Inline></li>
      </ul>
    </div>
  )
}
