import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`1. Erysipelas en cellulitis`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Bij een scherp begrensde roodheid, warmte, zwelling en pijn is erysipelas zeer waarschijnlijk. Een klein wondje, bijvoorbeeld na scheren, kan de ingang zijn. Cellulitis is ook een mogelijkheid, maar geeft vaker een meer diffuse roodheid.`}</Inline>
      </p>
      <PBody
        text={`**Waarom is dit belangrijk?**
Omdat erysipelas klinisch wordt herkend en snel behandeld moet worden om uitbreiding en complicaties te voorkomen.`}
      />
      <SubHeading><Inline>{`2. Kattenkrabziekte en andere infectieuze lymfeklierreacties`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Bij contact met katten kan kattenkrabziekte meespelen. Dan denk je aan lymfadenopathie. Ook bacteriële of virale lymfadenitis kan een rol spelen. Toch past een scherp begrensde huidroodheid minder goed bij een puur lymfeklierprobleem.`}</Inline>
      </p>
      <SubHeading><Inline>{`3. Hidradenitis suppurativa`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Hidradenitis suppurativa is een chronische, recidiverende ontsteking van vooral oksels en liezen. Je denkt eraan bij terugkerende pijnlijke ontstekingen, noduli en soms comedonen, de bekende mee-eters. De lokalisatie in de oksel past goed, en een chronisch of terugkerend beloop maakt deze diagnose waarschijnlijker.`}</Inline>
      </p>
      <SubHeading><Inline>{`4. Abces of furunkel`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Een abces of furunkel kan rood, warm en pijnlijk zijn. Vaak is er dan een duidelijke zwelling of fluctuatie, soms met pus. Een furunkel is een steenpuist en is infectieus van aard. Als het beeld recidiverend is en op typische plaatsen voorkomt, schuift de gedachte meer richting hidradenitis suppurativa.`}</Inline>
      </p>
      <SubHeading><Inline>{`5. Maligne oorzaken`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Een vergrote okselklier kan passen bij recidief mammacarcinoom of bij een maligne lymfoom. Toch geven deze aandoeningen meestal niet zomaar een rood, warm en pijnlijk geheel van de arm. Een harde of vergrote klier zonder duidelijke huidinfectie maakt deze oorzaken wel belangrijk om aan te denken.`}</Inline>
      </p>
      <SubHeading><Inline>{`6. Diep veneuze trombose`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Bij een dik, rood en pijnlijk been moet je altijd aan DVT denken. In deze casus wordt dat expliciet genoemd als iets dat je altijd moet overwegen bij zwelling en roodheid. Bij een armbeeld kan het minder voor de hand liggen, maar de gedachtegang blijft hetzelfde: zwelling en roodheid kunnen ook vasculair zijn.`}</Inline>
      </p>
    </div>
  )
}
