export default function FooterWrapper() {
  return <FooterClient />;
}

// Importación diferida para evitar problemas de server
import FooterClient from "./FooterClient";
