import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import Carousel from "@/components/Carousel";
import GridContainer from "@/components/GridContainer";
import Link from "next/link";
import ImageGrid from "@/components/ImageGrid";

const imageUrls = [
  "/assets/polly.png",
  "/assets/preview.png",
  "/assets/doggie.png",
  "/assets/manfred.png",
  "/assets/walter.png",
  "/assets/model.png",
  "/assets/cat.png",
  "/assets/model1.png",
];

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <section className="pt-32 flex flex-wrap md:flex-nowrap justify-center items-center">
        <div className="max-w-6xl mb-8 md:mb-0 md:mr-8">
          <h1 className="text-6xl font-bold">Todo en uno</h1>
          <h2 className="text-gray-500 text-xl mt-6 mb-4">
            Comparte tus enlaces, perfiles de redes sociales, informaci&oacute;n
            de contacto y m&aacute;s en una sola p&aacute;gina
          </h2>
          <HeroForm user={session?.user} />
        </div>
        <Carousel images={imageUrls} />
      </section>
      <div className="mt-20 text-center max-w-5xl">
        <h1 className=" mb-5 text-5xl font-bold">
          Nunca m&aacute;s tendr&aacute;s que cambiar el enlace en tu
          biograf&iacute;a
        </h1>
        <p>
          En 2016, LinkHub solucion&oacute; el problema m&aacute;s molesto de
          las redes sociales: tener solo un enlace en la biograf&iacute;a.
          LinkHub fue la primera plataforma de &quot;enlace en la
          biograf&iacute;a&quot; creada para solucionar este problema. Desde
          entonces, LinkHub se ha convertido en mucho m&aacute;s. Permite a
          empresas y creadores sacar m&aacute;s provecho de sus redes sociales,
          aumentar su n&uacute;mero de seguidores, aceptar pagos
          f&aacute;cilmente y recuperar el control sobre c&oacute;mo se descubre
          su contenido.
        </p>
      </div>
      <GridContainer />
      <div className="mt-20 text-center max-w-5xl">
        <h1 className=" mb-5 text-5xl font-bold">
          Convierte tu LinkHub en tu propio mini-sitio web
        </h1>
        <p>
          Se necesitan unos segundos para convertir tu biograf&iacute;a en un
          mini sitio web, permitiendo a tus seguidores interactuar con tu
          contenido, descubrirte en otras plataformas o comprarte y apoyarte con
          un solo enlace simple.
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href="/account"
          className="flex items-center gap-2 border p-2 px-3 shadow rounded-md text-white bg-blue-500 hover:bg-blue-300 font-bold"
        >
          Empieza ahora
        </Link>
      </div>
      <ImageGrid images={imageUrls} />
    </main>
  );
}
