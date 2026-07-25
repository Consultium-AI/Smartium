import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus: mevrouw De Vries`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Mevrouw De Vries is 76 jaar en wordt opgenomen na een val. Zij heeft hypertensie, een myocardinfarct in de voorgeschiedenis en chronische nierinsufficiëntie. In de anamnese valt op dat zij in drie maanden 10 kilo onbedoeld is afgevallen en minder eetlust heeft. Misselijkheid, braken of passageklachten zijn er niet.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek oogt zij verzwakt en vermoeid. Haar BMI is 26,2, dus op zichzelf geen lage BMI. Toch heeft zij duidelijk moeite om uit bed en uit de stoel te komen en heeft zij veel steun nodig. In het laboratorium zijn onder andere ureum en creatinine verhoogd, de eGFR is verlaagd en het albumine is laag.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Deze combinatie maakt duidelijk dat je niet alleen naar het gewicht of de BMI moet kijken, maar ook naar het gewichtsverloop, de functie en de algehele klinische indruk.`}</Inline></p>
    </div>
  )
}
