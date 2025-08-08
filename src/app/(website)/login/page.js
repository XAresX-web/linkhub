"use client";

import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,69,193,0.15),transparent_50%)] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(6,182,212,0.1),transparent_50%)] animate-pulse delay-2000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/15 to-pink-400/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-r from-indigo-400/15 to-blue-400/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-teal-400/15 rounded-full blur-xl animate-float"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-md mx-auto p-4">
          {/* Login Card */}
          <div className="group relative animate-fade-in-up">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse-slow"></div>

            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:bg-white/15">
              {/* Header Section */}
              <div className="text-center mb-8">
                {/* Welcome Badge */}
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium backdrop-blur-sm">
                    👋 Bienvenido de vuelta
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 mb-4 leading-tight">
                  Iniciar Sesión
                </h1>

                {/* Subtitle */}
                <p className="text-slate-300 text-lg leading-relaxed max-w-sm mx-auto">
                  Accede a tu cuenta y continúa construyendo tu presencia
                  digital
                </p>
              </div>

              {/* Login Methods Section */}
              <div className="mb-8">
                <div className="text-center mb-6">
                  <p className="text-slate-400 text-sm font-medium">
                    Elige tu método de acceso preferido
                  </p>
                </div>

                {/* Google Login Button Wrapper */}
                <div className="relative group/btn">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover/btn:opacity-30 transition-all duration-300"></div>
                  <div className="relative">
                    <LoginWithGoogle />
                  </div>
                </div>

                {/* Alternative Login Methods Placeholder */}
                <div className="mt-6 space-y-3">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-gradient-to-r from-slate-800 to-slate-700 text-slate-400 rounded-full">
                        Más métodos próximamente
                      </span>
                    </div>
                  </div>

                  {/* GitHub Login (Coming Soon) */}
                  <button
                    disabled
                    className="w-full flex items-center justify-center space-x-3 px-6 py-4 border border-slate-600/50 rounded-2xl text-slate-500 bg-slate-800/20 cursor-not-allowed transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Continuar con GitHub</span>
                    <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">
                      Próximamente
                    </span>
                  </button>

                  {/* Apple Login (Coming Soon) */}
                  <button
                    disabled
                    className="w-full flex items-center justify-center space-x-3 px-6 py-4 border border-slate-600/50 rounded-2xl text-slate-500 bg-slate-800/20 cursor-not-allowed transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M15.84 10.79c-.04-1.45 1.18-2.15 1.24-2.19-.68-1-1.74-1.13-2.12-1.14-0.9-.09-1.75.53-2.2.53s-1.15-.51-1.89-.5c-0.98.01-1.88.57-2.38 1.45-1.02 1.78-.26 4.4.73 5.84.48.7 1.06 1.49 1.82 1.46.74-.03 1.02-.48 1.91-.48s1.13.48 1.91.47c.79-.01 1.29-.71 1.77-1.42.55-.82.78-1.61.79-1.65-.02-.01-1.51-.58-1.52-2.29l-.01-.02zm-1.45-4.28c.4-.48.67-1.14.6-1.8-.58.02-1.28.39-1.69.88-.37.43-.7 1.11-.61 1.76.64.05 1.3-.33 1.7-.84z" />
                    </svg>
                    <span>Continuar con Apple</span>
                    <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">
                      Próximamente
                    </span>
                  </button>
                </div>
              </div>

              {/* Security Badge */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 text-sm text-slate-400 bg-slate-800/30 px-4 py-2 rounded-full border border-slate-700/50">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span>Autenticación segura y confiable</span>
                </div>
              </div>

              {/* Benefits Preview */}
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <div className="text-center mb-4">
                  <p className="text-slate-400 text-sm font-medium">
                    ¿Qué obtienes al iniciar sesión?
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Dashboard personalizado</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Analytics detallados</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>Enlaces ilimitados</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Personalización total</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="text-center mt-8 animate-fade-in-up delay-300">
            <p className="text-slate-400 text-sm">
              ¿Primera vez aquí?{" "}
              <a
                href="/signup"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-medium hover:from-blue-300 hover:to-cyan-300 transition-all duration-300"
              >
                Crea tu cuenta gratis
              </a>
            </p>
          </div>
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
          .delay-1000 {
            animation-delay: 1000ms;
          }
          .delay-2000 {
            animation-delay: 2000ms;
          }
        `}</style>
      </div>
    </>
  );
}
