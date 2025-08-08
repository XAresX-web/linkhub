"use client";

import HeroForm from "@/components/forms/HeroForm";
import Carousel from "@/components/Carousel";
import GridContainer from "@/components/GridContainer";
import Link from "next/link";
import ImageGrid from "@/components/ImageGrid";

const imageUrls = [
  "/assets/polly.png",
  "/assets/preview.png",
  "/assets/doggie.png",
  "/assets/manfred.png",
  "/assets/walter.png",
  "/assets/model.png",
  "/assets/cat.png",
  "/assets/model1.png",
];

export default function Home({ session }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 lg:pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 backdrop-blur-sm">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-sm font-semibold">
                  ✨ Todo en uno
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 drop-shadow-2xl">
                    Conecta todo
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x">
                    en un solo lugar
                  </span>
                </h1>

                <div className="relative">
                  <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Comparte tus enlaces, perfiles de redes sociales,
                    información de contacto y más en una sola página
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                      {" "}
                      espectacular
                    </span>
                  </h2>

                  {/* Decorative line */}
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 animate-pulse"></div>
                </div>
              </div>

              {/* Hero Form with Enhanced Styling */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl">
                  <HeroForm user={session?.user} />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    50M+
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Usuarios activos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                    1B+
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Enlaces creados
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Uptime</div>
                </div>
              </div>
            </div>

            {/* Enhanced Carousel */}
            <div className="flex-1 relative animate-fade-in-right animation-delay-500">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <Carousel images={imageUrls} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="relative z-10 py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <div className="space-y-6 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-sm font-semibold">
                🚀 Revolucionario
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Nunca más tendrás que
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-x">
                cambiar el enlace
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                en tu biografía
              </span>
            </h2>
          </div>

          {/* Enhanced Description */}
          <div className="relative max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl backdrop-blur-sm"></div>
            <div className="relative p-8 lg:p-12">
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                El propósito de LinkHub es solucionar el problema más molesto de
                las redes sociales:
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                  {" "}
                  tener solo un enlace en la biografía
                </span>
                . LinkHub es la primera plataforma 100% gratuita creada para
                solucionar este problema.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-400">
                    Aumenta tu número de seguidores
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-400">Acepta pagos fácilmente</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-400">
                    Controla cómo se descubre tu contenido
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-400">
                    Saca más provecho de tus redes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Container with Enhanced Spacing */}
      <section className="relative z-10 py-20 animate-fade-in-up animation-delay-600">
        <GridContainer />
      </section>

      {/* Feature Section 2 */}
      <section className="relative z-10 py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6 mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 backdrop-blur-sm">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 text-sm font-semibold">
                ⚡ Súper rápido
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Convierte tu LinkHub en tu
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 animate-gradient-x">
                propio mini-sitio web
              </span>
            </h2>

            <div className="relative max-w-3xl mx-auto">
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Se necesitan unos segundos para convertir tu biografía en un
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-semibold">
                  {" "}
                  mini sitio web espectacular
                </span>
                , permitiendo a tus seguidores interactuar con tu contenido,
                descubrirte en otras plataformas o comprarte y apoyarte con un
                solo enlace simple.
              </p>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="mt-12 animate-fade-in-up animation-delay-800">
            <Link
              href="/account"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl transition-all duration-300 group-hover:shadow-[0_0_40px_rgb(168,85,247,0.6)]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-100 animate-gradient-x"></div>

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                ✨ Empieza ahora gratis
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </span>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>

            <p className="mt-4 text-sm text-gray-400">
              No se requiere tarjeta de crédito • Configuración en 30 segundos
            </p>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Glassmorphism effects */
        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #a855f7, #ec4899);
          border-radius: 4px;
        }
      `}</style>
    </main>
  );
}
