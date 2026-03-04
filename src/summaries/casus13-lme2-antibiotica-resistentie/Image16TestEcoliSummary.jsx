import { FlaskConical } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16TestEcoliSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'casus', title: 'Casus E. coli urosepsis', icon: FlaskConical },
    { id: 'interpretatie', title: 'Interpretatie gevoeligheidsspectrum', icon: FlaskConical },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Test je kennis – E. coli"
      description="Interpretatie van het gevoeligheidsspectrum bij E. coli urosepsis."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 16"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image16"
    >
      <section id="casus" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Antibiotica bij E. coli</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Een 65-jarige man wordt opgenomen met een urosepsis. Uit de urine wordt een E. coli gekweekt met het volgende gevoeligheidsspectrum:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-2">
          <li>Amoxicilline <strong>R</strong> (resistent)</li>
          <li>Augmentin <strong>S</strong> (gevoelig)</li>
          <li>Ceftriaxon <strong>S</strong> (gevoelig)</li>
          <li>Meropenem <strong>S</strong> (gevoelig)</li>
        </ul>
        <p className="text-slate-600 text-sm">* R = resistent; S = gevoelig (= susceptibel)</p>
      </section>
      <section id="interpretatie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Welk bètalactamase maakt deze bacterie?</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Het feit dat amoxicilline R en Augmentin S is, pleit voor <strong>smalspectrum bètalactamase</strong>. Bij ESBL zou je verwachten dat ceftriaxon resistent is, en bij carbapenemase dat ook meropenem resistent is.
        </p>
        <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
          <h4 className="font-bold text-emerald-800 mb-2">Conclusie</h4>
          <p className="text-emerald-700 text-sm">Smalspectrum bètalactamase: inactiveren alleen sommige penicillines; Augmentin (met bètalactamaseremmer) blijft werkzaam.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image16TestEcoliSummary
