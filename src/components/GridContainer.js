import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// Iconos SVG personalizados con diseño moderno
const UserFriendsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const StoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19 7h-3V6a4 4 0 00-8 0v1H5a1 1 0 00-1 1v11a3 3 0 003 3h10a3 3 0 003-3V8a1 1 0 00-1-1zM10 6a2 2 0 014 0v1h-4V6zm8 15a1 1 0 01-1 1H7a1 1 0 01-1-1V9h2v1a1 1 0 002 0V9h4v1a1 1 0 002 0V9h2v12z" />
  </svg>
);

const ChartBarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const QrCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM19 19h2v2h-2zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM15 19h2v2h-2zM17 17h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2z" />
  </svg>
);

const PlugIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M8.5 8.64L13.77 4.5l2.12 2.12l4.5-4.5l1.06 1.06l-4.5 4.5l2.12 2.12L14.36 15.5c-.78.78-2.05.78-2.83 0L8.5 12.47c-.78-.78-.78-2.05 0-2.83z" />
    <path d="M10.61 11.25l2.83 2.83l2.83-2.83L14.14 9.1L12 11.24L9.86 9.1z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

// Datos de los elementos del grid con colores premium
const items = [
  {
    Icon: UserFriendsIcon,
    title: "Haz crecer tus seguidores en todas tus plataformas sociales",
    description:
      "Ofrece a tus seguidores acceso fácil a todo tu contenido con un solo enlace. ¡Ahora todo está a un solo clic!",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    hoverGradient: "from-purple-500/30 to-pink-500/30",
  },
  {
    Icon: StoreIcon,
    title: "Vende productos y monetiza tu audiencia",
    description:
      "Vende tus productos, acepta pagos e incluso incluye enlaces de 'Apóyame' para que tu audiencia pueda apoyarte, dar propinas o donar.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    hoverGradient: "from-emerald-500/30 to-teal-500/30",
  },
  {
    Icon: ChartBarIcon,
    title: "Crezca con análisis de usuarios en profundidad",
    description:
      "Utilice análisis potentes para saber con qué interactúan sus seguidores y utilice esa información para hacer crecer sus seguidores y su negocio.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    hoverGradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    Icon: GlobeIcon,
    title: "Crea un minisitio web personalizado en segundos",
    description:
      "Crea tu propio LinkHub en solo unos segundos y personalízalo de manera que refleje tu marca o estilo.",
    gradient: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
    hoverGradient: "from-orange-500/30 to-red-500/30",
  },
  {
    Icon: QrCodeIcon,
    title: "Lleva tu mundo offline al mundo online con códigos QR",
    description:
      "Conecte fácilmente desde la vida real (el empaque de su producto, sus carteles y folletos) a su mundo en línea con un simple código QR.",
    gradient: "from-indigo-500/20 to-purple-500/20",
    iconColor: "text-indigo-400",
    hoverGradient: "from-indigo-500/30 to-purple-500/30",
  },
  {
    Icon: PlugIcon,
    title: "Integre su LinkHub con su tecnología existente",
    description:
      "LinkHub se conecta perfectamente a otras plataformas como Mailchimp, Vimeo, Zapier, Amazon, YouTube, Google Analytics y ¡muchas más!",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
    hoverGradient: "from-rose-500/30 to-pink-500/30",
  },
];

// Componente GridItem moderno con glassmorphism y microanimaciones
const GridItem = ({
  Icon,
  title,
  description,
  gradient,
  iconColor,
  hoverGradient,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border border-white/10 
        bg-gradient-to-br ${isHovered ? hoverGradient : gradient}
        backdrop-blur-xl transition-all duration-500 ease-out
        hover:border-white/20 hover:scale-[1.02] hover:-translate-y-1
        cursor-pointer animate-fade-in-up
      `}
      style={{
        animationDelay: `${index * 100}ms`,
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)"
          : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de brillo sutil en hover */}
      <div
        className={`
        absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000
      `}
      />

      {/* Contenido principal */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Icono con animación de flotación */}
        <div
          className={`
          flex items-center justify-center w-14 h-14 rounded-xl mb-4
          bg-white/10 backdrop-blur-sm border border-white/10
          transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
          ${iconColor}
        `}
        >
          <Icon className="text-2xl animate-pulse-slow" />
        </div>

        {/* Título con jerarquía tipográfica clara */}
        <h3
          className="
          text-white font-bold text-lg leading-tight mb-3
          group-hover:text-white/90 transition-colors duration-300
          line-clamp-2
        "
        >
          {title}
        </h3>

        {/* Descripción optimizada */}
        <p
          className="
          text-white/70 text-sm leading-relaxed flex-grow
          group-hover:text-white/80 transition-colors duration-300
          line-clamp-4
        "
        >
          {description}
        </p>

        {/* CTA sutil que aparece en hover */}
        <div
          className={`
          flex items-center text-xs font-medium mt-4 pt-4
          border-t border-white/10 transition-all duration-300
          ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
          ${iconColor}
        `}
        >
          <Link
            href="/about"
            className={`
    flex items-center text-xs font-medium mt-4 pt-4
    border-t border-white/10 transition-all duration-300
    ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
    ${iconColor}
  `}
          >
            <span>Descubrir más</span>
            <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Componente principal con diseño responsivo avanzado
const GridContainer = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10">
        {/* Encabezado con jerarquía visual clara */}
        <div className="text-center pt-16 pb-8 px-4">
          <h1
            className="
            text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r 
            from-white via-purple-200 to-pink-200 bg-clip-text text-transparent 
            mb-4 animate-fade-in
          "
          >
            Beneficios de LinkHub
          </h1>
          <p
            className="
            text-white/70 text-lg md:text-xl max-w-2xl mx-auto 
            animate-fade-in-up
          "
            style={{ animationDelay: "200ms" }}
          >
            Descubre todas las herramientas que necesitas para hacer crecer tu
            presencia digital
          </p>
        </div>

        {/* Grid responsivo con espaciado optimizado */}
        <div
          className="
          container mx-auto px-4 pb-16
          grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
          gap-6 lg:gap-8 max-w-7xl
        "
        >
          {items.map((item, index) => (
            <GridItem
              key={index}
              index={index}
              Icon={item.Icon}
              title={item.title}
              description={item.description}
              gradient={item.gradient}
              iconColor={item.iconColor}
              hoverGradient={item.hoverGradient}
            />
          ))}
        </div>
      </div>

      {/* Estilos CSS personalizados para animaciones */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Responsivo avanzado */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Mejoras de accesibilidad */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-fade-in-up,
          .animate-pulse-slow {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .group:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default GridContainer;
