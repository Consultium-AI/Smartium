import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Erfelijkheid en gevolgen voor de familie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een erfelijke aandoening kunnen er gevolgen zijn voor het hele gezin. Als een jongen aangedaan is, zijn de moeder en eventuele zussen en broers mogelijk ook betrokken, afhankelijk van het overervingspatroon. Voorlichting hierover moet vooraf goed besproken en begrepen zijn.`}</Inline></p>
      <PBody text={`Bij een **X-gebonden aandoening** geldt:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`zoons van de moeder hebben **50% kans op de ziekte**;`}</Inline></li>
        <li><Inline>{`dochters van de moeder hebben **50% kans op dragerschap**;`}</Inline></li>
        <li><Inline>{`dochters kunnen later zelf weer risico geven aan hun kinderen.`}</Inline></li>
      </ul>
      <PBody text={`De mate van **lyonisatie** speelt hierbij een rol: dat is de inactivatie van één van de X-chromosomen.`} />
    </div>
  )
}
