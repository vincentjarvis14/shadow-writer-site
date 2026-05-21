import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shadow Writer | L'Art du Mot dans l'Ombre",
  description:
    "Services d'écriture fantôme premium : livres, articles, discours, contenus web. Donnez vie à vos idées avec élégance et discrétion.",
  keywords: [
    "shadow writer",
    "écriture fantôme",
    "ghostwriting",
    "rédaction",
    "livre",
    "contenu",
    "écrivain",
  ],
  openGraph: {
    title: "Shadow Writer | L'Art du Mot dans l'Ombre",
    description:
      "Services d'écriture fantôme premium. Donnez vie à vos idées avec élégance et discrétion.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
