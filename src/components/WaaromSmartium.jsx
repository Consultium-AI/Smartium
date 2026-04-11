import { memo } from 'react'

const WaaromSmartium = () => {
  return (
    <section
      id="waarom-smartium"
      className="section-content-visibility relative isolate overflow-hidden border-t border-slate-200/90 dark:border-slate-700/40"
    >
      <div className="absolute inset-0 cta-section-bg -z-10" aria-hidden />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-primary-500/10 blur-3xl -z-10" aria-hidden />

      <div className="container-custom pt-24 pb-28 md:py-32">
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-16">
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-navy-400 dark:text-slate-400 mb-5">
            Waarom Smartium
          </p>
          <h2 className="font-display text-[2.5rem] sm:text-5xl md:text-6xl font-semibold text-navy-900 dark:text-slate-50 tracking-tight leading-[1.08] mb-8">
            Ontstaan vanuit een duidelijke behoefte
          </h2>
          <p className="text-lg md:text-2xl text-navy-500 dark:text-slate-300/90 leading-relaxed">
            Het vernieuwde curriculum in geneeskunde bracht voor veel studenten een moeilijke start met
            zich mee: hoge uitval, veel vragen en vaak onduidelijkheid over wat er precies verwacht werd.
          </p>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-10 md:space-y-10">
          <p className="text-lg md:text-2xl text-navy-600 dark:text-slate-200 leading-[1.85]">
            In korte tijd kwamen er veel signalen binnen van studenten die moeite hadden om grip te krijgen
            op de stof. Niet door gebrek aan inzet, maar omdat structuur, focus en richting ontbraken binnen
            het enorme aanbod aan informatie.
          </p>
          <p className="text-lg md:text-2xl text-navy-600 dark:text-slate-200 leading-[1.85]">
            Daarom hebben we Smartium gebouwd: een platform dat samenvattingen, oefenvragen, tentamens en
            AI-ondersteuning samenbrengt op een manier die aansluit op het nieuwe curriculum. Zodat
            studenten minder tijd kwijt zijn aan zoeken, en meer tijd overhouden voor echt leren.
          </p>
        </div>
      </div>
    </section>
  )
}

export default memo(WaaromSmartium)
