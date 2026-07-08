import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het lichamelijk onderzoek van de pasgeborene doe je het best bij een rustige, wakkere baby, liefst kort vóór een voeding en zonder dat het kind afkoelt. Je beoordeelt systematisch de algemene indruk, huid, schedel, gelaat, hals, thorax, buik, genitalia, rug, extremiteiten en het neurologisch functioneren. Belangrijke normale kenmerken zijn onder andere lichtroze huid, flexietonus, symmetrische spontane bewegingen, buikademhaling, een leverrand die vaak voelbaar is en aanwezige neonatale reflexen. Afwijkingen zoals icterus, cyanose, een bomberende of ingezonken fontanel, cephaalhematoom, caput succedaneum, asymmetrische mimiek, torticollis, afwijkende genitalia, spina bifida, klompvoet, heupdysplasie en hypotonie kunnen wijzen op een probleem dat verder beoordeeld moet worden.`}</Inline></p>
    </div>
  )
}
