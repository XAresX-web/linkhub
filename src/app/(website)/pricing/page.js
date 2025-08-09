"use client";

import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(119,255,198,0.2),transparent_50%)] animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-20 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl opacity-25 animate-float-slow"></div>

      {/* Content */}
      <div className="relative z-10 py-12 px-4 min-h-screen flex flex-col">
        <main className="max-w-7xl mx-auto flex-1 flex flex-col justify-center">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-200 text-sm font-medium backdrop-blur-sm">
                🎉 Oferta Especial
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-6 leading-tight">
              Gratis para
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                siempre ✨
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Comienza tu viaje digital sin costo alguno. Todo lo que necesitas
              para crear tu presencia online perfecta.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="flex justify-center animate-fade-in-up delay-300">
            <div className="group relative max-w-md w-full">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse-slow"></div>

              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-[1.02] hover:bg-white/15">
                {/* Card Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Plan Gratuito
                  </h3>
                  <p className="text-gray-300">Perfecto para empezar</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {[
                    {
                      icon: "🔗",
                      text: "Gestión básica de enlaces",
                      desc: "Organiza todos tus links importantes",
                    },
                    {
                      icon: "🎨",
                      text: "URL de perfil personalizado",
                      desc: "Tu marca personal única",
                    },
                    {
                      icon: "📊",
                      text: "Análisis básico",
                      desc: "Estadísticas de rendimiento",
                    },
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 group/item"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-pink-500/30 group-hover/item:border-pink-400/50 transition-colors">
                        <span className="text-sm">{feature.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium group-hover/item:text-pink-200 transition-colors">
                          {feature.text}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          {feature.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                      $0
                    </span>
                    <span className="text-gray-400 ml-2">/mes</span>
                  </div>
                  <p className="text-green-400 text-sm font-medium mt-2">
                    ✅ Sin tarjeta de crédito
                  </p>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link
                    href="/login"
                    className="group/btn relative inline-flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>🚀 Empezar Ahora</span>
                      <svg
                        className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <span>⚡</span>
                      <span>Configuración instantánea</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>🔒</span>
                      <span>100% Seguro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-16 animate-fade-in-up delay-500">
            <p className="text-gray-400 mb-4">¿Necesitas más funciones?</p>
            <a
              href="mailto:linkhub.info@gmx.com"
              className="text-pink-400 hover:text-pink-300 font-medium transition-colors underline decoration-pink-400/30 hover:decoration-pink-300/50 cursor-pointer inline-block"
            >
              Contáctanos para atención personalizada →
            </a>
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
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
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
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
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
        .delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </div>
  );
}
