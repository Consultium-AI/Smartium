import { FileWarning } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08MeldenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'melden', title: 'Wat gebeurt er na een incident? – Melden', icon: FileWarning }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Wat gebeurt er na een incident? – Melden"
      description="Calamiteiten, meldplicht en blame-free rapporteren."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image08"
    >
      <section id="melden" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Melden</h2>
        <p className="text-slate-700 mb-4"><strong>Calamiteit:</strong> Een niet-beoogde of onverwachte gebeurtenis die betrekking heeft op de kwaliteit van de zorg en die heeft geleid tot de dood of ernstig schadelijk gevolg voor een cliënt. Calamiteiten moeten volgens de Wkkgz aan de Inspectie Gezondheidszorg en Jeugd worden gemeld.</p>
        <p className="text-slate-700 mb-4">Het doel van melden is leren en maatregelen nemen om vergelijkbare fouten te voorkomen. <strong>Belangrijk:</strong> melden is &apos;blame free&apos; – zorgmedewerkers kunnen veilig melden zonder disciplinaire maatregelen.</p>
        <p className="text-slate-700 mb-2">De naamgeving van incidentmeldingen verschilt per ziekenhuis:</p>
        <ul className="list-disc pl-6 text-slate-700">
          <li>MIP = melding incident patiëntenzorg</li>
          <li>VIM = veilige incidentmelding</li>
          <li>FOBO = fouten, ongelukken en bijna-ongelukken</li>
          <li>FONA = fouten, ongelukken en near-accidents</li>
        </ul>
        <p className="text-slate-700 mt-4">Circa <strong>30%</strong> van de MIP-meldingen is medicatiegerelateerd.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image08MeldenSummary
