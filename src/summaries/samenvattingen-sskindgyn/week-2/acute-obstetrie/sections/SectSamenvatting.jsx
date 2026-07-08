import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Acute obstetrie draait om snel, gestructureerd handelen bij levensbedreigende problemen van moeder en foetus. De zwangere heeft fysiologische aanpassingen zoals een hoger bloedvolume, hogere cardiac output en een prothrombogene toestand. De foetus is volledig afhankelijk van de moeder en de placenta.`}</Inline></p>
      <PBody text={`Bij acute problemen gebruik je het **ABCDEF-principe**: eerst luchtweg, ademhaling en circulatie stabiliseren, daarna neurologie, blootstelling en foetale beoordeling. Vanaf 20 weken moet je altijd denken aan **left lateral tilt** of **manual uterine displacement** om vena cava-compressie op te heffen.`} />
      <PBody text={`Belangrijke ziektebeelden zijn eclampsie, solutio placentae, navelstrengprolaps en schouderdystocie. Steeds geldt: **moeder eerst**, want daarmee help je uiteindelijk ook de foetus het best.`} />
    </div>
  )
}
