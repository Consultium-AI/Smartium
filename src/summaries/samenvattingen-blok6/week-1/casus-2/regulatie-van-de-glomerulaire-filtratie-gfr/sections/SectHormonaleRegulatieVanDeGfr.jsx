import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hormonale regulatie van de GFR`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Autoregulatie houdt de GFR stabiel, maar de nier kan ook van buitenaf worden beïnvloed. Dat is nodig om het inwendige milieu goed te kunnen regelen. Verschillende hormonen spelen hierbij een rol.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Hormonen en hun effect op de GFR`}</Inline></SubHeading>
      <DataTable rows={[["Hormoon", "Effect op de GFR", "Werkingsmechanisme"], ["Angiotensine II", "Verhoogt de GFR", "Vasoconstrictie van de efferente arteriole"], ["ANP", "Verhoogt de GFR", "Vasodilatatie van de afferente en efferente arteriolen"], ["ADH / vasopressine", "Vooral vasoconstrictie in het diepe merg", "Behoud van de concentratiegradiënt"], ["Adrenaline / noradrenaline", "Verlaagt de GFR", "Vasoconstrictie van de afferente arteriole"]]} />
      <SubHeading><Inline>{`Angiotensine II`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Angiotensine II verhoogt de GFR door vasoconstrictie van de efferente arteriole. Daardoor neemt de druk in de glomerulaire capillairen toe. Het gevolg is dat de filtratie wordt ondersteund.`}</Inline></p>
      <SubHeading><Inline>{`ANP`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Atriaal natriuretisch peptide, oftewel ANP, verhoogt de GFR door vasodilatatie van zowel de afferente als de efferente arteriole. Daarnaast remt ANP de secretie van renine. Het effect past bij een situatie waarin het lichaam juist meer natrium en water wil uitscheiden.`}</Inline></p>
      <SubHeading><Inline>{`ADH / vasopressine`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ADH heeft een wat bijzondere rol. Het werkt wel enigszins op de vaten van de glomerulus, maar het belangrijkste effect ligt in het diepe merg van de nier. Daar veroorzaakt het vasoconstrictie, waardoor de concentratiegradiënt behouden blijft. Zo kan de nier geconcentreerde urine blijven maken. In extreme situaties heeft ADH ook een systemisch vasoconstrictief effect; daarom heet het ook vasopressine.`}</Inline></p>
      <SubHeading><Inline>{`Adrenaline en noradrenaline`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Adrenaline en noradrenaline verlagen de GFR door vasoconstrictie van de afferente arteriole. In situaties waarin het sympathisch zenuwstelsel sterk geactiveerd is, zoals bij sepsis, draagt dit bij aan een verminderde doorbloeding van de nier. Daardoor is de nier gevoelig voor ischemie bij forse hypotensie of hypoperfusie.`}</Inline></p>
    </div>
  )
}
