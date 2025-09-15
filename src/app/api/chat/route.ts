import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

let chatSession: any = null;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Missing GEMINI_API_KEY in .env.local");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Create chat session once with instructions
    if (!chatSession) {
      chatSession = model.startChat({
        history: [
          {
            role: "user", // yahan system role use hoga
            parts: [
              {
                text: `You are Foodie's Recipe Assistant 🍲.
- Always give helpful, step-by-step recipe guidance.
- If user says greetings (hi, hello, salam, etc.), reply politely as a friendly assistant.
- If user asks about non-food topics (politics, maths, physics, business, etc.), strictly say:
  "⚠️ I can only help with recipes and cooking. Please ask me about food 🍲"
- Always stay within recipes, food, cooking, and ingredients.`,
              },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 500,
        },
      });
    }

    // Send user message
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
