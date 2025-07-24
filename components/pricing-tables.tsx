"use client";

export default function PricingTables() {
  return (
    <div>
      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">
        {/* Pricing table 1 */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Paket 2h</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h2 leading-7 font-playfair-display text-slate-800">330</span>
              <span className="h3 font-medium text-slate-500">€</span>
            </div>
          </div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>
                Najam photobootha <strong>2h</strong>
              </span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Neograničeno fotografiranje i ispis fotografija</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Knjiga uspomena (foto album)</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Zabavni rekviziti za slikanje</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Personalizirani dizajn okvira</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Slanje svih slika na mail</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Pozadina za slikanje</span>
            </li>
          </ul>
          <div className="p-3 rounded bg-slate-50">
            <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#kontakt">
              Zatraži ponudu
              <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </a>
          </div>
        </div>

        {/* Pricing table 2 */}
        <div
          className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg"
          data-aos="fade-up"
          data-aos-delay="100">
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">
              Najpopularnije
            </div>
          </div>
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Paket 3h</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h2 leading-7 font-playfair-display text-slate-800">420</span>
              <span className="h3 font-medium text-slate-500">€</span>
            </div>
          </div>

          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>
                Najam photobootha <strong>3h</strong>
              </span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Neograničeno fotografiranje i ispis fotografija</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Knjiga uspomena (foto album)</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Zabavni rekviziti za slikanje</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Personalizirani dizajn okvira</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Slanje svih slika na mail</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Pozadina za slikanje</span>
            </li>
          </ul>
          <div className="p-3 rounded bg-slate-50">
            <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#kontakt">
              Zatraži ponudu
              <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </a>
          </div>
        </div>

        {/* Pricing table 3 */}
        <div
          className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg"
          data-aos="fade-up"
          data-aos-delay="100">
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">
              Idealno za vjenčanja
            </div>
          </div>
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Paket 4h</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h2 leading-7 font-playfair-display text-slate-800">470</span>
              <span className="h3 font-medium text-slate-500">€</span>
            </div>
          </div>

          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>
                Najam photobootha <strong>4h</strong>
              </span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Neograničeno fotografiranje i ispis fotografija</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Knjiga uspomena (foto album)</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Zabavni rekviziti za slikanje</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Personalizirani dizajn okvira</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Slanje svih slika na mail</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Pozadina za slikanje</span>
            </li>
          </ul>
          <div className="p-3 rounded bg-slate-50">
            <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#kontakt">
              Zatraži ponudu
              <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center items-center text-center pt-8">
        Za najam PhotoBootha na više sati ili dana, javite se kako bismo Vam složili personaliziranu ponudu.
      </div>
    </div>
  );
}
