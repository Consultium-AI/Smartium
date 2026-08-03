import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Homeostatisch gereguleerde variabelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn een aantal variabelen in het lichaam die actief stabiel worden gehouden. De meest genoemde zijn:`}</Inline></p>
      <DataTable rows={[["Tabel 1. Veelvoorkomende homeostatisch gereguleerde variabelen"], ["---"], ["Lichaamstemperatuur"], ["Arteriële zuurstofspanning (PaO2)"], ["Arteriële koolstofdioxidespanning (PaCO2)"], ["Kaliumconcentratie in het bloed [K+]"], ["Calciumconcentratie in het bloed [Ca2+]"], ["pH van het bloed / [H+]"], ["Glucoseconcentratie in het bloed"], ["Gemiddelde arteriële bloeddruk"], ["Bloedvolume"], ["Bloedosmolariteit"]]} />
      <PBody text={`Deze variabelen zijn belangrijk omdat ze bijdragen aan het overleven van het organisme in een veranderende omgeving. Ze zorgen vooral voor een **optimale cellulaire omgeving voor enzymfunctie**. Enzymen werken namelijk alleen goed als de omstandigheden in het lichaam geschikt zijn, bijvoorbeeld bij een passende temperatuur en pH.`} />
      <p className="leading-relaxed"><Inline>{`Lichaamstemperatuur is een duidelijk voorbeeld. Als het kouder wordt, daalt de lichaamstemperatuur en gaat het lichaam rillen om warmte te maken. Als het te warm wordt, gaat het lichaam zweten om warmte kwijt te raken. Zo blijft de temperatuur rond 37°C.`}</Inline></p>
    </div>
  )
}
