import { IChat } from "../components/absolutes/chatBtn";

export const api_getAIResponse = async (
  chat: IChat[],
  callback: (res: string) => void
) => {
  const token = import.meta.env.VITE_OPENAI;

  const graphicsContext = [
    {
      title: "Torta de edades",
      description:
        "Se muestran la cantidad de pacientes en las diferentes edades",
    },
    {
      title: "Torta de tallas",
      description:
        "La cantidad de pacientes en rangos de tallas de 150 a 180 y otras",
    },
    {
      title: "Torta de pesos",
      description:
        "La cantidad de pacientes en rangos de pesos de 50 a 110 kg y otras",
    },
    {
      title: "Barra de géneros",
      description:
        "La cantidad de pacientes en rangos de pesos de 50 a 110 kg y otras",
    },
  ];

  try {
    const apiUrl = "https://api.openai.com/v1/chat/completions";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Eres un asistente virtual experto en la interpretación de gráficos y dashboards clínicos en los que se muestran distintos datos de pacientes que se tomaron examen," +
              " perteneces a una aplicación informativa llamada Medula la cual maneja información de análisis y exámenes clínicos realizados a empleados de la CBN (Cervecería Boliviana Nacional)," +
              " tienes un apartado de gráficos donde se muestran las distintos datos obtenidos, separados y analizados de los resultados de los análisis," +
              " el usuario tiene la opción de preguntarte acerca de los datos de cualquier gráfico haciendo click en su botón de interpretar, necesito que le des una explicación detallada de estos cuando te lo pregunte," +
              " también puede preguntarte comparando dos datos seleccionando la opción 'Comparar' o si gusta preguntarte acerca de la petición entera con la opción 'Explicar fila entera', " +
              " Además tienes un mapa el cual permite filtrar los datos de cualquier departamento de Bolivia," +
              " La lista de los distintos gráficos que tienes detalladamente es la siguiente: " +
              graphicsContext
                .map((v) => `- ${v.title}: ${v.description}`)
                .join("\n") +
              "... abstente lo más que puedas a ayudar en otro tipo de temas que no sean de tu área",
          },
          ...chat.map((message) => ({
            role: message.me ? "user" : "assistant",
            content: message.content,
          })),
        ],
        temperature: 0.5,
        max_tokens: 1200,
        stream: true,
      }),
    });

    if (response.ok && response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      while (true) {
        const chunk = await reader.read();
        const { done, value } = chunk;
        if (done) {
          break;
        }
        const decodedChunk = decoder.decode(value);
        const lines = decodedChunk.split("\n");
        const parsedLines = lines
          .map((line) => line.replace(/^data: /, ""))
          .filter((line) => line !== "" && line !== "[DONE]")
          .map((line) => JSON.parse(line));
        for (const parsedLine of parsedLines) {
          const { choices } = parsedLine;
          const { delta } = choices[0];
          const { content } = delta;
          if (content) {
            callback(content);
          }
        }
      }
    }
  } catch (error) {
    console.log("Error en la petición");
    console.log(error);
  }
};
