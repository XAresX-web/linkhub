import { useFormStatus } from "react-dom";
import { ChevronRight } from "lucide-react";

export default function SubmitButton({ children, className = "" }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`
        group relative w-full overflow-hidden rounded-2xl
        bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500
        px-8 py-4 text-white font-semibold text-lg
        transform transition-all duration-300 ease-out
        hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25
        active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
        disabled:transform-none
        ${className}
      `}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />

      {/* Content */}
      <div className="relative flex items-center justify-center gap-3">
        {pending ? (
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
}
