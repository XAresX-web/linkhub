"use client";

import LogoutButton from "@/components/buttons/LogoutButton";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faChartLine,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useUser } from "@/providers/UserProvider";
import { useState, useEffect } from "react";

export default function AppSidebar({ page }) {
  const path = usePathname();
  const { profileImage, user } = useUser();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Para evitar problemas con SSR y montar animación suave
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    {
      href: "/account",
      icon: faFileLines,
      label: "Mi Página",
      description: "Gestiona tu perfil",
    },
    {
      href: "/analytics",
      icon: faChartLine,
      label: "Analíticas",
      description: "Visualiza estadísticas",
    },
  ];

  return (
    <div
      className={`
        fixed left-0 top-0 h-full z-50
        transition-all duration-700 ease-out
        ${mounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
      `}
    >
      {/* Sidebar */}
      <nav
        className={`
          relative h-full
          bg-gradient-to-b from-black/20 via-black/10 to-transparent
          backdrop-blur-xl border-r border-white/30 shadow-inner shadow-black/30
          transition-all duration-500 ease-out
          ${isCollapsed ? "w-20" : "w-80"}
          shadow-[0_8px_32px_rgba(0,0,0,0.12)]
          before:absolute before:inset-0 before:bg-gradient-to-br 
          before:from-blue-500/20 before:via-purple-500/20 before:to-pink-500/20
          before:opacity-70 before:pointer-events-none
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="relative p-6 border-b border-white/10 flex flex-col">
          {/* Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`
              absolute -right-4 top-8 z-10
              w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600
              rounded-full shadow-lg border-2 border-white/20
              flex items-center justify-center text-white text-sm
              transition-all duration-300 ease-out
              hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
              hover:scale-110 active:scale-95
              group
            `}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={`transition-transform duration-300 ease-out ${
                isCollapsed ? "rotate-180" : ""
              } group-hover:scale-110`}
            />
          </button>

          {/* Profile Section */}
          <div
            className={`
              flex items-center gap-4 mb-6
              transition-all duration-500 ease-out
              ${isCollapsed ? "justify-center" : "justify-start"}
            `}
          >
            <div className="relative group">
              {/* Avatar Container */}
              <div
                className={`
                  relative overflow-hidden rounded-full
                  bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500
                  p-[2px] shadow-lg
                  transition-all duration-300 ease-out
                  group-hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]
                  group-hover:scale-105
                  ${isCollapsed ? "w-12 h-12" : "w-16 h-16"}
                `}
              >
                <div
                  className={`
                    w-full h-full rounded-full overflow-hidden
                    bg-white/10 backdrop-blur-sm
                    flex items-center justify-center
                    ${isCollapsed ? "w-11 h-11" : "w-15 h-15"}
                  `}
                >
                  {profileImage ? (
                    <Image
                      src={profileImage}
                      alt="Profile"
                      width={60}
                      height={60}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faUser}
                      className={`text-white/80 ${
                        isCollapsed ? "w-5 h-5" : "w-6 h-6"
                      }`}
                    />
                  )}
                </div>
              </div>

              {/* Status indicator */}
              <div
                className={`
                  absolute -bottom-1 -right-1
                  w-4 h-4 bg-green-400 border-2 border-white
                  rounded-full shadow-sm
                  transition-all duration-300 ease-out
                  ${isCollapsed ? "w-3 h-3" : "w-4 h-4"}
                `}
              >
                <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* User Info */}
            <div
              className={`
                transition-all duration-500 ease-out
                ${isCollapsed ? "w-0 opacity-0 overflow-hidden" : "opacity-100"}
              `}
            >
              <h3 className="text-white/90 font-semibold text-lg leading-tight">
                {user?.name || "Usuario"}
              </h3>
              <p className="text-white/60 text-sm font-medium">
                Cuenta Gratuita
              </p>

              {page?.uri && (
                <div className="mt-2 flex items-center gap-1 text-sm text-blue-400">
                  <Link
                    target="_blank"
                    href={`/${page.uri}`}
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <Image
                      src="/assets/logo.png"
                      alt="logo"
                      height={20}
                      width={20}
                    />
                    <span>/{page.uri}</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Decorative pulse */}
          <div className="absolute top-4 right-4 opacity-30">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = path === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group block w-full"
              >
                <div
                  className={`
                    relative flex items-center gap-4 p-4 rounded-2xl
                    transition-all duration-300 ease-out
                    hover:bg-white/10 hover:backdrop-blur-sm
                    hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]
                    hover:scale-[1.02] hover:-translate-y-0.5
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-lg border border-white/20"
                        : "hover:border hover:border-white/10"
                    }
                    ${isCollapsed ? "justify-center" : "justify-start"}
                  `}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <div
                      className={`
                        absolute left-0 top-1/2 -translate-y-1/2
                        w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500
                        rounded-r-full shadow-lg
                        transition-all duration-300 ease-out
                        ${isCollapsed ? "opacity-0" : "opacity-100"}
                      `}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`
                      relative flex items-center justify-center
                      w-10 h-10 rounded-xl
                      transition-all duration-300 ease-out
                      ${
                        isActive
                          ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg"
                          : "text-white/70 group-hover:text-white group-hover:bg-white/10"
                      }
                      group-hover:scale-110 group-hover:rotate-2
                    `}
                  >
                    <FontAwesomeIcon
                      fixedWidth
                      icon={item.icon}
                      className="w-5 h-5"
                    />

                    {/* Glow */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 blur opacity-30 -z-10" />
                    )}
                  </div>

                  {/* Label */}
                  <div
                    className={`
                      flex-1 transition-all duration-500 ease-out
                      ${
                        isCollapsed
                          ? "w-0 opacity-0 overflow-hidden"
                          : "opacity-100"
                      }
                    `}
                  >
                    <div
                      className={`
                        font-semibold transition-colors duration-200
                        ${
                          isActive
                            ? "text-white"
                            : "text-white/80 group-hover:text-white"
                        }
                      `}
                    >
                      {item.label}
                    </div>
                    <div className="text-white/50 text-sm font-medium mt-0.5">
                      {item.description}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div
                    className={`
                      transition-all duration-300 ease-out
                      ${
                        isCollapsed
                          ? "w-0 opacity-0"
                          : "opacity-0 group-hover:opacity-100"
                      }
                      translate-x-2 group-hover:translate-x-0
                    `}
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="w-3 h-3 text-white/40 rotate-180"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <div className={isCollapsed ? "flex justify-center" : "block"}>
            <LogoutButton
              iconLeft
              className={`
                group flex items-center gap-4 p-4 w-full
                text-white/70 rounded-2xl font-medium
                transition-all duration-300 ease-out
                hover:bg-red-500/10 hover:text-red-400
                hover:backdrop-blur-sm hover:border hover:border-red-500/20
                hover:shadow-[0_4px_20px_rgba(239,68,68,0.1)]
                hover:scale-[1.02] hover:-translate-y-0.5
                ${isCollapsed ? "w-auto px-3" : "w-full"}
              `}
              iconClasses="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>

        {/* Back to Website */}
        <div className="p-4">
          <Link
            href="/"
            className={`
              group flex items-center gap-3 p-3 rounded-xl
              text-white/50 text-sm font-medium
              transition-all duration-300 ease-out
              hover:text-white/80 hover:bg-white/5
              hover:backdrop-blur-sm
              ${isCollapsed ? "justify-center" : "justify-start"}
            `}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-3 h-3 group-hover:scale-110 group-hover:-translate-x-1 transition-all duration-200"
            />
            <span
              className={`
                transition-all duration-500 ease-out
                ${isCollapsed ? "w-0 opacity-0 overflow-hidden" : "opacity-100"}
              `}
            >
              Volver al sitio web
            </span>
          </Link>
        </div>

        {/* Ambient Effects */}
        <div className="absolute top-20 right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-20 left-4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </nav>

      {/* Mobile Overlay */}
      {/* Cuando sidebar está expandido (isCollapsed === false), mostramos overlay para cerrar tocando fuera */}
      <div
        className={`
          fixed inset-0 bg-black/20 backdrop-blur-sm
          lg:hidden transition-opacity duration-300
          ${
            mounted && !isCollapsed
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setIsCollapsed(true)}
      />
    </div>
  );
}
