import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST() {
  const interaction = await ai.interactions.create({
    model: "gemini-3.7-flash",
    input: "Explain how AI works in a few words",
  });

  return Response.json({
    result: interaction.output_text,
  });
}