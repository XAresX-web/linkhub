import Header from "@/components/Header/HeaderWrapper";
import { Lato } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer/FooterWrapper";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "LinkHub",
  description:
    "Comparte tus enlaces, perfiles sociales, información de contacto y más en una sola página",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${lato.className} min-h-screen`}>
        <main className="flex flex-col min-h-screen w-full">
          <Header />
          {/* Contenedor sin límites ni márgenes */}
          <div className="w-full flex-1 flex flex-col">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
