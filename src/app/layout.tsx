import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import { Cairo, Cairo_Play, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";


const geistSans = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Cairo_Play({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> 
          <main className="min-h-[100vh] max-h-[100vh] w-100 flex">
            <Sidebar />
            <section className="min-h-[100vh] max-h-[100vh] w-[80%] flex flex-col py-10 px-10 overflow-scroll"
              style={{ scrollbarWidth: 'none' }}>
              <Navbar />
              {/* {children} */}
            </section>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
