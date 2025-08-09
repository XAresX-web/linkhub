"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaBriefcase,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiX } from "react-icons/si"; // Icono oficial de X

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const socialLinks = [
    {
      href: "https://x.com/linkhub_oficial?s=21",
      icon: SiX, // Cambiado a X
      color: "from-black to-gray-800", // Negros típicos de X
      hoverColor: "hover:shadow-black/25",
      bgColor: "bg-black/10",
      name: "X",
    },
    {
      href: "https://www.instagram.com/linkhub.app/",
      icon: AiFillInstagram,
      color: "from-pink-500 to-yellow-400", // Gradiente típico insta
      hoverColor: "hover:shadow-pink-500/25",
      bgColor: "bg-pink-500/10",
      name: "Instagram",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61578992771811",
      icon: FaFacebookF,
      color: "from-blue-600 to-indigo-600",
      hoverColor: "hover:shadow-blue-600/25",
      bgColor: "bg-blue-600/10",
      name: "Facebook",
    },
    {
      href: "https://github.com/luissanchezz-dev",
      icon: FaGithub,
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-gray-700/25",
      bgColor: "bg-gray-700/10",
      name: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/luiss-sanchezz/",
      icon: FaLinkedinIn,
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:shadow-blue-500/25",
      bgColor: "bg-blue-500/10",
      name: "LinkedIn",
    },
    {
      href: "https://biolink-ai-beta.vercel.app/",
      icon: FaBriefcase,
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:shadow-purple-500/25",
      bgColor: "bg-purple-500/10",
      name: "Otros proyectos",
    },
  ];

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.1),transparent_50%)] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(99,102,241,0.1),transparent_50%)] animate-pulse delay-2000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-cyan-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-blue-400/30 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-sky-400/25 to-blue-400/20 rounded-full blur-xl animate-float-slow"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center min-h-screen py-8">
          <main className="flex flex-col items-center w-full flex-1 px-4 md:px-20 text-center max-w-6xl mx-auto">
            {/* Logo Section */}
            <div className="relative mb-12 animate-fade-in-up">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500">
                <Image
                  src="/assets/logo.png"
                  alt="LinkHub Logo"
                  height={300}
                  width={300}
                  className="drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Title Section */}
            <div className="mb-16 animate-fade-in-up delay-300">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium backdrop-blur-sm">
                  💬 Conectemos
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 mb-6 leading-tight">
                Contáctanos
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Estamos aquí para ayudarte. Síguenos en nuestras redes sociales
                o contáctanos directamente.
              </p>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 animate-fade-in-up delay-500">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-6 rounded-2xl ${social.bgColor} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2 ${social.hoverColor} hover:shadow-2xl`}
                  >
                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}
                    ></div>

                    {/* Content */}
                    <div className="relative flex flex-col items-center space-y-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <IconComponent size="1.5em" />
                      </div>
                      <span className="text-white font-medium text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                        {social.name}
                      </span>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                );
              })}
            </div>

            {/* Contact Methods */}
            <div className="w-full max-w-4xl animate-fade-in-up delay-700">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Envíanos un mensaje
                      </h3>
                    </div>
                    <p className="text-slate-300 mb-6">
                      ¿Tienes una pregunta específica? Nos encantaría escucharte
                      y ayudarte con lo que necesites.
                    </p>
                    {/* Aquí el botón abre el modal */}
                    <button
                      onClick={() => setIsOpen(true)}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      Abrir Formulario de Contacto
                    </button>
                  </div>
                </div>

                {/* Direct Contact Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Contacto directo
                      </h3>
                    </div>
                    <p className="text-slate-300 mb-6">
                      Prefiere hablar directamente? Estamos disponibles a través
                      de múltiples canales de comunicación.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm text-slate-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span>Email: linkhub.info@gmx.com</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-slate-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span>Tiempo de respuesta: 24h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aquí agregamos el Modal */}
            {isOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                onClick={() => setIsOpen(false)} // Cierra modal al clicar fondo
              >
                <div
                  className="bg-white rounded-xl max-w-3xl w-full p-6 relative"
                  onClick={(e) => e.stopPropagation()} // Previene cierre si clicas dentro del modal
                >
                  <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsOpen(false)}
                    aria-label="Cerrar modal"
                  >
                    <SiX size={24} />
                  </button>

                  {/* Cambia la URL por la de tu Google Form */}
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "150%",
                      height: 0,
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSe9zAcUx-5Ooz2d_zdwTPg7Jdt2nCsojLw4xIXZjVPXHxI-iQ/viewform?embedded=true"
                      title="Formulario de Contacto"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-16 animate-fade-in-up delay-900">
              <p className="text-slate-400 mb-6">
                ¿Listo para comenzar tu viaje digital?
              </p>
              <Link
                href="/login"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>🚀 Crear Mi LinkHub</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </Link>
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
              opacity: 0.1;
            }
            50% {
              opacity: 0.2;
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
          .delay-700 {
            animation-delay: 700ms;
          }
          .delay-900 {
            animation-delay: 900ms;
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
