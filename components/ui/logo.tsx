import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block text-blue-600 transition duration-150 ease-in-out" aria-label="Cruip">
      <Image src="/images/logo.png" width={40} height={40} alt="Photobooth" />
    </Link>
  );
}
