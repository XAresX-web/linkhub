import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

export const metadata = {
  title: "LinkHub | Login",
  description:
    "Share your links, social profiles, contact info and more on one page",
};
export default function LoginPage() {
  return (
    <div>
      <div className="p-4 max-w-xs mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-2">Iniciar sesión</h1>
        <p className="text-center mb-10 text-gray-500">
          Inicie sesión en su cuenta utilizando uno de los siguientes métodos
        </p>
        <LoginWithGoogle />
      </div>
    </div>
  );
}
