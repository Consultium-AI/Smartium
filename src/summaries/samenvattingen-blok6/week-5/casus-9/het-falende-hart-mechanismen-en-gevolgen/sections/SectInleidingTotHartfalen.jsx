import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inleiding tot hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen is een klinisch syndroom waarbij het hart niet meer voldoende in staat is om het lichaam van genoeg bloed te voorzien. Dat kan komen door een probleem met de knijpkracht van het hart, met de vulling van het hart, of met allebei tegelijk. Het gaat dus niet alleen om “een zwak hart”, maar om een verstoring van de normale pompfunctie waardoor klachten en tekenen ontstaan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De definitie die je moet onthouden is dat hartfalen wordt gekenmerkt door typische symptomen, zoals dyspneu, vermoeidheid en enkeloedeem, en/of typische tekenen, zoals verhoogde veneuze druk, crepitaties en perifeer oedeem. De oorzaak ligt in een structurele en/of functionele afwijking van het hart, met bewijs van verhoogde vullingsdrukken of een verminderde cardiac output.`}</Inline></p>
      <PBody text={`**Typische klachten en tekenen bij hartfalen**`} />
      <DataTable rows={[["Symptomen", "Tekenen"], ["Dyspneu, orthopneu, vermoeidheid, enkeloedeem", "Gestuwde halsvenen, crepitaties, perifeer oedeem"]]} />
      <p className="leading-relaxed"><Inline>{`Hartfalen is bovendien een veelvoorkomend probleem, vooral bij oudere volwassenen. In Nederland leven ruim 240.000 mensen met hartfalen, en elk jaar krijgen tienduizenden mensen deze diagnose. De aandoening komt even vaak voor bij mannen als bij vrouwen, maar de gevolgen zijn groot: veel ziekenhuisopnames, een hoge sterfte en een duidelijke toename van de ziektelast door vergrijzing en toename van risicofactoren zoals hypertensie, diabetes en obesitas.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is hartfalen zo belangrijk in de kliniek?
**Mini-antwoord:** Omdat het vaak voorkomt, vaak pas laat herkend wordt en een slechte prognose heeft.`} />
    </div>
  )
}
