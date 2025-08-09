"use client";

import LogoutButton from "@/components/buttons/LogoutButton";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function HeaderClient({ session }) {
  return (
    <>
      {/* Fixed Header with Glass Effect */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Glass Background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5"></div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo Section with Enhanced Design */}
            <Link
              href="/"
              className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
            >
              {/* Logo Container with Glass Effect */}
              <div className="relative p-2 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-white/25">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <Image
                  src="/assets/logo.png"
                  alt="LinkHub Logo"
                  height={32}
                  width={32}
                  className="relative z-10 transition-all duration-300 group-hover:brightness-110"
                />
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="font-black text-xl lg:text-2xl bg-gradient-to-r from-gray-900 via-purple-800 to-cyan-800 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-cyan-600 transition-all duration-300">
                  LinkHub
                </span>
                <span className="text-xs text-gray-600/70 font-medium -mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Conecta todo
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Glass Pills */}
            <nav className="hidden lg:flex items-center space-x-2">
              <div className="flex items-center space-x-1 p-1 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                {[
                  { href: "/about", label: "Acerca de", icon: "ℹ️" },
                  { href: "/pricing", label: "Precios", icon: "💎" },
                  { href: "/contact", label: "Contacto", icon: "📧" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:text-gray-900 transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </span>

                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {!!session ? (
                <div className="flex items-center space-x-3">
                  {/* Account Button */}
                  <Link
                    href="/account"
                    className="group relative px-6 py-2.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
                  >
                    {/* Button Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 transition-all duration-300 group-hover:from-purple-500 group-hover:to-cyan-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 backdrop-blur-sm"></div>

                    {/* Content */}
                    <span className="relative z-10 flex items-center space-x-2">
                      <span className="text-sm">👤</span>
                      <span>Mi Cuenta</span>
                    </span>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </Link>

                  {/* Enhanced Logout Button Container */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 blur-sm opacity-0 hover:opacity-100 transition-all duration-300"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300">
                      <LogoutButton />
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="group relative px-6 py-2.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:from-indigo-500 group-hover:to-purple-500"></div>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center space-x-2">
                    <span className="text-sm">✨</span>
                    <span>Iniciar Sesión</span>
                  </span>

                  {/* Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
              )}
            </div>

            {/* Enhanced Mobile Hamburger Menu */}
            <div className="lg:hidden relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-lg"></div>
              <div className="relative">
                <HamburgerMenu session={session} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20"></div>

      {/* Custom CSS Styles */}
      <style jsx global>{`
        /* Enhanced backdrop blur support */
        @supports (backdrop-filter: blur(0)) {
          .backdrop-blur-xl {
            backdrop-filter: blur(24px);
          }
          .backdrop-blur-lg {
            backdrop-filter: blur(16px);
          }
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }
        }

        /* Fallback for browsers that don't support backdrop-filter */
        @supports not (backdrop-filter: blur(0)) {
          .backdrop-blur-xl {
            background-color: rgba(255, 255, 255, 0.15);
          }
          .backdrop-blur-lg {
            background-color: rgba(255, 255, 255, 0.12);
          }
          .backdrop-blur-sm {
            background-color: rgba(255, 255, 255, 0.08);
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom glassmorphism utilities */
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        /* Enhanced hover states */
        .glass-hover:hover {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        /* Mobile responsive adjustments */
        @media (max-width: 1024px) {
          .backdrop-blur-xl {
            backdrop-filter: blur(16px);
          }
        }

        @media (max-width: 640px) {
          .backdrop-blur-xl {
            backdrop-filter: blur(12px);
          }
        }

        /* Animation for header appearance */
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        header {
          animation: slideDown 0.6s ease-out;
        }

        /* Improved text rendering */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Enhanced focus states for accessibility */
        .focus-visible {
          outline: 2px solid rgba(139, 92, 246, 0.8);
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}
