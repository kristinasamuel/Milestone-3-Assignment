import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Session ek baar hi create hoga (history maintain hogi)
let chatSession: any = null;

// Guardrail function: sirf recipe related input allow karega
function recipeGuardrail(input: string) {
  const isRecipeRelated = /(recipe|cook|food|dish|ingredient|meal|breakfast|lunch|dinner|snack|bake|cake|bread|pasta|pizza)/i.test(
    input
  );

  if (!isRecipeRelated) {
    return {
      triggered: true,
      reply: "⚠️ Sorry, I am a recipe assistant. Please ask me about recipes only 🍲",
    };
  }

  return { triggered: false };
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Missing GEMINI_API_KEY in .env.local");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Guardrail check
    const guard = recipeGuardrail(message);
    if (guard.triggered) {
      return NextResponse.json({ reply: guard.reply });
    }

    if (!chatSession) {
      chatSession = model.startChat({
        history: [
          {
            role: "system",
            parts: [
              {
                text: "You are Foodie's Dreamland Recipe Assistant. Always provide helpful, step-by-step recipe guidance.",
              },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 500,
        },
      });
    }

    const result = await chatSession.sendMessage(message);

    return NextResponse.json({ reply: result.response.text() });
  } catch (err: any) {
    console.error("Chatbot error:", err.message || err);
    return NextResponse.json(
      { error: "Something went wrong: " + (err.message || err) },
      { status: 500 }
    );
  }
}

