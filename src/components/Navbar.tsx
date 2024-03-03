import { currentUser, auth } from "@clerk/nextjs";
import Link from "next/link";
import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import UserAccountNav from "./UserAccountNav";
import MobileNav from "./MobileNav";

import Image from "next/image";
import SignOut from "./SignOut";

const Navbar = async () => {
  const { userId } = auth();
  console.log("🚀 ~ Navbar ~ userId :", userId )
  const user: any = await currentUser();

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>AI_PDF READER</span>
         
          </Link>


          <MobileNav isAuth={!!user} />

          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
                <SignedOut>
                  <Button
                    className={buttonVariants({
                      size: "sm",
                    })}
                  >
                    <Link href="/sign-in">Login</Link>
                  </Button>
                  <Button
                    className={buttonVariants({
                      size: "sm",
                    })}
                  >
                    Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                  </Button>
                </SignedOut>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>
                <SignedIn>
                  <UserAccountNav
                    name={
                      !user.firstName || !user.lastName
                        ? "Your Account"
                        : `${user.firstName} ${user.lastName}`
                    }
                    email={user.email ?? ""}
                    imageUrl={user.imageUrl ?? ""}
                  />
                </SignedIn>
              </>
            )}
          </div>
          {/* <SignOut /> */}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
