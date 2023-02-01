import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import "./imagenGenerator.css";

const ImagenGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imagen, setImagen] = useState("");

  const config = new Configuration({
    apiKey: import.meta.env.VITE_key_api,
  });
  const openai = new OpenAIApi(config);

  const generateImagen = async () => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    console.log(response.data.data[0].url);

    setImagen(response.data.data[0].url);
  };

  return (
    <div>
      <h1>Generador de imágenes</h1>
      input:{" "}
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImagen}>Generar imagen</button>
      <br />
      <img src={imagen} alt="imagen" />
    </div>
  );
};

export default ImagenGenerator;
