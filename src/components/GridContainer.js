import React from "react";
import GridItem from "./GridItem";
import {
  FaUserFriends,
  FaStore,
  FaChartBar,
  FaGlobe,
  FaQrcode,
  FaPlug,
} from "react-icons/fa";

const items = [
  {
    Icon: FaUserFriends,
    title: "Haz crecer tus seguidores en todas tus plataformas sociales",
    description:
      "Ofrece a tus seguidores acceso fácil a todo tu contenido con un solo enlace. ¡Ahora todo está a un solo clic!",
  },
  {
    Icon: FaStore,
    title: "Vende productos y monetiza tu audiencia",
    description:
      "Vende tus productos, acepta pagos e incluso incluye enlaces de “Apóyame” para que tu audiencia pueda apoyarte, dar propinas o donar.",
  },
  {
    Icon: FaChartBar,
    title: "Crezca con análisis de usuarios en profundidad",
    description:
      "Utilice análisis potentes para saber con qué interactúan sus seguidores y utilice esa información para hacer crecer sus seguidores y su negocio.",
  },
  {
    Icon: FaGlobe,
    title: "Crea un minisitio web personalizado en segundos",
    description:
      "Crea tu propio LinkHub en solo unos segundos y personalízalo de manera que refleje tu marca o estilo.",
  },
  {
    Icon: FaQrcode,
    title: "Lleva tu mundo offline al mundo online con códigos QR",
    description:
      "Conecte fácilmente desde la vida real (el empaque de su producto, sus carteles y folletos) a su mundo en línea con un simple código QR.",
  },
  {
    Icon: FaPlug,
    title: "Integre su LinkHub con su tecnología existente",
    description:
      "LinkHub se conecta perfectamente a otras plataformas como Mailchimp, Vimeo, Zapier, Amazon, YouTube, Google Analytics y ¡muchas más!",
  },
];

const GridContainer = () => {
  return (
    <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <GridItem
          key={index}
          Icon={item.Icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default GridContainer;
