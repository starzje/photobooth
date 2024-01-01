import Link from "next/link";

// components/CookieConsentBar.jsx
interface CookieConsentBarProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsentBar: React.FC<CookieConsentBarProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-slate-100 text-black p-5 text-center flex md:justify-around md:flex-row md:gap-5 flex-col md:items-center ">
      <p className="pb-5 md:pb-0 text-sm md:text-base md:flex md:items-center">
        Ova web stranica koristi kolačiće kako bi poboljšala korisničko iskustvo.{" "}
        <Link href="/uvjeti-koristenja" className="underline pls-0 md:pl-2">
          Saznaj više
        </Link>
        .
      </p>
      <div className="flex flex-col gap-2 w-full md:flex-row md:max-w-xs">
        <button className="btn py-2 text-white bg-blue-600 hover:bg-blue-700 w-full" onClick={onAccept}>
          Prihvati
        </button>
        <button className="btn py-2 text-white bg-slate-700 hover:bg-slate-800 w-full" onClick={onDecline}>
          Odbij
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBar;
