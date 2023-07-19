import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log("Erro ao fazer o parse do formulário:", err);
      return res.status(500).send("Erro ao fazer o upload do arquivo.");
    }

    const file = files.file;
    const filePath = path.join(process.cwd(), "caminho-da-pasta", file.name);

    try {
      await fs.promises.rename(file.path, filePath);
      return res.status(200).send("Arquivo enviado com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar o arquivo:", error);
      return res.status(500).send("Erro ao fazer o upload do arquivo.");
    }
  });
}
