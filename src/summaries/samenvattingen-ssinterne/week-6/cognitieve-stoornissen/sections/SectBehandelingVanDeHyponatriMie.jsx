import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van de hyponatriëmie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat uit goede voeding met voldoende osmolen en zout, eventueel aangevuld met zouttabletten. Ook kan een 0,9% NaCl-infuus worden gegeven, maar dan moet je oppassen voor een plotselinge autocorrectie.`}</Inline></p>
      <PBody text={`Het natrium moet geleidelijk worden gecorrigeerd, ongeveer **8 mmol per 24 uur**. Dat is belangrijk omdat bij een chronische hyponatriëmie de hersenen zich aanpassen aan de lage osmolaliteit. Als je dan te snel corrigeert, kan **osmotisch demyelinisatiesyndroom** ontstaan, ook wel **centrale pontiene myelinolyse** genoemd.`} />
      <p className="leading-relaxed"><Inline>{`De eerste dagen moeten serum-natrium en urinewaarden daarom meerdere keren per dag gecontroleerd worden.`}</Inline></p>
    </div>
  )
}
