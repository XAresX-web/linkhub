"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiX } from "react-icons/si";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function FooterClient() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Por favor ingresa un email válido.");
      return;
    }
    window.location.href = `mailto:linkhub.info@gmx.com?subject=Suscripción&body=Hola, me gustaría suscribirme con este correo: ${email}`;
  };
  return (
    <footer className="relative mt-0 overflow-hidden">
      {/* Animated Background with Glass Effect */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

        {/* Floating orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse animation-delay-4000"></div>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

        {/* Top border glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section with Enhanced Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo and Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group flex items-center space-x-4 transition-all duration-300 hover:scale-105">
              {/* Logo with Glass Container */}
              <div className="relative p-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:bg-white/15">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <Image
                  src="/assets/logo.png"
                  alt="LinkHub Logo"
                  height={40}
                  width={40}
                  className="relative z-10 transition-all duration-300 group-hover:brightness-125"
                />
              </div>

              <div>
                <h3 className="font-black text-3xl bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  LinkHub
                </h3>
                <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">
                  Conecta todo en un solo lugar ✨
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              La plataforma más poderosa para crear tu presencia digital.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                {" "}
                Únete a millones de creadores
              </span>{" "}
              que ya confían en nosotros.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  50M+
                </div>
                <div className="text-xs text-gray-400">Usuarios</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  1B+
                </div>
                <div className="text-xs text-gray-400">Enlaces</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  99.9%
                </div>
                <div className="text-xs text-gray-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Plataforma</h4>
            <div className="space-y-3">
              {[
                { href: "/about", label: "Acerca de", icon: "ℹ️" },
                { href: "/pricing", label: "Precios", icon: "💎" },
                { href: "/contact", label: "Contacto", icon: "📧" },
                {
                  href: "mailto:linkhub.info@gmx.com",
                  label: "Ayuda",
                  icon: "❓",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {item.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Mantente Conectado</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Recibe las últimas actualizaciones y consejos para maximizar tu
              presencia digital.
            </p>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl blur opacity-50"></div>
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-xl">
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    onClick={handleSubscribe}
                    className="group relative px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Suscribirse</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        ✨
                      </span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-gray-400 text-sm">🌟</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LinkHub. Todos los derechos
              reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Hecho con 💜 para creadores de todo el mundo
            </p>
          </div>

          {/* Enhanced Social Media Icons */}
          <div className="flex items-center space-x-4">
            {[
              {
                href: "https://x.com/linkhub_oficial?s=21",
                icon: SiX,
                color: "from-black to-gray-800",
                hoverColor: "hover:shadow-black/25",
              },
              {
                href: "https://www.facebook.com/profile.php?id=61578992771811",
                icon: FaFacebookF,
                color: "from-blue-600 to-indigo-600",
                hoverColor: "hover:shadow-blue-600/25",
              },
              {
                href: "https://github.com/luissanchezz-dev",
                icon: FaGithub,
                color: "from-gray-400 to-gray-600",
                hoverColor: "hover:shadow-gray-500/25",
              },
              {
                href: "https://www.linkedin.com/in/luiss-sanchezz/",
                icon: FaLinkedinIn,
                color: "from-blue-500 to-blue-700",
                hoverColor: "hover:shadow-blue-600/25",
              },
            ].map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/15 ${social.hoverColor} hover:shadow-xl`}
                >
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-all duration-300`}
                  ></div>

                  {/* Icon */}
                  <IconComponent
                    size="1.25em"
                    className={`relative z-10 text-gray-300 group-hover:text-white transition-all duration-300 group-hover:drop-shadow-lg`}
                  />

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.color} blur opacity-0 group-hover:opacity-30 transition-all duration-300 -z-10`}
                  ></div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Enhanced backdrop blur */
        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }

        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }

        /* Gradient border simulation */
        .border-gradient-to-r {
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          height: 1px;
          border: none;
        }

        /* Improved focus states */
        input:focus,
        button:focus {
          outline: 2px solid rgba(168, 85, 247, 0.5);
          outline-offset: 2px;
        }

        /* Custom scrollbar for webkit browsers */
        *::-webkit-scrollbar {
          width: 8px;
        }

        *::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        *::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #a855f7, #ec4899);
          border-radius: 4px;
        }

        /* Smooth animations */
        * {
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </footer>
  );
}
