import "./css/style.css";
import { Inter, Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import CookieConsentManager from "@/components/utils/CookieConsentManager";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Photobooth Zagreb",
  description: "Iznajmljivanje phootobootha za vjenčanja i evente",
  metadataBase: new URL("https://photobooth-zagreb.com"),
  openGraph: {
    title: "Photobooth Zagreb",
    description: "Iznajmljivanje phootobootha za vjenčanja i evente",
    url: "https://photobooth-zagreb.com",
    type: "website",
    locale: "hr_HR",
    siteName: "Photobooth Zagreb",
  },
  keywords:
    "photobooth, fotobooth, photobooth zagreb, kabina za slikanje, fotografiranje, fotobooth zagreb, iznajmljivanje fotobootha, iznajmljivanje photobootha, iznajmljivanje kabine za slikanje, iznajmljivanje kabine za fotografiranje, iznajmljivanje kabine za fotografiranje zagreb, iznajmljivanje kabine za slikanje zagreb, iznajmljivanje kabine za fotografiranje za vjenčanja, iznajmljivanje kabine za slikanje za vjenčanja, iznajmljivanje kabine za fotografiranje za evente, iznajmljivanje kabine za slikanje za evente, iznajmljivanje kabine za fotografiranje za evente zagreb, iznajmljivanje kabine za slikanje za evente zagreb, iznajmljivanje kabine za fotografiranje za vjenčanja zagreb, iznajmljivanje kabine za slikanje za vjenčanja zagreb, iznajmljivanje kabine za fotografiranje za evente, iznajmljivanje kabine za slikanje za evente, iznajmljivanje kabine za fotografiranje za vjenčanja, iznajmljivanje kabine za slikanje za vjenčanja",

  robots: "index, follow",
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}>
        <CookieConsentManager />
        {children}
      </body>
    </html>
  );
}
