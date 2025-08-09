"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronRight, User, CheckCircle, AlertCircle } from "lucide-react";

// Simulamos las funciones que no están disponibles en el sandbox
const grabUsername = async (formData) => {
  // Simulación de verificación de username
  const username = formData.get("username");
  const takenUsernames = ["admin", "user", "test", "demo"];
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula delay de API
  return !takenUsernames.includes(username?.toLowerCase());
};

const SubmitButton = ({ children, disabled, isLoading }) => (
  <button
    type="submit"
    disabled={disabled || isLoading}
    className={`
      group relative w-full overflow-hidden rounded-2xl
      bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500
      px-8 py-4 text-white font-semibold text-lg
      transform transition-all duration-300 ease-out
      hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25
      active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
      disabled:transform-none
    `}
  >
    {/* Glassmorphism overlay */}
    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Shimmer effect */}
    <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />

    {/* Content */}
    <div className="relative flex items-center justify-center gap-3">
      {isLoading ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Verificando...</span>
        </>
      ) : (
        <>
          {children}
          <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
        </>
      )}
    </div>
  </button>
);

export default function UsernameForm({ desiredUsername = "" }) {
  // Estados del componente
  const [taken, setTaken] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(desiredUsername);
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Referencias para animaciones
  const formRef = useRef(null);
  const inputRef = useRef(null);

  // Validación en tiempo real
  useEffect(() => {
    const username = inputValue.trim();
    setIsValid(username.length >= 3 && /^[a-zA-Z0-9_]+$/.test(username));
  }, [inputValue]);

  // Animación de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Manejo del submit
  async function handleSubmit(formData) {
    if (!isValid) return;

    setIsLoading(true);
    setTaken(false);

    try {
      const result = await grabUsername(formData);
      setTaken(!result);

      if (result) {
        // Simulamos el redirect con una animación de éxito
        setTimeout(() => {
          alert(
            `¡Éxito! Username "${formData.get(
              "username"
            )}" reclamado correctamente`
          );
          setIsLoading(false);
        }, 500);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setTaken(true);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main form container */}
      <div
        ref={formRef}
        className="relative w-full max-w-lg mx-auto animate-fadeInUp"
        style={{
          animationPlayState: "paused",
          animationFillMode: "both",
        }}
      >
        {/* Glassmorphism card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl shadow-purple-500/10">
          {/* Header section */}
          <div className="text-center mb-8">
            {/* Icon container */}
            <div className="relative mx-auto w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-75 animate-pulse" />
              <div className="relative bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl w-full h-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Title with gradient text */}
            <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-3 leading-tight">
              Confirma tu
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              nombre de usuario
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 mt-4 text-lg font-medium opacity-90">
              Elige un nombre único que te represente
            </p>
          </div>

          {/* Form */}
          <form action={handleSubmit} className="space-y-6">
            {/* Input container */}
            <div className="relative">
              {/* Input field */}
              <div
                className={`
                relative overflow-hidden rounded-2xl transition-all duration-300 ease-out
                ${
                  isFocused
                    ? "ring-2 ring-purple-400/50 shadow-lg shadow-purple-500/20 scale-[1.02]"
                    : "ring-1 ring-white/20"
                }
                ${
                  !isValid && hasInteracted && inputValue
                    ? "ring-red-500/50"
                    : ""
                }
                ${
                  isValid && hasInteracted && inputValue
                    ? "ring-green-500/50"
                    : ""
                }
              `}
              >
                {/* Input background with glassmorphism */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

                <input
                  ref={inputRef}
                  name="username"
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setHasInteracted(true);
                    setTaken(false);
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="tu_nombre_usuario"
                  className="
                    relative w-full px-10 py-8 bg-transparent text-black text-xl font-medium
                    placeholder:text-gray-400 placeholder:font-normal
                    text-center tracking-wide
                    focus:outline-none transition-all duration-200
                  "
                  maxLength="25"
                />

                {/* Validation icons */}
                {hasInteracted && inputValue && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    {isValid ? (
                      <CheckCircle className="w-6 h-6 text-green-500 animate-scaleIn" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-red-500 animate-shake" />
                    )}
                  </div>
                )}
              </div>

              {/* Character counter */}
              <div className="absolute -bottom-6 right-0 text-xs text-gray-600 font-medium">
                {inputValue.length}/25
              </div>
            </div>

            {/* Error message */}
            {taken && (
              <div className="animate-slideInDown bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-red-200">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">
                    Este nombre de usuario ya está registrado
                  </span>
                </div>
                <p className="text-red-500 text-sm mt-1">
                  Intenta con otro nombre único
                </p>
              </div>
            )}

            {/* Validation hint */}
            {!isValid && hasInteracted && inputValue && (
              <div className="animate-slideInDown bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-amber-600">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium text-sm">
                    Mínimo 3 caracteres, solo letras, números y guiones bajos
                  </span>
                </div>
              </div>
            )}

            {/* Submit button */}
            <div className="pt-2">
              <SubmitButton disabled={!isValid} isLoading={isLoading}>
                <span>Reclamar nombre de usuario</span>
              </SubmitButton>
            </div>

            {/* Additional info */}
            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium">
                Tu nombre de usuario será único y no se puede cambiar después
              </p>
            </div>
          </form>
        </div>

        {/* Bottom decorative gradient */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-lg" />
      </div>

      {/* Custom CSS animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-4px);
          }
          75% {
            transform: translateX(4px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInDown {
          animation: slideInDown 0.4s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        /* Responsive improvements */
        @media (max-width: 640px) {
          .backdrop-blur-xl {
            backdrop-filter: blur(20px);
          }
        }

        /* Improve performance on mobile */
        @media (hover: none) and (pointer: coarse) {
          .group:hover .group-hover\\:scale-\\[1\\.02\\] {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
