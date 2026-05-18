"use client";

import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "385976123689";
const DEFAULT_MESSAGE = "Bok! Zanima me više o vašim uslugama.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontaktirajte nas putem WhatsAppa"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}
