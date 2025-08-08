import { Lato } from "next/font/google";
import "../../globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "LinkHub",
  description:
    "LinkHub: Plataforma avanzada para gestionar y compartir tus enlaces de manera eficiente y segura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
