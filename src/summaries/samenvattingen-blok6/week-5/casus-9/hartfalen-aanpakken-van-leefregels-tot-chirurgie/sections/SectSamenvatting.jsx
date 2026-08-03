import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen is een progressieve aandoening waarbij het hart niet genoeg bloed rondpompt. De behandeling is gericht op minder klachten, minder opnames, minder verdere schade en een betere prognose. Bij HFrEF zijn vier medicamenteuze pijlers belangrijk: RAAS-remming, β-blokkers, MRA’s en SGLT2-remmers. Die start je vroeg en bouw je zorgvuldig op. Lisdiuretica gebruik je vooral bij vochtretentie voor symptoomcontrole.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Acuut hartfalen vraagt snelle herkenning en behandeling, vooral bij astma cardiale of cardiogene shock. Daarna volgt, zodra de patiënt stabiel is, de overgang naar chronische behandeling. Bij HFmrEF lijkt de aanpak deels op HFrEF, terwijl bij HFpEF vooral comorbiditeiten en symptoomcontrole centraal staan. Leefregels, zelfzorg, monitoring en telemonitoring zijn belangrijke onderdelen van de zorg. In een vergevorderd stadium kunnen geavanceerde therapieën zoals ICD, CRT, TAVI, TEER, LVAD of harttransplantatie nodig zijn.`}</Inline></p>
    </div>
  )
}
