import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

const serif = localFont({
  src: "./fonts/DentonCondensedTest-Regular.otf",
  variable: "--font-serif",
  weight: "400",
});
const sans = localFont({
  src: [
    { path: "./fonts/neuemontreal-regular.otf", weight: "400" },
    { path: "./fonts/neuemontreal-medium.otf", weight: "500" },
    { path: "./fonts/neuemontreal-bold.otf", weight: "700" },
  ],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dra. Alejandra Stivaletta | Medicina Familiar y de Precisión",
  description: "Tu salud no se entiende por partes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${serif.variable} ${sans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
