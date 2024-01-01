import GoogleAnalytics from "./GoogleAnalytics";
import "./css/style.css";

import { Inter, Playfair_Display } from "next/font/google";

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

export const metadata = {
  title: "Photobooth Zagreb",
  description: "Iznajmljivanje phootobootha za vjenčanja i evente",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
