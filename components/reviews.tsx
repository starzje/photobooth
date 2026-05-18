import { FaStar, FaGoogle } from "react-icons/fa";

const reviews = [
  {
    name: "Glorija Majic",
    text: "Sve pohvale, od početne komunikacije preko pripreme na dan vjenčanja do konačnih fotografija.",
    rating: 5,
  },
  {
    name: "Kristina Stefanac",
    text: "Vrhunski tim i vrhunski štand! Slike su ispale briljantno, a ljudi koji tamo rade su čisti pozitivci, apsolutno preporučujem :)",
    rating: 5,
  },
  {
    name: "Mia Tršan",
    text: "Bila sam kuma na vjenčanju te sam mladencima za poklon odlučila uzeti Photobooth i sve sta mogu reći - pun pogodak! Ekipa je genijalna, Mislav je tu za sve dogovore. Gostima na vjenčanju se svidjelo jer je drugačije i dodatno su se zabavili. Svee preporuke :)",
    rating: 5,
  },
  {
    name: "Marina Štrk",
    text: "Sve preporuke, angažirali smo ih na našoj svadbi. Cjenovno su puno prihvatljiviji od drugih, a dogovori su brzi i laki. Ono što mi je najbitnije čitavo vrijeme je animatorica pomagala gostima, a rekviziti su uvijek bili uredno posloženi.",
    rating: 5,
  },
  {
    name: "Laura",
    text: "Imala sam svadbu 9.5, oduševljena sam uslugom!! Vrhunski odrađen posao i bilo je jako zabavno. Preporučam!",
    rating: 5,
  },
  {
    name: "Suzana Nevešćanin",
    text: "Odlična organizacija, brza i jednostavna komunikacija. Koristili smo usluge za božićni domjenak zaposlenika, odlično je bilo! Svakako preporučam :-)",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t">
          {/* Section header */}
          <div id="recenzije" className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-playfair-display text-slate-800">Recenzije</h2>
            <p className="text-xl text-slate-500 mt-4">
              Što naši klijenti kažu o nama
            </p>
          </div>

          {/* Reviews grid */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:max-w-none">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex flex-col bg-white border border-slate-200 rounded-sm p-6 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-slate-600 text-sm mb-4 grow">{review.text}</p>

                {/* Reviewer */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-slate-800 font-medium text-sm">{review.name}</span>
                  <FaGoogle className="text-slate-400 w-3.5 h-3.5 ml-auto" />
                </div>
              </div>
            ))}
          </div>

          {/* Google reviews link */}
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/Photobooth+Zagreb/@45.7573648,15.8843388,14969m/data=!3m1!1e3!4m10!1m2!2m1!1sphotobooth+zagreb!3m6!1s0x4765d51c06f4028d:0x23469e678bbcfc12!8m2!3d45.7573648!4d15.9605565!15sChFwaG90b2Jvb3RoIHphZ3JlYpIBC3Bob3RvX2Jvb3Ro4AEA!16s%2Fg%2F11njptc3qk?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out"
            >
              <FaGoogle className="w-4 h-4" />
              Pogledajte sve recenzije na Googleu
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
