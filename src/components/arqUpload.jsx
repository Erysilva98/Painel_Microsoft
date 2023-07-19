"use client";
import { useState } from "react";

export default function ArqUpload () {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.log("Nenhum arquivo selecionado.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Arquivo enviado com sucesso!");
        setSelectedFile(null);
      } else {
        console.log("Erro ao enviar o arquivo.");
      }
    } catch (error) {
      console.log("Erro ao enviar o arquivo:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="mt-8 w-32 border-2 border-blue-m200 rounded-lg px-3 py-2 hover:bg-gradient-to-r from-blue-m100 to-blue-m200 hover:text-white">Enviar</button>
    </div>
  );
};

