"use client";

import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/providers/UserProvider";

export default function ClientWrapper({ children }) {
  return (
    <SessionProvider>
      <UserProvider>{children}</UserProvider>
    </SessionProvider>
  );
}
