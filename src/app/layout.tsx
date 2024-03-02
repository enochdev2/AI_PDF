import { ClerkProvider } from "@clerk/nextjs";

import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { cn, constructMetadata } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

import "react-loading-skeleton/dist/skeleton.css";
import "simplebar-react/dist/simplebar.min.css";

import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title : "AI-PDF READER ",
  description : "AI-PDF READER is an open-source software to make chatting to your PDF files easy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <Providers>
        <ClerkProvider
          appearance={{
            variables: { colorPrimary: "#624cf5" },
          }}
        >
          <body
            className={cn(
              "min-h-screen font-sans antialiased grainy",
              inter.className
            )}
          >
            <Toaster />
            <Navbar />
            {children}
          </body>
        </ClerkProvider>
      </Providers>
    </html>
  );
}
