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
            <Accordion title="Da li plaćamo stolicu za vas na svadbi?">
              Ne — naš operater ne ostaje sjediti za stolom, već je uz photobooth i aktivan cijelu večer, tako da
              stolica nije potrebna
            </Accordion>
            <Accordion title="Da li u vrijeme kupljenog najma ulazi vrijeme montaže I demontaže?">
              Ne, u cijenu najma ulazi samo vrijeme kada se gosti mogu slikati.
            </Accordion>
            <Accordion title="Kako izgleda proces slikanja?">
              Gosti uzmu rekvizite, kliknu na ekran i sustav automatski napravi fotografije. Hostesa isprinta sliku za
              svakoga, jednu zalijepi u knjigu uspomena i pozove goste da napišu poruku.
            </Accordion>
            <Accordion title="Nudite li personalizirane natpise za rekvizite?">
              Da, izrađujemo do 8 custom natpisa — idealno za korporativne evente ili tematske proslave. Usluga se
              dodatno naplaćuje.
            </Accordion>
            <Accordion title="Koliko prostora I vremena je potrebno za postavljanje Photobootha?">
              Za nesmetano postavljanje photobootha preporučujemo prostor veličine najmanje 2.5 × 2.5 metra, idealno uz
              zid. Montaža traje cca 30min, operater dolazi najmanje 1h prije početka – da sve bude spremno na vrijeme.
              Također, potrebno je osigurati pristup električnoj utičnici u blizini (produžni kabel imamo).
            </Accordion>
            <Accordion title="Naplaćujete li dodatno putne troškove?">
              Za sve evente u Zagrebu i okolici, te u našoj podružnici u Gospiću, ne naplaćujemo putne troškove. Za sve
              ostale evente naplaćujemo putne troškove - javite se za ponudu.
            </Accordion>
            <Accordion title="Što je to knjiga uspomena?">
              Knjiga uspomena je album u koji gosti zalijepe svoju fotografiju i napišu poruku. Na kraju večeri, knjiga
              je vaša — trajna uspomena s porukama svih gostiju. Uključena je u svaki paket, a moguće je uzeti i
              dodatne.
            </Accordion>

            <Accordion title="Koje vrste događaja pokrivate s photoboothom?">
              Vjenčanja, rođendane, krstitke, mature, korporativne evente, team buildinge, promocije... ukratko, svaki
              event gdje želite da se gosti zabave i odnesu uspomenu kući.
            </Accordion>
            <Accordion title="Postoji li ograničenje broja fotografija koje se mogu napraviti?">
              Nema ograničenja — gosti mogu dolaziti koliko god puta žele te svaki gost dobije svoju uspomenu u obliku
              fotografije.
            </Accordion>
            <Accordion title="Kakve su opcije personalizacije fotografija?">
              Svaka fotografija dolazi s personaliziranim okvirom koji mi izrađujemo prema vašem eventu — s imenima,
              datumom, logotipom ili temom proslave. Možete odabrati i raspored fotografija: 2 slike ili 3 slike na
              jednom ispisanom stripu.
            </Accordion>

            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul>
        </div>
      </div>
    </section>
  );
}
