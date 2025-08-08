import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PageButtonsForm from "@/components/forms/PageButtonsForm";
import PageLinksForm from "@/components/forms/PageLinksForm";
import PageSettingsForm from "@/components/forms/PageSettingsForm";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import cloneDeep from "clone-deep";
import dynamic from "next/dynamic";

const CopyProfileLink = dynamic(
  () => import("@/components/buttons/CopyProfileLink"),
  { ssr: false }
);

export const metadata = {
  title: "LinkHub | Cuenta",
  description:
    "Comparte tus enlaces, perfiles sociales, información de contacto y más en una sola página",
};

export default async function AccountPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }

  // Conexión a MongoDB
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const page = await Page.findOne({ owner: session.user.email });

  if (!page) {
    return <UsernameForm />;
  }

  const leanPage = cloneDeep(page.toJSON());
  leanPage._id = leanPage._id.toString();

  const username = leanPage.uri;

  // Asegúrate de tener NEXT_PUBLIC_SITE_URL en .env.local y que termina sin "/"
  const publicUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${username}`;

  return (
    <>
      <PageSettingsForm page={leanPage} user={session.user} />
      <PageButtonsForm page={leanPage} user={session.user} />
      <PageLinksForm page={leanPage} user={session.user} />
      <CopyProfileLink url={publicUrl} />
    </>
  );
}
