import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Link href="/" className="p-[1em]">
        <Image src="/youtube-logo.svg" alt="haha" width={90} height={20} />
      </Link>
    </nav>
  );
}
