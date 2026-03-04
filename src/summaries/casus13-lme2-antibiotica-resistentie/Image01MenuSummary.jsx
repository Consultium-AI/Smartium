import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image01MenuSummary = () => {
  const toc = [{ id: 'menu', title: 'Menu Antibioticaresistentie', icon: LayoutList }]
  return (
    <SummaryLayout
      title="Menu – Antibioticaresistentie"
      description="Introductie thema en overzicht van de e-module Antibioticaresistentie."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 1"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image01"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Introductie thema</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Resistentie voor antibiotica is het grote gevaar van de komende decennia. Door onnodig en ondeskundig gebruik van antibiotica neemt de resistentie tegen de huidige antibiotica snel toe. Op dit moment worden er geen nieuwe klassen antibiotica ontwikkeld. Als we het tij niet keren wordt er gevreesd voor 10 miljoen doden ten gevolge van antibioticaresistentie per jaar in het jaar 2050.
        </p>
        <p className="text-slate-700 mb-6 leading-relaxed">
          In deze e-module wordt ingegaan op oorzaken van antibioticaresistentie en op strategieën waarmee we resistentie proberen tegen te gaan. Deze e-module is een vervolg op de e-module Antibiotica Introductie.
        </p>
        <h3 className="font-bold text-slate-800 mb-2">Onderwerpen in deze e-learning</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Het ontstaan van resistentie</li>
          <li>Verschillende resistentiemechanismen</li>
        </ul>
        <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200 text-sm text-amber-800">
          <strong>Referentie:</strong> Will 10 Million People Die a Year due to Antimicrobial Resistance by 2050? 2016 De Kraker et al. PLoS Med. 13(11) November 29.
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image01MenuSummary
