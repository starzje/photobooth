import Image from "next/image";
import HeroImage from "@/public/images/about-hero.jpg";
import IntroImage from "@/public/images/about-intro.jpg";

export default function HeroAbout() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 h-[20rem]  pointer-events-none -z-10 mb-48 lg:mb-0 lg:h-[22rem]"
        aria-hidden="true">
        <div className="w-full h-full" data-aos="fade">
          <Image
            className="opacity-10 w-full h-full object-cover md:block hidden"
            src={HeroImage}
            width={1440}
            height={497}
            priority
            alt="Hero"
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h1 className="h2 md:h1 font-playfair-display text-slate-100">Uvjeti korištenja i pravila privatnosti</h1>
          </div>

          <div
            className="flex justify-start flex-col items-start mt-14 md:mt-24 mb-10 md:mb-20"
            data-aos="fade-up"
            data-aos-delay="100">
            <h4 className="text-xl font-semibold pb-2">Dragi korisniče,</h4>
            <p className="font-light text-justify]">
              Vaša privatnost nam je važna, stoga ovim uvjetima uređujemo način prikupljanja, čuvanja i korištenja
              osobnih podataka koje kao korisnik naše web stranice dobrovoljno ustupate pristupom na našu web stranicu.
            </p>
            <h4 className="text-xl font-semibold pb-2 mt-5">ZAŠTITA PRIVATNOSTI</h4>
            <p className="font-light text-justify]">
              Osobni podaci koji se obrađuju su podaci primljeni od Korisnika. To uključuje osobne podatke kao što su
              ime i prezime korisnika, e-pošta, poštanska adresa, telefonski broj i broj mobitela koji se neće
              distribuirati niti prodavati trećoj strani, osim uz dozvolu korisnika. '<strong>Photobooth-zagreb</strong>
              ' zakonito, pošteno i transparentno obrađuje Vaše osobne podatke, jedino i isključivo u svrhu s kojom su
              prikupljeni, a uvjeti se odnose na osobne podatke prikupljene iz mrežnih izvora koji sadrže poveznicu na
              našu web stranicu. Prikupljanje osobnih podataka iz bilo kojih drugih izvora je isključeno. Čuvamo vaše
              osobne podatke, za što ste nam dali suglasnost/privolu, kako bismo vam omogućili najbolju uslugu, kupnju i
              informiranost. Vaše osobne podatke koristit ćemo u svrhu promocije, promidžbe te analitike. Obaviještavamo
              Vas da će te u slučaju provale u naš sustav i krađe osobnih podataka biti obaviješteni u roku od 72 sata.
              Obaviještavamo Vas da imate pravo na uvid u Vaše osobne podatke koje smo prikupili, obradili te koje
              čuvamo.
            </p>
            <h4 className="text-xl font-semibold pb-2 mt-5">Prava korisnika</h4>
            <p className="font-light text-justify]">
              Korisnik može zatražiti sljedeća prava: 1) pravo na pristup i ispravljanje njegovih osobnih podataka; 2)
              pravo zaustaviti obradu njegovih osobnih podataka u marketinške svrhe; 3) pravo prigovora na obradu
              osobnih podataka kada se osobni podaci obrađuju u svrhu postizanja legitimnih interesa
              <strong> Photobootha-zagreb</strong> ili trećih strana; 4) pravo na brisanje osobnih podataka u slučaju da
              više nisu potrebni osobni podaci, korisnik povlači suglasnost za aktivnosti koje su osnova za obradu
              podataka, a nema druge pravne osnove za njihovu obradu ili ako su osobni podaci obrađuje se bez pravne
              osnove. U slučaju bilo kakvih pitanja i nedoumica u vezi zaštite privatnosti i osobnih podataka pišite nam
              na email adresu: <strong>contact@photobooth-zagreb.com</strong>
            </p>
            <h4 className="text-xl font-semibold pb-2 mt-5">KOLAČIĆI (COOKIES)</h4>
            <p className="font-light text-justify]">
              Kolačić je informacija koja se pohranjuje na računalo ili mobilni uređaj pri posjetu određenom web mjestu
              ili prilikom otvaranja određene elektroničke pošte. Kolačići obično spremaju Vaše postavke, postavke za
              web stranicu, kao što su preferirani jezik ili adresa. Ovo omogućava stranici da prikaže informacije
              prilagođene Vašim potrebama. U Vašim internet preglednicima možete brisati kolačiće i upravljati općim
              postavkama spremanja kolačića, međutim, treba voditi računa da ako zabranite kolačiće, onda je moguće da
              neki dijelovi web stranice ne mogu normalno funkcionirati ili im se ne može pristupiti.
            </p>
            <h4 className="text-xl font-semibold pb-2 mt-5">Što su privremeni kolačići? </h4>
            <p className="font-light text-justify]">
              Privremeni kolačići ili kolačići sesije uklanjaju se s računala po zatvaranju internet preglednika. Pomoću
              njih web-mjesta pohranjuju privremene podatke, poput stavki u košarici za kupnju. Što su stalni kolačići?
              Stalni ili spremljeni kolačići ostaju na računalu nakon zatvaranja programa internet preglednika. Pomoću
              njih web-mjesta pohranjuju podatke, kao što su ime za prijavu i lozinka, tako da se ne morate
              prijavljivati prilikom svakog posjeta određenom mjestu. Više informacija o tome što su kolačići i kako ih
              odbiti, možete saznati i na stranici: https://www.allaboutcookies.org
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
