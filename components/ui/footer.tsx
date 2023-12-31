import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2 text-2xl text-white font-bold">Photobooth Zagreb</div>
            <div className="text-lg font-semibold text-slate-300">The smarter way to start your next idea.</div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-300 font-semibold mb-2">Navigacija</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <Link
                  href="/#galerija"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  Galerija
                </Link>
              </li>
              <li>
                <Link
                  href="/#o-nama"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/#cijenik"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  Cijenik
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#kontakt"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-sm text-slate-300 font-semibold mb-2">Kontakt</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="/#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  contact@photobooth-zagreb.com
                </a>
              </li>
              <li>
                <a
                  href="/https://www.instagram.com/photo_booth_zagreb?igsh=dXY4N252anJwdHBq&utm_source=qr"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  @photo_booth_zagreb
                </a>
              </li>
              <li>
                <a
                  href="/https://www.facebook.com/profile.php?id=61555007070917"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  PhotoBooth Zagreb
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">
          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link
                href="/uvjeti-koristenja"
                className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                Uvjeti korištenja
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-slate-500 mr-4">© studio F.M.I. Sva prava zadržana</div>
        </div>
      </div>
    </footer>
  );
}
