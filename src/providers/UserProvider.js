"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext({
  profileImage: null,
  setProfileImage: () => {},
});

export function UserProvider({ children, initialProfileImage = null }) {
  const [profileImage, setProfileImage] = useState(
    initialProfileImage || "/default-avatar.png"
  );

  // Cargar de localStorage si no viene del servidor
  useEffect(() => {
    if (!initialProfileImage && typeof window !== "undefined") {
      const stored = localStorage.getItem("profileImage");
      if (stored) setProfileImage(stored);
    }
  }, [initialProfileImage]);

  // Guardar en localStorage al cambiar
  useEffect(() => {
    if (typeof window !== "undefined" && profileImage) {
      localStorage.setItem("profileImage", profileImage);
    }
  }, [profileImage]);

  return (
    <UserContext.Provider value={{ profileImage, setProfileImage }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
