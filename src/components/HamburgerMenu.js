"use client";
import { useState, useEffect } from "react";

// Componente LogoutButton simulado para el ejemplo
const LogoutButton = () => (
  <button
    className="
    group relative overflow-hidden px-6 py-3 rounded-xl font-medium
    bg-gradient-to-r from-red-500/20 to-pink-500/20 
    hover:from-red-500/30 hover:to-pink-500/30
    border border-red-500/20 hover:border-red-500/30
    text-red-300 hover:text-red-200 backdrop-blur-sm
    transition-all duration-300 transform hover:scale-[1.02]
    shadow-lg hover:shadow-red-500/25
  "
  >
    <span className="relative z-10">Cerrar sesión</span>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
  </button>
);

// Iconos SVG personalizados con diseño moderno
const BarsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      d="M3 12h18M3 6h18M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TimesIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      d="M9 18l6-6-6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Componente Link simulado para el ejemplo
const Link = ({ href, children, className, onClick }) => (
  <a href={href} className={className} onClick={onClick}>
    {children}
  </a>
);

const HamburgerMenu = ({ session = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsOpen(!isOpen);

    // Reset animation state
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Cerrar menú con escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevenir scroll del body cuando el menú está abierto
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Elementos de navegación con configuración
  const navigationItems = [
    { href: "/about", label: "Acerca de", icon: "🏢" },
    { href: "/pricing", label: "Precios", icon: "💰" },
    { href: "/contact", label: "Contacto", icon: "📧" },
  ];

  return (
    <>
      {/* Botón hamburger con animaciones avanzadas */}
      <div className="sm:hidden relative z-50">
        <button
          onClick={toggleMenu}
          className={`
            group relative p-3 rounded-xl transition-all duration-300
            bg-white/10 backdrop-blur-sm border border-white/20
            hover:bg-white/20 hover:border-white/30 hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-purple-500/50
            ${isOpen ? "rotate-90 bg-white/20" : "rotate-0"}
          `}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <div className="relative w-6 h-6 text-slate-300 group-hover:text-white transition-colors duration-300">
            {/* Animación de transición entre iconos */}
            <div
              className={`
              absolute inset-0 transition-all duration-300 transform
              ${
                isOpen
                  ? "rotate-90 opacity-0 scale-0"
                  : "rotate-0 opacity-100 scale-100"
              }
            `}
            >
              <BarsIcon className="w-full h-full" />
            </div>
            <div
              className={`
              absolute inset-0 transition-all duration-300 transform
              ${
                isOpen
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-90 opacity-0 scale-0"
              }
            `}
            >
              <TimesIcon className="w-full h-full" />
            </div>
          </div>

          {/* Efecto de onda en click */}
          <div
            className={`
            absolute inset-0 rounded-xl bg-white/20 transition-all duration-300
            ${isAnimating ? "animate-ping" : "scale-0"}
          `}
          />
        </button>
      </div>

      {/* Overlay con blur de fondo */}
      <div
        className={`
          fixed inset-0 z-40 transition-all duration-500 sm:hidden
          ${
            isOpen
              ? "backdrop-blur-md bg-black/50 opacity-100 pointer-events-auto"
              : "backdrop-blur-0 bg-black/0 opacity-0 pointer-events-none"
          }
        `}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Menú principal con glassmorphism avanzado */}
      <div
        className={`
        fixed top-0 left-0 w-full z-40 sm:hidden transition-all duration-500 ease-out
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
      >
        <div
          className="
          relative mt-20 mx-4 rounded-2xl overflow-hidden
          bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl
          border border-white/20 shadow-2xl
        "
        >
          {/* Efectos decorativos de fondo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow" />
            <div
              className="absolute bottom-0 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Contenido del menú */}
          <nav className="relative z-10 p-6">
            {/* Enlaces de navegación */}
            <div className="space-y-2 mb-6">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`
                    group flex items-center justify-between p-4 rounded-xl
                    bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20
                    text-white/80 hover:text-white transition-all duration-300
                    transform hover:translate-x-2 hover:scale-[1.02]
                    animate-slide-in-left
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Separador elegante */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

            {/* Botones de acción */}
            <div className="space-y-3">
              {!!session ? (
                <>
                  {/* Botón de cuenta */}
                  <Link
                    href="/account"
                    onClick={toggleMenu}
                    className="
                      group relative overflow-hidden flex items-center justify-center gap-3 
                      w-full p-4 rounded-xl font-semibold transition-all duration-300
                      bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30
                      border border-blue-500/30 hover:border-blue-500/40
                      text-blue-200 hover:text-white backdrop-blur-sm
                      transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25
                      animate-slide-in-up
                    "
                    style={{ animationDelay: "300ms" }}
                  >
                    <span className="text-lg">👤</span>
                    <span className="relative z-10">Mi Cuenta</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </Link>

                  {/* Botón de logout */}
                  <div
                    className="animate-slide-in-up"
                    style={{ animationDelay: "400ms" }}
                  >
                    <LogoutButton />
                  </div>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={toggleMenu}
                  className="
                    group relative overflow-hidden flex items-center justify-center gap-3 
                    w-full p-4 rounded-xl font-semibold transition-all duration-300
                    bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30
                    border border-emerald-500/30 hover:border-emerald-500/40
                    text-emerald-200 hover:text-white backdrop-blur-sm
                    transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25
                    animate-slide-in-up
                  "
                  style={{ animationDelay: "300ms" }}
                >
                  <span className="text-lg">🔐</span>
                  <span className="relative z-10">Iniciar Sesión</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              )}
            </div>

            {/* Indicador de cierre */}
            <div className="mt-6 text-center">
              <p className="text-white/50 text-xs">
                Toca fuera del menú o presiona ESC para cerrar
              </p>
            </div>
          </nav>
        </div>
      </div>

      {/* Estilos CSS personalizados */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        /* Mejoras de accesibilidad */
        @media (prefers-reduced-motion: reduce) {
          .animate-slide-in-left,
          .animate-slide-in-up,
          .animate-pulse-slow {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .group:hover {
            transform: none;
          }
        }

        /* Soporte para pantallas muy pequeñas */
        @media (max-height: 600px) {
          nav {
            padding: 1rem;
          }

          .space-y-2 > * + * {
            margin-top: 0.5rem;
          }

          .space-y-3 > * + * {
            margin-top: 0.75rem;
          }
        }
      `}</style>
    </>
  );
};

export default HamburgerMenu;
