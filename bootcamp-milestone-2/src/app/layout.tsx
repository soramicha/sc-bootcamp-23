//import type { Metadata } from "next";
//import { Inter } from "next/font/google"; // You can change the font to anything you want.
import Navbar from "@/components/Navbar";
import "./globals.css";

/*const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sophia's Personal Website",
  description: "A personal website for Sophia.",
};*/ // className={inter.className}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //remember Inter is simply the font I chose.
    <html lang="en">
      <body>
      <Navbar/>
      {children}
      </body>
    </html>
  );
}
