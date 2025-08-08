import { Page } from "@/models/Page";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import cloneDeep from "clone-deep";
import { redirect } from "next/navigation";

import PageButtonsForm from "@/components/forms/PageButtonsForm";
import PageLinksForm from "@/components/forms/PageLinksForm";
import PageSettingsForm from "@/components/forms/PageSettingsForm";
import UsernameForm from "@/components/forms/UsernameForm";
import dynamic from "next/dynamic";

const CopyProfileLink = dynamic(
  () => import("@/components/buttons/CopyProfileLink"),
  { ssr: false }
);

export default async function AccountPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }

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
