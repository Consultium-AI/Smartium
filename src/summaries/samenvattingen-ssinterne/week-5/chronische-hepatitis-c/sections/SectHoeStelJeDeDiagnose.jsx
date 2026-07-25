import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe stel je de diagnose?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose hepatitis C stel je niet alleen op basis van leverenzymen. Verhoogde ALAT en ASAT kunnen passen bij hepatitis C, maar zijn niet altijd verhoogd. Ook antistoffen tegen hepatitis C, de anti-HCV, zijn niet voldoende om te zeggen dat iemand op dit moment een actieve infectie heeft. Antistoffen kunnen namelijk ook aanwezig zijn na een doorgemaakte infectie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De echte bevestiging van een actieve hepatitis C-infectie gebeurt met het aantonen van het virus zelf: HCV-RNA, meestal met PCR.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke diagnostische testen bij hepatitis C`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Betekenis"], ["Anti-HCV", "Laat zien dat iemand ooit in contact is geweest met hepatitis C"], ["HCV-RNA", "Laat zien dat het virus aanwezig is en er dus een actieve infectie is"], ["ALAT", "Kan verhoogd zijn bij leverontsteking, maar is niet altijd afwijkend"], ["Genotype", "Wordt bepaald in het kader van behandeling"]]} />
      <PBody text={`**Aandachtsvraag:** Waarom zijn antistoffen alleen niet genoeg?
**Mini-antwoord:** Omdat anti-HCV ook positief kan zijn na een doorgemaakte infectie, zonder dat het virus nog aanwezig is.`} />
    </div>
  )
}
