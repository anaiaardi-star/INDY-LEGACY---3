import { GoogleGenAI, Type } from "@google/genai";
import { DiagnosticResult } from "../types";
import { Language } from "../context/LanguageContext";

// Fix: Use process.env.API_KEY directly as per SDK guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const languageMap: Record<Language, string> = {
  es: "español",
  en: "English",
  fr: "français"
};

export const getLegacyDiagnostic = async (userInput: string, lang: Language = 'es'): Promise<DiagnosticResult> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this leader's situation and provide a legacy architecture diagnostic.
    User Situation: "${userInput}"`,
    config: {
      systemInstruction: `You are Indy Marchena, an expert in Conscious Leadership Architecture. 
      Your goal is to diagnose if a leader is acting as an "Operator" (stuck in day-to-day, exhausted) 
      or a "Legacy Architect" (with systems, impact, and freedom).
      
      CRITICAL: You MUST provide the response in ${languageMap[lang]}.
      
      Respond in JSON format with this structure:
      {
        "archetype": "Archetype Name",
        "description": "Empathetic and professional description (max 2 paragraphs).",
        "strengths": ["List of 3 assets/strengths"],
        "weaknesses": ["List of 3 legacy blockages"],
        "actionPlan": "A high-level immediate roadmap."
      }
      
      Use an editorial, premium, direct, and compassionate tone.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          archetype: { type: Type.STRING },
          description: { type: Type.STRING },
          strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
          weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
          actionPlan: { type: Type.STRING }
        },
        required: ["archetype", "description", "strengths", "weaknesses", "actionPlan"]
      }
    }
  });

  // Fix: Directly use .text property instead of calling .text() method
  const text = response.text;
  if (!text) throw new Error("No response from AI");
  return JSON.parse(text) as DiagnosticResult;
};