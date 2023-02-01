import React from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const Chatgp3 = () => {
  const [prompt, setPrompt] = useState("");
  const [ia, setIa] = useState("");

  const config = new Configuration({
    apiKey: import.meta.env.VITE_key_api,
  });
  const openai = new OpenAIApi(config);

  const chatgp3 = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    console.log(response.data.choices[0].text);
    setIa(response.data.choices[0].text);
  };

  // Establecemos un objeto con respuestas predeterminadas
  const responses = {
    greeting: "Hola, ¿cómo estás?",
    default: "No te entiendo",
  };
  // Creamos una función que nos devuelva la respuesta
  const getResponse = (message) => {
    if (message.includes("hola")) {
      return responses.greeting;
    } else {
      return responses.default;
    }
  };

  return (
    <div>
      <h1>Chat con GPT-3</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={chatgp3}>Enviar</button>

      <br />
      <p>{ia}</p>
    </div>
  );
};

export default Chatgp3;
