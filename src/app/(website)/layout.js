import Header from "@/components/Header";
import { Lato } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "LinkHub",
  description:
    "Comparte tus enlaces, perfiles sociales, información de contacto y más en una sola página",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={lato.className}>
        <main>
          <Header />
          <div className="max-w-6xl mx-auto p-6 flex flex-col min-h-screen">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
