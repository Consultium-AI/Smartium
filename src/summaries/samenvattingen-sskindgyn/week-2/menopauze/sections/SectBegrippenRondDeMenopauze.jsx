import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Begrippen rond de menopauze`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Rond de laatste levensfase van de menstruatie worden meerdere termen gebruikt. Die lijken op elkaar, maar betekenen niet precies hetzelfde. Het is belangrijk om ze goed uit elkaar te houden.`}</Inline></p>
      <PBody text={`De **menopauze** is de laatste natuurlijke bloeding uit het endometrium. Dat kun je pas achteraf vaststellen, namelijk nadat er **1 jaar geen menstruatie** meer is geweest. Pas dan weet je dat de laatste menstruatie echt de menopauze was.`} />
      <PBody text={`De **perimenopauze** is de levensfase waarin de ovariële hormoonproductie afneemt en waarin de eerste verschijnselen van de overgang ontstaan. In deze fase zie je veranderingen in het menstruatiepatroon, met wisselend ovulatoire en anovulatoire bloedingen. Ook kunnen opvliegers, nachtzweten, vermoeidheid en labiliteit optreden. Deze fase begint zodra de eerste klachten ontstaan en eindigt op het moment dat de laatste menstruatie, dus de menopauze, retrospectief is vastgesteld.`} />
      <PBody text={`De **postmenopauze** is de periode vanaf **1 jaar na de laatste menstruatie**. In deze fase is er een blijvende hypo-oestrogene toestand: de oestrogeenspiegels zijn laag, en dat geeft zowel klachten als gezondheidsgevolgen.`} />
      <PBody text={`De term **climacterium** wordt gebruikt voor de overgangsperiode waarin de hormonale veranderingen en klachten optreden. In de praktijk wordt dit vaak samen met perimenopauze gebruikt.`} />
      <SubHeading><Inline>{`Tabel 1. Belangrijke begrippen`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["Menopauze", "Laatste natuurlijke menstruatie, pas achteraf vast te stellen na 1 jaar amenorroe"], ["Perimenopauze / climacterium", "Fase met afnemende ovariële functie en overgangsklachten"], ["Postmenopauze", "Periode vanaf 1 jaar na de laatste menstruatie"]]} />
    </div>
  )
}
