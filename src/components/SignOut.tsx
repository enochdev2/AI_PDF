'use client'

import React from 'react'
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";




const SignOut = () => {
    const router = useRouter();


  return (
    <div className="mt-10 px-6">
      <SignedIn>
        <SignOutButton signOutCallback={() => router.push("/sign-in")}>
          <div className="flex cursor-pointer gap-4 p-4">
            <Image src="/logout.svg" alt="logout" width={24} height={24} />

            <p className="text-light-2 max-lg:hidden">Logout</p>
          </div>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}

export default SignOut
