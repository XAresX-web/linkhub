"use client";
import grabUsername from "@/actions/grabUsername";
import SubmitButton from "@/components/buttons/SubmitButton";
import RightIcon from "@/components/icons/RightIcon";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function UsernameForm({ desiredUsername }) {
  const [taken, setTaken] = useState(false);
  async function handleSubmit(formData) {
    const result = await grabUsername(formData);

    setTaken(result === false);
    if (result) {
      redirect("/account?created=" + formData.get("username"));
    }
  }
  return (
    <form action={handleSubmit}>
      <h1 className="text-4xl font-bold text-center mb-2 mt-20">
        Elije tu nombre de usuario
      </h1>
      <div className="max-w-xs mx-auto">
        <input
          name="username"
          className="block p-2 mx-auto border w-full mb-2 text-center rounded-md"
          defaultValue={desiredUsername}
          type="text"
          placeholder="username"
        />
        {taken && (
          <div className="bg-red-200 border border-red-500 p-2 mb-2 text-center rounded-md">
            Este nombre de usuario ya está registrado
          </div>
        )}
        <SubmitButton>
          <span>Reclama tu nombre de usuario</span>
          <RightIcon />
        </SubmitButton>
      </div>
    </form>
  );
}
