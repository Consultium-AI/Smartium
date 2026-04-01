export default function Sect07FicksLawEnFactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{"Fick's law en factoren die opname bepalen"}</h2>
      <p>
        De opname van geneesmiddelen via de huid is beperkt, en die beperking wordt vaak beschreven met{" "}
        {"Fick's law"}.
        Dit is een vereenvoudigd model. Het geeft aan dat de absorptiesnelheid afhangt van meerdere factoren:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de concentratie van het geneesmiddel;</li>
        <li>de verdelingscoëfficiënt;</li>
        <li>de diffusiecoëfficiënt;</li>
        <li>de dikte van het stratum corneum.</li>
      </ul>
      <p>In formulevorm:</p>
      <p className="font-mono text-slate-900 dark:text-slate-100">J ∝ Cveh • Km • D / x</p>
      <p>Daarbij staat:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>J voor absorptiesnelheid;</li>
        <li>Cveh voor de concentratie van het geneesmiddel in de vehicle;</li>
        <li>Km voor de partitioning constant;</li>
        <li>D voor de diffusiecoëfficiënt;</li>
        <li>x voor de dikte van het stratum corneum.</li>
      </ul>
      <p>
        De partitioning constant of verdelingscoëfficiënt beschrijft hoe graag een stof van het ene medium naar het
        andere gaat. Dit zegt iets over de hydrofobiciteit of lipofobiciteit van een stof.
      </p>
      <p>
        De diffusiecoëfficiënt zegt iets over de snelheid waarmee moleculen of ionen zich door een medium verspreiden door
        diffusie. Diffusie betekent dat deeltjes zich verplaatsen van een gebied met hoge concentratie naar een gebied met
        lage concentratie, door hun willekeurige thermische beweging.
      </p>
    </div>
  )
}
