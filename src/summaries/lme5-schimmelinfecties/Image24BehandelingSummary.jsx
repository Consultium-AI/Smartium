import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image24BehandelingSummary = () => {
  const tableOfContents = [
    { id: 'behandeling', title: 'Behandeling', icon: Pill },
  ]

  return (
    <SummaryLayout
      title="Behandeling – Schimmelinfecties"
      description="Antimycotica: topicale en orale behandeling; gevoeligheid per verwekker."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 24"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image24"
    >
      <section id="behandeling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Pill className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Algemene aanpak</h4>
            <p className="text-primary-700 text-sm mb-3">
              Er zijn meerdere medicamenten beschikbaar die schimmeldodend en/of groeiremmend zijn voor schimmels en gisten (antimycotica ofwel antifungale therapie). Verreweg de meeste schimmelinfecties van de huid worden behandeld met een crème waarin een antimycoticum zit.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Bij uitgebreide plekken over het lichaam of bij niet reageren op topicale therapie kan ook een oraal antimycoticum worden gegeven. Orale antimycotica worden ook gegeven bij tinea capitis, om verlittekenende kale plekken te voorkomen.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Gevoeligheid per verwekker</h4>
            <p className="text-teal-700 text-sm mb-2">
              Per verwekker kan de gevoeligheid anders zijn. De meeste gisten (waaronder Candida en Malassezia) zijn niet gevoelig voor terbinafine, maar wel voor azolen. Voorbeelden van azolen: clotrimazol, miconazol, fluconazol. Infecties door dermatofyten zijn over het algemeen gevoelig voor terbinafine en azolen.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Niet altijd medicatie nodig</h4>
            <p className="text-amber-700 text-sm mb-2">
              Bij tinea pedis kan het goed drooghouden van de voeten soms voldoende zijn; indien onvoldoende kan een antimycotische crème worden overwogen. Onychomycose wordt soms vooral als esthetisch probleem gezien; kort houden en vijlen van de nagels kan hinderlijke klachten voorkomen. Indien behandeling gewenst of noodzakelijk is, wordt dit met orale middelen gedaan, omdat topicale behandeling niet genoeg doordringt in de nagelplaat.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image24BehandelingSummary
