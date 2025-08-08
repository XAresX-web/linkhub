import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "LinkHub | Acerca de",
  description:
    "Share your links, social profiles, contact info and more on one page",
};
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mt-10">
      <main className="flex flex-col items-center w-full flex-1 px-4 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Acerca de <span className="text-blue-500">LinkHub</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-600">
          LinkHub es una plataforma dinámica e intuitiva diseñada para optimizar
          tu presencia online. Inspirada en{" "}
          <a
            className="text-blue-500"
            href="https://biolink-ai-beta.vercel.app"
          >
            BioLink AI
          </a>
          , permite a los usuarios crear una página personalizada y fácil de
          compartir que alberga todos sus enlaces importantes en un solo lugar.
        </p>

        <div className="mt-8 text-gray-600 text-left">
          <h2 className="text-3xl font-semibold">
            Características principales
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>Proceso de autenticación simple y seguro.</li>
            <li>
              Panel de control intuitivo para gestionar tus enlaces y tu perfil.
            </li>
            <li>
              Botones de enlace personalizables con vistas previas en tiempo
              real.
            </li>
            <li>
              Análisis para obtener información sobre la participación de su
              audiencia.
            </li>
            <li>
              Optimizado para el rendimiento y el SEO, lo que garantiza que su
              página se destaque.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-lg text-blue-500 hover:underline">
            Regresar a inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
