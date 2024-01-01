import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-slate-900 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-5 lg:max-w-xs">
            <div className="mb-2 text-2xl text-white font-bold">Photobooth Zagreb</div>
            <div className="text-lg font-semibold text-slate-300">
              Sve što trebate za savršenu zabavu na jednom mjestu.
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-start-6 lg:col-span-2">
            <h6 className="text-sm text-slate-300 font-semibold mb-2">Navigacija</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="/#galerija" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  Galerija
                </a>
              </li>
              <li>
                <a href="/#o-nama" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  O nama
                </a>
              </li>
              <li>
                <a href="/#cijenik" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  Cijenik
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#kontakt" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-start-8 lg:col-span-3">
            <h6 className="text-sm text-slate-300 font-semibold mb-2">Kontakt</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a
                  href="mailto:contact@photobooth-zagreb.com"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out flex gap-2 items-center">
                  <HiOutlineMail />
                  contact@photobooth-zagreb.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/photo_booth_zagreb?igsh=dXY4N252anJwdHBq&utm_source=qr"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out flex gap-2 items-center">
                  <FaInstagram /> @photo_booth_zagreb
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61555007070917"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out flex gap-2 items-center">
                  <FaFacebook />
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
