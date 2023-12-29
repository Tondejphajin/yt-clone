"use client";

import Image from "next/image";
import Link from "next/link";
import { SignInBtn } from "./SignInBtn";
import { onAuthStateChangedHelper } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { unsubscribe } from "diagnostics_channel";

export default function Navbar() {
  // init user state
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });

    // cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <nav className="flex justify-between items-center">
      <Link href="/" className="p-[1em]">
        <Image src="/youtube-logo.svg" alt="haha" width={90} height={20} />
      </Link>
      <SignInBtn user={user} />
    </nav>
  );
}
