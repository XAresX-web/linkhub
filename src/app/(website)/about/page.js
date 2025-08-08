"use client";

import Link from "next/link";

export default function About() {
  const features = [
    {
      icon: "🔐",
      title: "Autenticación Segura",
      description:
        "Proceso de autenticación simple y seguro para proteger tu información.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: "⚡",
      title: "Panel Intuitivo",
      description:
        "Dashboard fácil de usar para gestionar todos tus enlaces y perfil.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: "🎨",
      title: "Personalización Total",
      description:
        "Botones personalizables con vista previa en tiempo real de todos los cambios.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: "📊",
      title: "Analytics Avanzados",
      description:
        "Obtén insights detallados sobre el engagement y comportamiento de tu audiencia.",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: "🚀",
      title: "Optimización SEO",
      description:
        "Optimizado para rendimiento y SEO, garantizando que tu página destaque.",
      color: "from-indigo-400 to-purple-500",
    },
    {
      icon: "🌐",
      title: "Integración Social",
      description:
        "Conecta automáticamente con todas tus redes sociales y plataformas favoritas.",
      color: "from-teal-400 to-green-500",
    },
  ];

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(139,69,193,0.1),transparent_50%)] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,rgba(6,182,212,0.1),transparent_50%)] animate-pulse delay-2000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/15 to-pink-400/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-r from-indigo-400/15 to-blue-400/20 rounded-full blur-xl animate-float-slow"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-8">
          <main className="flex flex-col items-center w-full flex-1 px-4 md:px-20 text-center max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-16 animate-fade-in-up">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium backdrop-blur-sm">
                  ✨ Nuestra Historia
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 mb-8 leading-tight">
                Acerca de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                  LinkHub
                </span>
              </h1>
            </div>

            {/* Description Section */}
            <div className="mb-16 max-w-4xl animate-fade-in-up delay-300">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500">
                  <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8">
                    LinkHub es una plataforma dinámica e intuitiva diseñada para{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
                      optimizar tu presencia online
                    </span>
                    . Inspirada en{" "}
                    <a
                      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold hover:from-purple-300 hover:to-pink-300 transition-all duration-300 underline decoration-purple-400/50"
                      href="https://biolink-ai-beta.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BioLink AI
                    </a>
                    , permite a los usuarios crear una página personalizada y
                    fácil de compartir que alberga todos sus enlaces importantes
                    en un solo lugar.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
                    <div className="flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                      <span>Fácil de usar</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                      <span>Totalmente personalizable</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                      <span>Analytics integrados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mb-16 w-full max-w-6xl animate-fade-in-up delay-500">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
                  Características Principales
                </h2>
                <p className="text-slate-300 text-lg">
                  Todo lo que necesitas para crear tu presencia digital perfecta
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}
                    ></div>

                    {/* Card */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 h-full">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                        {feature.description}
                      </p>

                      {/* Hover indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center animate-fade-in-up delay-1000">
              <div className="relative group inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Link
                  href="/"
                  className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] group-hover:shadow-2xl"
                >
                  <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span>Regresar a Inicio</span>
                </Link>
              </div>

              <p className="mt-6 text-slate-400">
                ¿Listo para comenzar tu transformación digital?
              </p>
            </div>
          </main>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-30px) rotate(-180deg);
            }
          }
          @keyframes float-slow {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
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

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float-slow 4s ease-in-out infinite;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          .delay-300 {
            animation-delay: 300ms;
          }
          .delay-500 {
            animation-delay: 500ms;
          }
          .delay-1000 {
            animation-delay: 1000ms;
          }
        `}</style>
      </div>
    </>
  );
}
