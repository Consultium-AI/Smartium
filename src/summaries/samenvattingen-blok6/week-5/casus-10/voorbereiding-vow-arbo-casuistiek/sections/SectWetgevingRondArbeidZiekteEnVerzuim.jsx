import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wetgeving rond arbeid, ziekte en verzuim`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Werken heeft meestal positieve effecten op gezondheid en welzijn. Tegelijk kan ziekte het vermogen om te werken beperken, en werk kan zelf ook bijdragen aan ziekte of verzuim. Daarom bestaat er in Nederland een uitgebreid stelsel van wetgeving rond arbeid, ziekte en re-integratie. Dat stelsel is in de loop van de tijd ontstaan en steeds verder uitgebreid.`}</Inline></p>
      <PBody text={`De sociale wetgeving begon historisch met het **Kinderwetje van Van Houten** uit **1874**. Deze wet verbood arbeid in fabrieken voor kinderen tot 12 jaar. Dat was een belangrijke eerste stap in de bescherming van werknemers en laat zien hoe de sociale wetgeving zich ontwikkelde vanuit de bescherming tegen uitbuiting.`} />
      <PBody text={`Daarna kwamen in het begin van de twintigste eeuw de eerste sociale verzekeringswetten voor volwassenen. De **Ongevallenwet van 1901** dekte alleen het **risque professionel**: arbeidsongeschiktheid door een arbeidsongeval of beroepsziekte. De **Ziektewet van 1930** breidde dit uit met het **risque social**: arbeidsongeschiktheid door een oorzaak buiten het werk.`} />
    </div>
  )
}
