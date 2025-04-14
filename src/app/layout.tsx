import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './sassGlobal.scss'
import CapComponents from "@/components/Cap/CapComponents";

export const metadata: Metadata = {
  title: "Mihuil121",
  description: "резюме Frontend Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CapComponents />
        {children}
      </body>
    </html>
  );
}