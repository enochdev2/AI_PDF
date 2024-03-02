'use client'

import React from 'react'
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";




const SignOut = () => {
    const router = useRouter();


  return (
    <div className="mt-10 px-6 bg-blue-500">
      <SignedIn>
        <SignOutButton signOutCallback={() => router.push("/sign-in")}>
          <Button
            className={buttonVariants({
              size: "sm",
            })}
          >
            <Image src="/logout.svg" alt="logout" width={24} height={24} />

            <p className="text-sky-600 ">Logout</p>
          </Button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}

export default SignOut
