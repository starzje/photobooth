import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header({ mode = "dark" }: { mode?: string }) {
  return (
    <header className={`absolute w-full z-30 ${mode !== "light" && "dark"}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="/#galerija"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  Galerija
                </a>
              </li>
              <li>
                <a
                  href="/#o-nama"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  O nama
                </a>
              </li>

              <li>
                <a
                  href="/#cjenik"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  Cjenik
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/#kontakt"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
