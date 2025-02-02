import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cashtrackr",
  description:
    "Simplifica tus finanzas personales con Cashtrackr. Controla tus gastos, gestiona presupuestos y alcanza tus metas financieras fácilmente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
