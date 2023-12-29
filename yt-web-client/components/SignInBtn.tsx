"use client";

import { signInWithGoogle, signOut } from "@/firebase/firebase";
import { User } from "firebase/auth";

interface SignInProps {
  user: User | null;
}

export function SignInBtn({ user }: SignInProps) {
  return (
    <>
      {user ? (
        <div className="mr-3">
          <button
            className="border border-zinc-800 rounded-xl p-1 px-2 text-white bg-zinc-800 hover:bg-zinc-400 hover:border-zinc-400"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="mr-3">
          <button
            className="border border-zinc-800 rounded-xl p-1 px-2 text-white bg-zinc-800 hover:bg-zinc-400 hover:border-zinc-400"
            onClick={signInWithGoogle}
          >
            Sign In
          </button>
        </div>
      )}
    </>
  );
}
