import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DoneZo",
  description: "A simple and stylish to-do app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className={`flex flex-col min-h-screen ${inter.className}`}>
          {/* Header */}
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer (Sticky at Bottom) */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
