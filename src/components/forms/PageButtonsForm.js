"use client";

import { savePageButtons } from "@/actions/pageActions";
import SubmitButton from "@/components/buttons/SubmitButton";
import SectionBox from "@/components/layout/SectionBox";
import { ReactSortable } from "react-sortablejs";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faInstagramSquare,
  faTelegram,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGripLines,
  faMobile,
  faPlus,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const allButtons = [
  {
    key: "email",
    label: "Correo",
    icon: faEnvelope,
    placeholder: "ejemplo@correo.com",
  },
  {
    key: "mobile",
    label: "Móvil",
    icon: faMobile,
    placeholder: "+34 612 345 678",
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: faInstagram,
    placeholder: "https://instagram.com/tu_usuario",
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: faFacebook,
    placeholder: "https://facebook.com/tu_usuario",
  },
  {
    key: "discord",
    label: "Discord",
    icon: faDiscord,
    placeholder: "Usuario#1234",
  },
  {
    key: "tiktok",
    label: "TikTok",
    icon: faTiktok,
    placeholder: "https://tiktok.com/@tu_usuario",
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: faYoutube,
    placeholder: "https://youtube.com/tu_canal",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: faWhatsapp,
    placeholder: "+34 612 345 678",
  },
  {
    key: "github",
    label: "GitHub",
    icon: faGithub,
    placeholder: "https://github.com/tu_usuario",
  },
  {
    key: "telegram",
    label: "Telegram",
    icon: faTelegram,
    placeholder: "@tu_usuario",
  },
];

function upperFirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export default function PageButtonsForm({ user, page }) {
  const pageButtons = page.buttons || {};
  const pageSavedButtonsKeys = Object.keys(pageButtons);
  const pageSavedButtonsInfo = pageSavedButtonsKeys.map((k) =>
    allButtons.find((b) => b.key === k)
  );
  const [activeButtons, setActiveButtons] = useState(pageSavedButtonsInfo);
  const [isIconLoading, setIsIconLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsIconLoading(false);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, []);

  function addButtonToProfile(button) {
    setActiveButtons((prevButtons) => {
      return [...prevButtons, button];
    });
  }

  async function saveButtons(formData) {
    await savePageButtons(formData);
    toast.success("Configuración guardada!");
  }

  function removeButton({ key: keyToRemove }) {
    setActiveButtons((prevButtons) => {
      return prevButtons.filter((button) => button.key !== keyToRemove);
    });
  }

  const availableButtons = allButtons.filter(
    (b1) => !activeButtons.find((b2) => b1.key === b2.key)
  );

  return (
    <SectionBox>
      <form action={saveButtons}>
        <h2 className="text-2xl font-bold mb-4">Enlaces</h2>
        <ReactSortable
          handle=".handle"
          list={activeButtons}
          setList={setActiveButtons}
        >
          {activeButtons.map((b) => (
            <div key={b.key} className="mb-4 md:flex items-center">
              <div className="w-56 flex h-full text-gray-700 p-2 gap-2 items-center">
                {isIconLoading ? (
                  <div className="animate-pulse bg-gray-300 w-4 h-4 rounded-full" />
                ) : (
                  <FontAwesomeIcon
                    icon={faGripLines}
                    className="cursor-pointer text-gray-400 handle p-2"
                  />
                )}
                {isIconLoading ? (
                  <div className="animate-pulse bg-gray-300 w-4 h-4 rounded-full" />
                ) : (
                  <FontAwesomeIcon icon={b.icon} />
                )}
                <span>{upperFirst(b.label)}:</span>
              </div>
              <div className="grow flex">
                <input
                  className="rounded-md"
                  placeholder={b.placeholder}
                  name={b.key}
                  defaultValue={page.buttons?.[b.key] ?? ""} // Use optional chaining and provide a default value
                  type="text"
                  style={{ marginBottom: "0" }}
                />

                <button
                  onClick={() => removeButton(b)}
                  type="button"
                  className="py-2 px-4  bg-gray-300 cursor-pointer rounded-md hover:bg-red-500 hover:text-white"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </ReactSortable>
        <div className="flex flex-wrap gap-2 mt-4 border-y py-4">
          {availableButtons.map((b) => (
            <button
              key={b.key}
              type="button"
              onClick={() => addButtonToProfile(b)}
              className="flex items-center gap-1 p-2 bg-gray-200 rounded-md hover:bg-gray-100"
            >
              {isIconLoading ? (
                <div className="animate-pulse bg-gray-300 w-4 h-4 rounded-full" />
              ) : (
                <FontAwesomeIcon icon={b.icon} />
              )}
              <span className="">{upperFirst(b.label)}</span>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          ))}
        </div>
        <div className="max-w-xs mx-auto mt-8">
          <SubmitButton>
            {isIconLoading ? (
              <div className="animate-pulse bg-gray-300 w-4 h-4 rounded-full" />
            ) : (
              <FontAwesomeIcon icon={faSave} />
            )}
            <span>Guardar</span>
          </SubmitButton>
        </div>
      </form>
    </SectionBox>
  );
}
