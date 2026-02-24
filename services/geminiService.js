
import { GoogleGenAI } from "@google/genai";

export const getLegacyDiagnostic = async (userInput, lang = 'es') => {
  // Nota: En producción real aquí deberías usar una instancia limpia o manejar el error de key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analiza esta situación: "${userInput}" en idioma: ${lang}`,
    config: {
      systemInstruction: "Eres Indy Marchena. Responde en JSON con: archetype, description, strengths (array), weaknesses (array), actionPlan.",
      responseMimeType: "application/json"
    }
  });

  return JSON.parse(response.text);
};
