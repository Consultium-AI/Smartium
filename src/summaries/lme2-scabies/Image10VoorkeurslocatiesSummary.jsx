import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10VoorkeurslocatiesSummary = () => {
  const tableOfContents = [
    { id: 'locaties', title: 'Voorkeurslocaties', icon: Stethoscope },
    { id: 'differentiaal', title: 'Differentiaaldiagnose', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Scabiës voorkeurslocaties"
      description="Typische locaties van scabiës op het lichaam en differentiaal met eczeem."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image10"
    >
      <section id="locaties" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Voorkeurslocaties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Scabiës heeft <strong>voorkeurslocaties</strong> op het lichaam: polsen (binnenkant en buitenkant), ellebogen, oksels, taille/gordellijn, liezen, binnenzijde dijen, knieën (voor en achter), onderrug/billen en bovenarmen.
          </p>
          
          <p>
            Wanneer de infectie zich verder uitbreidt, kan de huid <strong>diffuus</strong> zijn aangedaan.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="differentiaal" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Differentiaaldiagnose
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het klinisch beeld kan, samen met de klacht <strong>jeuk</strong>, erg lijken op <strong>eczeem</strong>. Differentiatie is belangrijk voor de juiste behandeling.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image10VoorkeurslocatiesSummary
