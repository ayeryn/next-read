import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Next Read",
  description: "Designed and Made by EL",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>
        <div className="flex h-full min-h-screen w-full flex-col">
          <Nav />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
