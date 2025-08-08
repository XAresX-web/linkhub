"use client";
import { useState } from "react";

export default function CopyProfileLink({ url }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="my-6 mx-auto max-w-xl px-4 text-center">
      <p className="mb-3 font-semibold text-gray-700">
        Tu enlace público para compartir:
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
        <input
          type="text"
          readOnly
          value={url}
          className="w-full sm:w-auto flex-grow border border-gray-300 rounded-md px-3 py-2 text-center text-sm sm:text-base truncate"
          title={url}
        />
        <button
          onClick={copyToClipboard}
          className={`px-5 py-2 rounded-md text-white transition-colors duration-200 ${
            copied ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"
          }`}
          aria-label="Copiar enlace público"
        >
          {copied ? "¡Copiado!" : "Copiar"}
        </button>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
          aria-label="Vista previa del perfil público"
        >
          Vista previa
        </a>
      </div>
    </section>
  );
}
