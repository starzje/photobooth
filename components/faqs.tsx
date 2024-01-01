import Accordion from "@/components/utils/accordion";

export default function Faqs() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t ">
          {/* Section header */}
          <div id="faq" className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">Često postavljana pitanja</h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto divide-y divide-slate-200">
            <Accordion title="Gdje su sve dostupne vaše usluge?" active>
              Naše usluge su dostupne na području cijele Hrvatske. Ukoliko se vaš event održava izvan Hrvatske, javite
              nam se i dogovorit ćemo se.
            </Accordion>
            <Accordion title="Naplaćujete li dodatno putne troškove?">
              Za sve evente u Zagrebu i okolici, te u našoj podružnici u Gospiću, ne naplaćujemo putne troškove. Za sve
              ostale evente naplaćujemo putne troškove u iznosu od 0.5 €/km.
            </Accordion>
            <Accordion title="Što je to knjiga uspomena?">
              Knjiga uspomena je album u koji se zalijepe sve fotografije koje se naprave na eventu. Vaši gosti mogu
              napisati poruku uz fotografiju, a na kraju eventa knjiga uspomena je vaša. Moguće je uzeti i više knjiga
              uspomena.
            </Accordion>
            <Accordion title="Mogu li uzeti knjigu uspomena uz bilo koji paket?">
              Da. Knjiga uspomena se može uzeti uz bilo koji paket, te se dodatno naplaćuje 50 €.
            </Accordion>
            <Accordion title="Koje vrste događaja pokrivate s photoboothom?">
              Naš photobooth je savršen za razne vrste događaja, uključujući vjenčanja, rođendane, korporativne evente,
              promocije i još mnogo toga.
            </Accordion>
            <Accordion title="Postoji li ograničenje broja fotografija koje se mogu napraviti?">
              Ne, nema ograničenja na broj fotografija koje se mogu snimiti tijekom vašeg događaja. Vaši gosti mogu
              koristiti photobooth koliko god puta žele.
            </Accordion>
            <Accordion title="Kakve su opcije personalizacije fotografija?">
              Nudimo razne opcije za personalizaciju fotografija, uključujući dodavanje prilagođenih okvira, teksta,
              datuma i logotipa vašeg događaja ili tvrtke na svaku fotografiju.
            </Accordion>
            <Accordion title="Mogu li gosti dobivati ispise fotografija na licu mjesta?">
              Da, gosti mogu dobiti ispis fotografija na licu mjesta. Većinom su to 2 ispisa po fotografiji, gdje jedan
              ostavljaju u knjizi uspomena, a drugi zadržavaju za sebe.
            </Accordion>
            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul>
        </div>
      </div>
    </section>
  );
}
