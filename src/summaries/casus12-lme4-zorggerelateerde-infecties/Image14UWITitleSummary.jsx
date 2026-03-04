import { Droplets } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14UWITitleSummary = () => {
  const toc = [{ id: 'uwi', title: 'Urineweginfecties', icon: Droplets }]
  return (
    <SummaryLayout
      title="Urineweginfecties (UWI)"
      description="Inleiding op urineweginfecties als zorggerelateerde infectie."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image14"
    >
      <section id="uwi" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Urineweginfecties</h2>
        <p className="text-slate-700">Urineweginfecties zijn een veelvoorkomende zorggerelateerde infectie. De volgende slide gaat in op het onderscheid tussen community-acquired en ziekenhuisgerelateerde UWI, en de meest voorkomende verwekker.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image14UWITitleSummary
