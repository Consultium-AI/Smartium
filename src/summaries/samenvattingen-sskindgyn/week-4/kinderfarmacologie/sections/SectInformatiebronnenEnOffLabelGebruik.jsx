import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Informatiebronnen en off-label gebruik`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor kinderdoseringen is de juiste informatiebron heel belangrijk. Niet elke bron is even geschikt.`}</Inline></p>
      <PBody text={`Het **Kinderformularium** heeft hier de voorkeur. Daarin staan dosisadviezen, toedieningsvormen, hulpstoffen, off-label informatie en vaak ook praktische instructies. Andere bronnen die soms worden gebruikt zijn het **Pediatric & Neonatal Dosage Handbook** en de **BNF for Children**.`} />
      <p className="leading-relaxed"><Inline>{`De officiële bijsluitertekst kan soms melden dat er voor kinderen geen goede dosis bekend is. Toch kan het Kinderformularium dan wel een bruikbaar doseeradvies geven, bijvoorbeeld bij ramipril. Dat laat zien dat je altijd de juiste bron moet kiezen.`}</Inline></p>
    </div>
  )
}
