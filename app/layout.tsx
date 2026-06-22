import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://casa-hogar-goyito.vercel.app"),
  title: {
    default: "Casa Hogar Goyito A.C. — De la calle a casa",
    template: "%s · Casa Hogar Goyito",
  },
  description:
    "Albergue canino en León, Guanajuato. Rescatamos, rehabilitamos, esterilizamos y damos en adopción a perritos en situación de calle. Adopta, dona o sé voluntario.",
  keywords: [
    "Casa Hogar Goyito",
    "albergue canino León",
    "adopción de perros León",
    "donar albergue perros",
    "rescate animal Guanajuato",
    "adopta no compres",
  ],
  authors: [{ name: "Casa Hogar Goyito A.C." }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "Casa Hogar Goyito A.C. — De la calle a casa",
    description:
      "Ayuda a transformar una historia de abandono en una historia de hogar. Adopta, dona o sé voluntario.",
    siteName: "Casa Hogar Goyito",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Hogar Goyito A.C. — De la calle a casa",
    description:
      "Albergue canino en León, Gto. Adopta, dona o sé voluntario y cambia una vida.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-crema antialiased">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
