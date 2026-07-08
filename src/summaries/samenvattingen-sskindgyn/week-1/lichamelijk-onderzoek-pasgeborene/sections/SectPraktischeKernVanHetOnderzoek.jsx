import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Praktische kern van het onderzoek`}</Inline></SubHeading>
      <PBody text={`Het lichamelijk onderzoek van de pasgeborene is dus vooral een **systematische totaalbeoordeling**. Je kijkt niet alleen naar één orgaansysteem, maar naar het hele kind: kleur, ademhaling, houding, schedel, gelaat, hals, thorax, buik, genitalia, rug, extremiteiten en neurologische reflexen. Juist bij een pasgeborene kunnen kleine afwijkingen belangrijk zijn, omdat ze kunnen wijzen op geboortetrauma, aangeboren afwijkingen of een onderliggende aandoening.`} />
      <p className="leading-relaxed"><Inline>{`Het onderzoek moet bovendien altijd worden aangepast aan de leeftijd van het kind. Bij een pasgeborene hoort daar ook bij dat je rekening houdt met de normale kenmerken van deze leeftijd: flexietonus, buikademhaling, zichtbare leverrand, reflexen en de specifieke huid- en schedelkenmerken.`}</Inline></p>
    </div>
  )
}
