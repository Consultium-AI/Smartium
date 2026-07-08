import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Registratie van het CTG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn twee manieren om een CTG te registreren: uitwendig en inwendig.`}</Inline></p>
      <SubHeading><Inline>{`Uitwendige registratie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij uitwendige registratie wordt de foetale hartfrequentie gemeten met een echo-Dopplertransducer. De uteruscontracties worden gemeten met een tocodynamometer.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De echo-Doppler registreert signalen van de bloedstroom vanuit het foetale hart en de beweging van de hartkleppen. De transducer wordt op de buik van de moeder geplaatst. Het CTG-apparaat verwerkt het signaal elektronisch en berekent de hartfrequentie uit de tijd tussen twee hartslagen.`}</Inline></p>
      <SubHeading><Inline>{`Inwendige registratie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij inwendige registratie wordt de foetale hartfrequentie gemeten met een caputelektrode. De uterusactiviteit wordt gemeten met een elektronische druktransducer of vloeistof-kolom druktransducer.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor inwendige registratie moeten de vliezen gebroken zijn en moet het voorliggend deel bereikbaar zijn. De hartfrequentie wordt dan bepaald uit de tijd tussen twee R-toppen van de QRS-complexen.`}</Inline></p>
      <SubHeading><Inline>{`Benodigdheden bij uitwendige registratie`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 1. Benodigdheden voor uitwendig CTG"], ["---"], ["Echo-dopplertransducer"], ["Tocodynamometer"], ["Ultrasone geleidingsgel"], ["Elastische fixatiebanden"], ["Registratiepapier of aansluiting op centrale dataopslag"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een gemelli-graviditeit zijn twee echo-dopplertransducers nodig.`}</Inline></p>
    </div>
  )
}
