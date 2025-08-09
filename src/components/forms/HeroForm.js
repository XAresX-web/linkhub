"use client";

import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function HeroForm({ user }) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  // Animación de montaje
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Lógica original preservada
  useEffect(() => {
    if (
      "localStorage" in window &&
      window.localStorage.getItem("desiredUsername")
    ) {
      const storedUsername = window.localStorage.getItem("desiredUsername");
      window.localStorage.removeItem("desiredUsername");
      redirect("/account?desiredUsername=" + storedUsername);
    }
  }, []);

  // Manejo de escritura con debounce
  useEffect(() => {
    if (username.length > 0) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [username]);

  // Función de envío mejorada
  async function handleSubmit(ev) {
    ev.preventDefault();

    if (username.length === 0) {
      // Animación de shake si está vacío
      formRef.current?.classList.add("animate-shake");
      setTimeout(() => {
        formRef.current?.classList.remove("animate-shake");
      }, 500);
      inputRef.current?.focus();
      return;
    }

    setIsLoading(true);

    try {
      if (user) {
        router.push("/account?desiredUsername=" + username);
      } else {
        window.localStorage.setItem("desiredUsername", username);
        await signIn("google");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  }

  // Validación en tiempo real
  const isValidUsername =
    username.length >= 3 && /^[a-zA-Z0-9_-]+$/.test(username);
  const showValidation = username.length > 0;

  return (
    <div
      className={`
      relative w-full max-w-xl mx-auto
      transition-all duration-700 ease-out
      ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
    >
      {/* Efectos de fondo ambientales */}
      <div className="absolute -inset-4 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Contenedor principal con glassmorphism */}
      <div className="relative">
        {/* Formulario principal */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`
    relative group overflow-hidden
    bg-white/10 backdrop-blur-xl
    border border-white/20 rounded-3xl
    shadow-[0_8px_40px_rgba(0,0,0,0.12)]
    transition-all duration-500 ease-out
    ${
      isFocused || isTyping
        ? "shadow-[0_20px_60px_rgba(59,130,246,0.15)] border-blue-300/30 bg-white/15"
        : "hover:shadow-[0_12px_50px_rgba(0,0,0,0.15)] hover:border-white/30"
    }
    ${mounted ? "scale-100" : "scale-95"}
    before:absolute before:inset-0 
    before:bg-gradient-to-r before:from-blue-500/5 before:via-purple-500/5 before:to-pink-500/5
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100
  `}
        >
          {/* Efecto de brillo superior */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Contenedor flex principal */}
          <div className="flex items-center relative h-12">
            {" "}
            {/* altura fija de 3rem (48px), y alineación vertical centrada */}
            {/* Prefijo del dominio */}
            <div
              className={`
      flex items-center justify-center px-4  /* justify-center para centrar texto horizontal */
      h-full  /* para tomar la altura completa del contenedor */
      bg-gradient-to-r from-white/10 to-white/5
      border-r border-white/10
      transition-all duration-300 ease-out
      ${isFocused ? "bg-gradient-to-r from-blue-50/20 to-purple-50/10" : ""}
    `}
            >
              <span
                className={`
        font-bold text-base
        bg-gradient-to-r from-gray-700 via-blue-600 to-purple-600 
        bg-clip-text text-transparent
        transition-all duration-300 ease-out
        ${isFocused ? "from-blue-600 via-purple-600 to-pink-600" : ""}
        select-none
      `}
              >
                linkhub<span className="text-gray-400">/</span>
              </span>
            </div>
            {/* Campo de entrada */}
            <div className="flex-1 h-full relative">
              <input
                ref={inputRef}
                type="text"
                value={username}
                onChange={(e) =>
                  setUsername(
                    e.target.value.toLowerCase().replace(/[^a-zA-Z0-9_-]/g, "")
                  )
                }
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="usuario"
                disabled={isLoading}
                className={`
        w-full h-full px-4 bg-transparent
        text-gray-800 text-base font-medium
        placeholder-gray-400
        border-0 outline-none
        transition-all duration-300 ease-out
        ${isLoading ? "cursor-not-allowed opacity-60" : ""}
        disabled:placeholder-gray-300
      `}
                maxLength={30}
                autoComplete="username"
              />

              {/* Indicador de escritura */}
              {isTyping && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              )}

              {/* Línea de progreso animada */}
              <div
                className={`
        absolute bottom-0 left-0 h-0.5 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        transition-all duration-500 ease-out origin-left
        ${isFocused ? "w-full opacity-100" : "w-0 opacity-0"}
      `}
              />
            </div>
            {/* Botón de acción */}
            <div className="relative h-full">
              <button
                type="submit"
                disabled={isLoading || username.length === 0}
                className={`
        relative overflow-hidden
        px-3 sm:px-6 h-full  /* altura completa del contenedor */
        max-w-xs sm:max-w-full
        font-bold text-base
        bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700
        text-white rounded-r-3xl
        transition-all duration-300 ease-out
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:from-blue-500 hover:via-purple-500 hover:to-pink-500
        hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-transparent
        ${username.length > 0 ? "hover:-translate-y-0.5" : ""}
        group/button
        flex items-center justify-center  /* centrar contenido botón */
      `}
              >
                {/* Efecto de brillo animado */}
                <div
                  className={`
          absolute inset-0 
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          transform skew-x-12 -translate-x-full
          transition-transform duration-1000 ease-out
          ${isFocused || username.length > 0 ? "translate-x-full" : ""}
          group-hover/button:translate-x-full
        `}
                />

                {/* Contenido del botón */}
                <span className="relative z-10 flex items-center gap-3">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Procesando...</span>
                    </>
                  ) : (
                    <>
                      <span>Únete gratis</span>
                      <div
                        className={`
                transform transition-transform duration-300 ease-out
                group-hover/button:translate-x-1
              `}
                      >
                        ✨
                      </div>
                    </>
                  )}
                </span>

                {/* Partículas de éxito */}
                {username.length >= 3 && !isLoading && (
                  <div className="absolute -top-1 -right-1 w-3 h-3">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
                    <div className="absolute inset-0 bg-green-500 rounded-full" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Validación y feedback */}
        <div
          className={`
          mt-4 transition-all duration-500 ease-out
          ${
            showValidation
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
        >
          <div className="flex items-center gap-3 px-2 -mt-2">
            {/* Indicador de validación */}
            <div
              className={`
      w-2 h-2 rounded-full transition-all duration-300 ease-out
      ${
        isValidUsername
          ? "bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          : "bg-red-400 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
      }
    `}
            />

            {/* Mensaje de validación */}
            <p
              className={`
      text-sm font-medium transition-colors duration-300
      ${isValidUsername ? "text-green-600" : "text-red-600"}
    `}
            >
              {isValidUsername
                ? "¡Perfecto! Tu nombre está disponible"
                : "Mínimo 3 caracteres, solo letras, números, - y _"}
            </p>

            {/* Contador de caracteres */}
            <div className="ml-auto">
              <span
                className={`
        text-xs font-mono transition-colors duration-200
        ${username.length > 25 ? "text-red-500" : "text-gray-500"}
      `}
              >
                {username.length}/30
              </span>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div
          className={`
          mt-0 text-center transition-all duration-700 ease-out
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        >
          <p className="text-gray-800 text-sm">
            🚀 <strong>Gratis para siempre</strong> • ⚡{" "}
            <strong>Configuración en 30 segundos</strong> • 🎨{" "}
            <strong>Diseños profesionales</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
