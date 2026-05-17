export default function Sect04ChronischeBuikpijn() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Chronische buikpijn: vaak functioneel, maar kijk naar alarmsignalen
      </h2>
      <p>
        Chronische of recidiverende buikpijn is een veelvoorkomend probleem op de kinderleeftijd. Een veel gehanteerde
        definitie is:{' '}
        <strong className="text-slate-900 dark:text-slate-100">
          episodes van buikpijn minimaal 4 keer per maand, die de normale activiteiten in de weg staan, gedurende
          minimaal 2 maanden
        </strong>
        .
      </p>
      <p>
        Ongeveer 10% van de kinderen op schoolleeftijd heeft deze klachten. Meestal zit de pijn rond de navel. In minder
        dan 10% is er een organische oorzaak; en van die organische oorzaken is ongeveer de helft obstipatie.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> wanneer denk je juist aan
          functionele buikpijn?
          <br />
          <em>Kort antwoord:</em> als groei, lichamelijk onderzoek, ontlasting en functioneren tussendoor normaal zijn en
          alarmsignalen ontbreken.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Wanneer past het bij functionele buikpijn?
        </h3>
        <p>Functionele buikpijn is waarschijnlijker bij:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>normale groei en ontwikkeling;</li>
          <li>normaal lichamelijk onderzoek;</li>
          <li>normale ontlasting;</li>
          <li>normaal functioneren tussen de pijnaanvallen;</li>
          <li>afwezigheid van alarmsignalen.</li>
        </ul>
        <p>
          Functionele buikpijn valt vaak onder functionele abdominale pijnstoornissen. Daarin kunnen onder andere prikkelbare
          darm syndroom, buikmigraine en functionele dyspepsie voorkomen. Er is veel overlap tussen deze beelden.
        </p>
        <p>
          De ontstaanswijze wordt gezien als een combinatie van factoren. Er kunnen{' '}
          <strong className="text-slate-900 dark:text-slate-100">sensitiserende psychosociale gebeurtenissen</strong> zijn,
          zoals depressie, angst, gezinsstress, copingstijl, secundaire winst, een voorgeschiedenis van mishandeling en
          stress. Daarnaast kunnen <strong className="text-slate-900 dark:text-slate-100">sensitiserende medische gebeurtenissen</strong>{' '}
          meespelen, zoals distensie, infectie, allergieën, inflammatie, veranderde microbiota en motiliteitsstoornissen.
          Dit leidt tot veranderde pijnverwerking en viscerale hypersensitiviteit.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Alarmsignalen bij chronische buikpijn
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Alarmsignaal
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Waarom het belangrijk is
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">groeivertraging</td>
                <td className="px-4 py-3 align-top">wijst op een mogelijk organisch probleem</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">pijn niet rond de navel</td>
                <td className="px-4 py-3 align-top">minder passend bij functionele buikpijn</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">braken</td>
                <td className="px-4 py-3 align-top">aanleiding voor verder onderzoek</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">{`\u2019s nachts wakker worden van pijn`}</td>
                <td className="px-4 py-3 align-top">alarmsignaal</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">positieve familie-anamnese voor IBD</td>
                <td className="px-4 py-3 align-top">verhoogde verdenking op IBD</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">rectaal bloedverlies of bloedbraken</td>
                <td className="px-4 py-3 align-top">mogelijk organische oorzaak</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">koorts</td>
                <td className="px-4 py-3 align-top">kan wijzen op inflammatie of infectie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">gewrichtsklachten</td>
                <td className="px-4 py-3 align-top">kan passen bij IBD</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">recente terugkeer uit de tropen</td>
                <td className="px-4 py-3 align-top">denk aan infectieuze oorzaken</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">diarree</td>
                <td className="px-4 py-3 align-top">verder onderzoek nodig</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">dysfagie</td>
                <td className="px-4 py-3 align-top">denk aan slokdarm- of andere MDL-pathologie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">dysurie</td>
                <td className="px-4 py-3 align-top">denk aan urineweginfectie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">peri-anale afwijkingen</td>
                <td className="px-4 py-3 align-top">alarmsignaal voor onderliggende ziekte</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">positieve familie-anamnese voor H. pylori</td>
                <td className="px-4 py-3 align-top">reden om verder te denken</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Als buikpijn veel invloed heeft op het dagelijks leven of tot veel schoolverzuim leidt, kan begeleiding door een
        psycholoog nodig zijn. Daarbij wordt een{' '}
        <strong className="text-slate-900 dark:text-slate-100">twee-sporenbeleid</strong> genoemd: somatische uitleg en
        begeleiding naast aandacht voor psychosociale factoren.
      </p>
    </div>
  )
}
