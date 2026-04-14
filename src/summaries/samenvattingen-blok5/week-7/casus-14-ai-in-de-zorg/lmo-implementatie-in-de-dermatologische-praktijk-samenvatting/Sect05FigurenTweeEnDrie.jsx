export default function Sect05FigurenTweeEnDrie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat leren we van figuur 2 en 3?</h2>
      <p>
        Figuur 2 laat vooral zien dat zowel de app als de huisarts een deel van de benigne en premaligne/maligne laesies correct classificeerden, maar ook dat er fouten mogelijk zijn. De app haalde in deze pilot een sensitiviteit van 90,9% en een specificiteit van 80,0%. De huisartsen zaten in deze kleine groep op 80,0% sensitiviteit en 80,0% specificiteit. Dat maakt duidelijk dat de app potentieel bruikbaar is, maar ook zeker niet foutloos.
      </p>
      <p className="whitespace-pre-line">
        {`Figuur 3 is vooral belangrijk voor de implementatiepraktijk. Daaruit blijkt dat succesvol gebruik van de app niet alleen afhangt van de technologie, maar ook van de 
mens en de context
. Gebruik ging lastiger bij moeilijk bereikbare plekjes op het lichaam, bij laesies die lastig te fotograferen zijn, bij patiënten met minder digitale vaardigheden en wanneer er tijdsdruk was. Gebruik ging juist makkelijker bij technisch vaardige patiënten en wanneer de app thuis, in rust, gebruikt kon worden. Met andere woorden: implementatie is niet alleen een algoritmeprobleem, maar ook een gebruikersprobleem.`}
      </p>
    </div>
  )
}
