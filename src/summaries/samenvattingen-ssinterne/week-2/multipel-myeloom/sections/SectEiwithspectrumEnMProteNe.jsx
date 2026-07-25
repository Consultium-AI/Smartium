import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Eiwithspectrum en M-proteïne`}</Inline></SubHeading>
      <PBody text={`Omdat het totaal eiwit verhoogd is, wordt een **eiwithspectrum** aangevraagd. Dit onderzoek laat het patroon van de verschillende eiwitten in het bloed zien. Daarbij wordt gebruikgemaakt van agarosegel en elektrische lading.`} />
      <PBody text={`Bij multipel myeloom zie je in het eiwithspectrum een **piek in het gammagebied**. Die piek ontstaat doordat er één soort antistof in grote hoeveelheid wordt gemaakt door veel plasmacellen die allemaal van één cel afstammen. Zo’n enkele antistof heet een **M-proteïne** of **paraproteïne**.`} />
      <SubHeading><Inline>{`Tabel 1. Belangrijke begrippen bij het eiwitonderzoek`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["Eiwithspectrum", "Onderzoek waarmee het patroon van eiwitten in het bloed zichtbaar wordt"], ["Gammagebied", "Deel van het spectrum waar antistoffen zichtbaar zijn"], ["M-proteïne / paraproteïne", "Eén monoklonale antistof die in grote hoeveelheid wordt geproduceerd"]]} />
    </div>
  )
}
