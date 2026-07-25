import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Overzicht van de belangrijkste spectrumverschillen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om de middelen beter te onthouden, helpt het om ze te koppelen aan bacteriegroepen. Hieronder staat het overzicht in woorden samengevat.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Globaal spectrum van de belangrijkste antibiotica`}</Inline></SubHeading>
      <DataTable rows={[["Antibioticum", "Belangrijk spectrum"], ["Penicilline", "Streptokokken, N. meningitidis, anaeroben uit de keel"], ["Flucloxacilline", "S. aureus, streptokokken"], ["Amoxicilline", "Streptokokken, E. faecalis, Enterobacterales zonder ESBL/AmpC, N. meningitidis, anaeroben uit de keel"], ["Augmentin", "S. aureus, streptokokken, E. faecalis, N. meningitidis"], ["Piperacilline-tazobactam", "S. aureus, streptokokken, E. faecalis, Enterobacterales zonder ESBL/AmpC, Pseudomonas, N. meningitidis"], ["Cefazoline", "S. aureus, streptokokken"], ["Cefuroxim", "S. aureus, streptokokken"], ["Ceftriaxon", "S. aureus, streptokokken, Enterobacterales zonder ESBL/AmpC, N. meningitidis"], ["Ceftazidim", "Enterobacterales zonder ESBL/AmpC, Pseudomonas"], ["Meropenem", "Zeer breed, inclusief ESBL/AmpC, Pseudomonas en anaeroben"], ["Ciprofloxacin", "Enterobacterales, Pseudomonas, intracellulaire verwekkers"], ["Vancomycine", "S. aureus, MRSA, streptokokken, enterokokken"]]} />
      <PBody text={`Bij **Enterobacterales** gaat het om gramnegatieve staven zoals *E. coli* en *Klebsiella*. **ESBL** en **AmpC** zijn resistentiemechanismen waardoor bacteriën ongevoelig worden voor penicillines en cefalosporines.`} />
      <PBody text={`Bij **intracellulaire verwekkers** gaat het om bacteriën zoals *Mycoplasma, Legionella, Coxiella* en *Chlamydia*. Die worden vooral bestreden met middelen die hoge intracellulaire spiegels geven, zoals macroliden, chinolonen en tetracyclines.`} />
      <PBody text={`**Aandacht-vraagje:** wat betekent “x” in het overzicht?
**Mini-antwoord:** dat het antibioticum empirisch ingezet kan worden tegen die bacterie.`} />
    </div>
  )
}
