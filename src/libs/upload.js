export async function upload(ev, onUploaded) {
  const file = ev.target.files?.[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Error subiendo archivo");

    const data = await res.json();
    onUploaded(data.url);
  } catch (error) {
    console.error("Error al subir archivo:", error);
  }
}
