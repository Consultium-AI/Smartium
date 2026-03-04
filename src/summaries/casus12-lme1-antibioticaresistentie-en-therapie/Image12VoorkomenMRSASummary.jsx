import { ShieldCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12VoorkomenMRSASummary = () => {
  const toc = [{ id: 'voorkomen', title: 'Voorkomen van MRSA', icon: ShieldCheck }]
  return (
    <SummaryLayout
      title="Voorkomen van MRSA"
      description="Strategieën om MRSA-kolonisatie en -infecties te voorkomen in Nederland."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 12"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image12"
    >
      <section id="voorkomen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Voorkomen van MRSA</h2>
        <p className="text-slate-700 mb-4">S. aureus koloniseert huid, neus en andere lichaamsdelen; circa 25% van de mensen is intermitterend of permanent gekoloniseerd. In Nederland is het aantal MRSA-dragers gelukkig zeer beperkt (&lt;1% van de gezonde populatie). Een MRSA-infectie kan niet met beta-lactam antibiotica worden behandeld; preventie is cruciaal.</p>
        <h3 className="font-bold text-slate-800 mb-2">Waardoor lage prevalentie in Nederland?</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Strenge richtlijnen: alleen antibiotica indien echt noodzakelijk</li>
          <li>Identificeren van mensen met hoog risico op MRSA-dragerschap (bijv. uit buitenlandse ziekenhuizen, varkensslachterijen)</li>
          <li>Behandelen van mensen met MRSA-dragerschap</li>
          <li>MRSA-dragers in het ziekenhuis in isolatie verplegen</li>
        </ul>
        <p className="text-slate-700 mt-4 text-sm">Het restrictieve antibioticabeleid en het Search &amp; Destroy-beleid (opsporen, isoleren, behandelen) in Nederland en Scandinavië leiden tot een veel lagere MRSA-prevalentie dan in buurlanden. Het MRSA-beleid wordt bepaald door het SRI (Samenwerkingsverband Richtlijnen Infectiepreventie).</p>
      </section>
    </SummaryLayout>
  )
}

export default Image12VoorkomenMRSASummary
