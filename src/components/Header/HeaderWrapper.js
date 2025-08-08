import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import HeaderClient from "./HeaderClient";

export default async function HeaderWrapper() {
  const session = await getServerSession(authOptions);
  return <HeaderClient session={session} />;
}
